import React, { useState, useEffect, useRef } from 'react';

const CONTACT_LINK = 'https://max.ru/id503360228433_bot?start=manager8838317'; // Ссылка для менеджеров

const useInView = (threshold = 0.12) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const FadeIn = ({ children, delay = 0, className = '' }) => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`
    }}>{children}</div>
  );
};

export default function ManagerPresentation() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Accent colour for this page: blue/indigo
  const ACCENT = '#6366f1';
  const ACCENT2 = '#818cf8';
  const ACCENT_GRAD = 'linear-gradient(135deg, #6366f1, #4f46e5)';

  return (
    <div style={{ minHeight: '100vh', background: '#080810', fontFamily: "'DM Sans', 'Segoe UI', sans-serif", color: 'white', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,700;0,9..40,900&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
        .btn-glow-blue:hover { transform: scale(1.05); box-shadow: 0 0 48px rgba(99,102,241,0.5); }
        .btn-glow-blue { transition: all 0.25s ease; }
        .card-h:hover { transform: translateY(-5px); border-color: rgba(99,102,241,0.3) !important; }
        .card-h { transition: all 0.3s ease; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #6366f1; border-radius: 4px; }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '16px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(8,8,16,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.4s ease'
      }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '18px' }}>
          <span style={{ color: 'white' }}>Мониторинг</span>
          <span style={{ color: ACCENT }}>·ВБ</span>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', marginLeft: '10px', fontFamily: 'DM Sans, sans-serif', fontWeight: 400 }}>для менеджеров</span>
        </div>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#how" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '14px' }}>Как работает</a>
          <a href="#earnings" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '14px' }}>Доход</a>
          <a href={CONTACT_LINK} target="_blank" rel="noreferrer" className="btn-glow-blue" style={{
            padding: '10px 24px', background: ACCENT_GRAD,
            borderRadius: '100px', fontSize: '14px', fontWeight: 700, color: 'white', textDecoration: 'none'
          }}>Стать менеджером →</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '140px 40px 80px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '650px', height: '650px', background: 'radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', bottom: '0%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)' }} />
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.035 }}>
            <defs>
              <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 20px', background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.28)', borderRadius: '100px', marginBottom: '32px', fontSize: '13px', color: ACCENT2, fontWeight: 600 }}>
              🏆 Двухуровневый пассивный доход
            </div>

            <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(44px, 6vw, 84px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: '28px' }}>
              Стройте команду<br />
              <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(135deg, #818cf8 0%, #6366f1 40%, #4f46e5 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>и получайте</span>
              {' '}доход<br />на двух уровнях
            </h1>

            <p style={{ fontSize: '19px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: '640px', marginBottom: '48px' }}>
              Приглашайте партнёров-инфлюенсеров в проект и зарабатывайте с каждой их подписки. Привлекайте других менеджеров — и получайте доход с их команд тоже.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '64px' }}>
              <a href={CONTACT_LINK} target="_blank" rel="noreferrer" className="btn-glow-blue" style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '18px 40px', background: ACCENT_GRAD,
                borderRadius: '100px', fontSize: '17px', fontWeight: 700, color: 'white', textDecoration: 'none',
                boxShadow: '0 0 0 0 rgba(99,102,241,0.3)'
              }}>
                🚀 Стать менеджером
              </a>
              <a href="#how" style={{
                padding: '18px 40px', background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)', borderRadius: '100px',
                fontSize: '17px', fontWeight: 600, color: 'white', textDecoration: 'none'
              }}>
                Как это работает
              </a>
            </div>

            {/* Key metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', width: '100%', maxWidth: '700px' }}>
              {[
                { n: '10%', l: 'с подписок партнёров', c: ACCENT2 },
                { n: '40 ₽', l: 'за каждую подписку', c: '#a855f7' },
                { n: '5%', l: 'с команды 2-го уровня', c: '#f59e0b' }
              ].map(m => (
                <div key={m.l} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '28px 20px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '40px', fontWeight: 800, color: m.c, lineHeight: 1, marginBottom: '8px' }}>{m.n}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ padding: '100px 40px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '72px' }}>
              <div style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: ACCENT2, marginBottom: '14px', fontWeight: 600 }}>Механика</div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em' }}>Как это работает</h2>
            </div>
          </FadeIn>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { n: '01', icon: '📝', title: 'Подайте заявку', desc: 'Заполните форму и станьте менеджером. После одобрения вы получаете личный кабинет с реферальной ссылкой для партнёров.', color: ACCENT2 },
              { n: '02', icon: '🤝', title: 'Приглашайте партнёров', desc: 'Находите инфлюенсеров, блогеров, авторов каналов — и приглашайте их в партнёрскую программу по вашей ссылке. Вы получаете 10% (40 ₽) с каждой оплаты их пользователей на весь период сотрудничества.', color: '#a855f7' },
              { n: '03', icon: '👥', title: 'Приглашайте менеджеров', desc: 'Привлекайте коллег-менеджеров. Партнёры нового менеджера тоже работают на вас: вы получаете 5% (20 ₽) с каждой подписки пользователей его команды.', color: '#6366f1' },
              { n: '04', icon: '💸', title: 'Зарабатывайте на двух уровнях', desc: 'Доход поступает автоматически — с каждой оплаты подписки как от партнёров первого уровня, так и от команды менеджеров второго уровня.', color: '#f59e0b' }
            ].map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.1}>
                <div className="card-h" style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '28px 32px' }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '36px', fontWeight: 800, color: s.color, opacity: 0.4, lineHeight: 1, flexShrink: 0, minWidth: '48px' }}>{s.n}</div>
                  <div style={{ fontSize: '32px', flexShrink: 0 }}>{s.icon}</div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>{s.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* INCOME STRUCTURE */}
      <section style={{ padding: '100px 40px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '72px' }}>
              <div style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: ACCENT2, marginBottom: '14px', fontWeight: 600 }}>Структура дохода</div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em' }}>Два источника дохода</h2>
              <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: '16px', fontSize: '16px' }}>Подписка 400 ₽ · Партнёр 1 уровня: 10% = 40 ₽ · Менеджер 2 уровня: 5% = 20 ₽</p>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
            {/* Level 1 */}
            <FadeIn delay={0}>
              <div className="card-h" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.18), rgba(79,70,229,0.08))', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '28px', padding: '40px 32px', textAlign: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: ACCENT_GRAD, borderRadius: '100px', padding: '4px 16px', fontSize: '11px', fontWeight: 700, whiteSpace: 'nowrap' }}>1-й уровень</div>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🤝</div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>Ваши партнёры</h3>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>Инфлюенсеры, которых вы пригласили в проект напрямую</p>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '52px', fontWeight: 800, color: ACCENT2, lineHeight: 1 }}>40 ₽</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', marginTop: '6px' }}>с каждой оплаты их пользователей</div>
                <div style={{ marginTop: '24px', background: 'rgba(99,102,241,0.12)', borderRadius: '12px', padding: '12px 16px', fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>10% от подписки 400 ₽</div>
              </div>
            </FadeIn>

            {/* Level 2 */}
            <FadeIn delay={0.1}>
              <div className="card-h" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '28px', padding: '40px 32px', textAlign: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #a855f7, #7c3aed)', borderRadius: '100px', padding: '4px 16px', fontSize: '11px', fontWeight: 700, whiteSpace: 'nowrap' }}>2-й уровень</div>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>👥</div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>Команды ваших менеджеров</h3>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>Партнёры менеджеров, которых привлекли вы</p>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '52px', fontWeight: 800, color: '#a855f7', lineHeight: 1 }}>20 ₽</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', marginTop: '6px' }}>с каждой оплаты их пользователей</div>
                <div style={{ marginTop: '24px', background: 'rgba(168,85,247,0.1)', borderRadius: '12px', padding: '12px 16px', fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>5% от подписки 400 ₽</div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '24px 32px', textAlign: 'center' }}>
              <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px' }}>
                💡 Бонусы начисляются на <strong style={{ color: 'white' }}>все</strong> платежи пользователей ваших партнёров — не только на первую оплату. Доход растёт вместе с активностью вашей сети.
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* EARNINGS CALCULATOR */}
      <section id="earnings" style={{ padding: '100px 40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '72px' }}>
              <div style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: ACCENT2, marginBottom: '14px', fontWeight: 600 }}>Доход</div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em' }}>Считайте вместе с нами</h2>
              <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: '16px', fontSize: '16px' }}>При среднем числе активных пользователей у каждого партнёра — 100 человек</p>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {[
              {
                tag: 'Старт', color: ACCENT2,
                partners1: 3, partners2: 0,
                label: '3 партнёра · без 2-го уровня',
                monthly: '12 000 ₽',
                yearly: '144 000 ₽',
                featured: false
              },
              {
                tag: 'Рост', color: '#a855f7',
                partners1: 10, partners2: 5,
                label: '10 партнёров + 5 менеджеров (у каждого 5 партнёров)',
                monthly: '140 000 ₽',
                yearly: '1 680 000 ₽',
                featured: true
              },
              {
                tag: 'Профи', color: '#f59e0b',
                partners1: 20, partners2: 10,
                label: '20 партнёров + 10 менеджеров (у каждого 10 партнёров)',
                monthly: '480 000 ₽',
                yearly: '5 760 000 ₽',
                featured: false
              }
            ].map((tier, i) => (
              <FadeIn key={tier.tag} delay={i * 0.1}>
                <div className="card-h" style={{
                  background: tier.featured ? 'linear-gradient(135deg, rgba(168,85,247,0.18), rgba(99,102,241,0.1))' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${tier.featured ? 'rgba(168,85,247,0.35)' : 'rgba(255,255,255,0.07)'}`,
                  borderRadius: '24px', padding: '36px 28px', textAlign: 'center', position: 'relative'
                }}>
                  {tier.featured && (
                    <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #a855f7, #6366f1)', borderRadius: '100px', padding: '4px 16px', fontSize: '11px', fontWeight: 700, whiteSpace: 'nowrap' }}>Популярно</div>
                  )}
                  <div style={{ display: 'inline-block', padding: '6px 14px', background: 'rgba(255,255,255,0.06)', borderRadius: '100px', fontSize: '11px', fontWeight: 700, color: tier.color, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{tier.tag}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', marginBottom: '24px', lineHeight: 1.6 }}>{tier.label}</div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '42px', fontWeight: 800, color: tier.color, lineHeight: 1 }}>{tier.monthly}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '6px', marginBottom: '16px' }}>в месяц</div>
                  <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.07)', margin: '16px 0' }} />
                  <div style={{ fontSize: '20px', fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>{tier.yearly}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '4px' }}>в год</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div style={{ marginTop: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '24px 32px', textAlign: 'center' }}>
              <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px' }}>
                📊 Расчёт при 100 активных пользователях у каждого партнёра в месяц. Доход по 2-му уровню суммируется с доходом по 1-му.
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MANAGER CABINET */}
      <section style={{ padding: '100px 40px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '72px' }}>
              <div style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: ACCENT2, marginBottom: '14px', fontWeight: 600 }}>Личный кабинет</div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em' }}>Всё под контролем</h2>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {[
              { icon: '📊', title: 'Статистика сети', desc: 'Количество партнёров 1-го и 2-го уровня, их активных пользователи и подписки — всё в реальном времени' },
              { icon: '💳', title: 'Начисления', desc: 'История выплат с разбивкой по уровням. Прозрачный учёт каждого рубля' },
              { icon: '🔗', title: 'Ваша ссылка', desc: 'Уникальная реферальная ссылка для приглашения партнёров и менеджеров' },
              { icon: '📣', title: 'Промо-материалы', desc: 'Готовые презентации и тексты для привлечения новых партнёров в вашу команду' },
              { icon: '🏗️', title: 'Управление командой', desc: 'Список всех ваших партнёров и менеджеров, их показатели и статус' },
              { icon: '🤝', title: 'Поддержка', desc: 'Прямой контакт с командой проекта для решения любых вопросов по работе' }
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="card-h" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '28px' }}>
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section style={{ padding: '80px 40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em' }}>Кому подойдёт роль менеджера?</h2>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            {[
              { icon: '🌐', title: 'Нетворкеры', desc: 'Если у вас широкий круг знакомств среди блогеров, авторов каналов и создателей контента — вы идеальный менеджер' },
              { icon: '💼', title: 'Маркетологи и агентства', desc: 'Работаете с инфлюенсерами или ведёте несколько проектов? Добавьте партнёрскую сеть как дополнительный канал монетизации' },
              { icon: '📲', title: 'Активные участники сообществ', desc: 'Состоите в профессиональных чатах, форумах или тематических группах — там всегда найдутся потенциальные партнёры' },
              { icon: '🚀', title: 'Предприниматели и фрилансеры', desc: 'Ищете пассивный доход, который растёт по мере расширения вашей сети, без постоянных усилий' }
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="card-h" style={{ display: 'flex', gap: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '18px', padding: '24px 28px' }}>
                  <div style={{ fontSize: '32px', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '6px' }}>{item.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 40px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #2d2b6b, #3730a3)', borderRadius: '32px', padding: '64px 48px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 30%, rgba(99,102,241,0.25) 0%, transparent 60%)' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>
                  Готовы строить команду?
                </div>
                <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.75)', marginBottom: '40px', lineHeight: 1.7 }}>
                  Подайте заявку — мы рассмотрим её и свяжемся с вами в течение 24 часов.
                </p>
                <a href={CONTACT_LINK} target="_blank" rel="noreferrer" className="btn-glow-blue" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '18px 40px', background: 'white', borderRadius: '100px',
                  fontSize: '16px', fontWeight: 800, color: '#1e1b4b', textDecoration: 'none'
                }}>
                  🚀 Стать менеджером
                </a>
                <div style={{ marginTop: '20px', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
                  ✓ Ответим за 24 часа &nbsp;·&nbsp; ✓ Личный кабинет &nbsp;·&nbsp; ✓ Бесплатно
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '40px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
            <span style={{ color: 'white' }}>Мониторинг</span>
            <span style={{ color: ACCENT }}>·ВБ</span>
          </div>
          <div style={{ display: 'flex', gap: '32px' }}>
            <a href="#how" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px' }}>Как работает</a>
            <a href="#earnings" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px' }}>Доход</a>
            <a href={CONTACT_LINK} target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px' }}>Стать менеджером</a>
          </div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)' }}>© 2026 Мониторинг ВБ</div>
        </div>
      </footer>
    </div>
  );
}