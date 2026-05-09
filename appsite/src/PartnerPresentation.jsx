import React, { useState, useEffect, useRef } from 'react';

const CONTACT_LINK = 'https://max.ru/id503360228433_bot?start=partner8838317';

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

export default function PartnerPresentation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const ACCENT = '#34d399';
  const ACCENT_GRAD = 'linear-gradient(135deg, #34d399, #059669)';

  return (
    <div style={{ minHeight: '100vh', background: '#080810', fontFamily: "'DM Sans', 'Segoe UI', sans-serif", color: 'white', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,700;0,9..40,900&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
        .btn-glow:hover { transform: scale(1.05); box-shadow: 0 0 48px rgba(52,211,153,0.4); }
        .btn-glow { transition: all 0.25s ease; }
        .card-h:hover { transform: translateY(-5px); border-color: rgba(52,211,153,0.3) !important; }
        .card-h { transition: all 0.3s ease; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #34d399; border-radius: 4px; }
        @media (max-width: 767px) {
          .card-h:hover { transform: none; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: isMobile ? '14px 20px' : '16px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(8,8,16,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.4s ease'
      }}>
        <a href="https://мониторинг-вб.рф" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '18px', textDecoration: 'none' }}>
          <span style={{ color: 'white' }}>Мониторинг</span>
          <span style={{ color: ACCENT }}>·ВБ</span>
        </a>

        {isMobile ? (
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[0,1,2].map(i => (
              <div key={i} style={{ width: '24px', height: '2px', background: 'white', borderRadius: '2px', transition: 'all 0.3s',
                transform: menuOpen ? (i === 0 ? 'rotate(45deg) translate(5px, 5px)' : i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'scaleX(0)') : 'none'
              }} />
            ))}
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <a href="#how" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '14px' }}>Как работает</a>
            <a href="#earnings" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '14px' }}>Доход</a>
            <a href={CONTACT_LINK} target="_blank" rel="noreferrer" className="btn-glow" style={{
              padding: '10px 24px', background: ACCENT_GRAD,
              borderRadius: '100px', fontSize: '14px', fontWeight: 700, color: 'white', textDecoration: 'none'
            }}>Стать партнёром →</a>
          </div>
        )}
      </nav>

      {/* MOBILE MENU */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: '56px', left: 0, right: 0, zIndex: 99,
          background: 'rgba(8,8,16,0.98)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: '20px'
        }}>
          <a href="#how" onClick={() => setMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Как работает</a>
          <a href="#earnings" onClick={() => setMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Доход</a>
          <a href={CONTACT_LINK} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} style={{
            padding: '14px 24px', background: ACCENT_GRAD, borderRadius: '100px',
            fontSize: '15px', fontWeight: 700, color: 'white', textDecoration: 'none', textAlign: 'center'
          }}>🤝 Подать заявку</a>
        </div>
      )}

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: isMobile ? '120px 20px 60px' : '140px 40px 80px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '10%', left: '0%', width: isMobile ? '350px' : '600px', height: isMobile ? '350px' : '600px', background: 'radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', bottom: '0%', right: '-5%', width: isMobile ? '280px' : '500px', height: isMobile ? '280px' : '500px', background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)' }} />
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.035 }}>
            <defs>
              <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 20px', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', borderRadius: '100px', marginBottom: '32px', fontSize: isMobile ? '12px' : '13px', color: ACCENT, fontWeight: 600 }}>
              💰 Пассивный доход на автопилоте
            </div>

            <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: isMobile ? '38px' : 'clamp(44px, 6vw, 84px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: '24px' }}>
              Зарабатывайте<br />
              <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(135deg, #34d399 0%, #059669 40%, #10b981 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>160 ₽</span>
              {' '}с каждой<br />подписки
            </h1>

            <p style={{ fontSize: isMobile ? '16px' : '19px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: '600px', marginBottom: '40px', padding: isMobile ? '0 4px' : 0 }}>
              Расскажите своей аудитории о боте мониторинга цен на Wildberries. Получайте 40% от каждой оплаченной подписки на весь период сотрудничества — со всех платежей, не только с первого.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '48px', width: '100%' }}>
              <a href={CONTACT_LINK} target="_blank" rel="noreferrer" className="btn-glow" style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: isMobile ? '15px 28px' : '18px 40px', background: ACCENT_GRAD,
                borderRadius: '100px', fontSize: isMobile ? '15px' : '17px', fontWeight: 700, color: 'white', textDecoration: 'none',
              }}>
                🤝 Подать заявку
              </a>
              <a href="#how" style={{
                padding: isMobile ? '15px 28px' : '18px 40px', background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)', borderRadius: '100px',
                fontSize: isMobile ? '15px' : '17px', fontWeight: 600, color: 'white', textDecoration: 'none'
              }}>
                Как это работает
              </a>
            </div>

            {/* Key metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: isMobile ? '12px' : '24px', width: '100%', maxWidth: '700px' }}>
              {[
                { n: '40%', l: 'с каждой оплаты', c: ACCENT },
                { n: '160 ₽', l: 'за подписку', c: '#a855f7' },
                { n: '∞', l: 'со всех платежей', c: '#f59e0b' }
              ].map(m => (
                <div key={m.l} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: isMobile ? '16px' : '20px', padding: isMobile ? '20px 12px' : '28px 20px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: isMobile ? '28px' : '40px', fontWeight: 800, color: m.c, lineHeight: 1, marginBottom: '8px' }}>{m.n}</div>
                  <div style={{ fontSize: isMobile ? '11px' : '13px', color: 'rgba(255,255,255,0.45)' }}>{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ padding: isMobile ? '60px 20px' : '100px 40px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '48px' : '72px' }}>
              <div style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: ACCENT, marginBottom: '14px', fontWeight: 600 }}>Механика</div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: isMobile ? '28px' : 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em' }}>Как это работает</h2>
            </div>
          </FadeIn>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { n: '01', icon: '📝', title: 'Заполните заявку', desc: 'Зарегистрируйтесь в партнёрской программе, заполнив короткую форму. После одобрения вы получаете личный кабинет.', color: ACCENT },
              { n: '02', icon: '🔗', title: 'Получите реферальную ссылку', desc: 'В личном кабинете вы получаете уникальную ссылку. Если у вас есть канал в MAX — настраиваем обязательную подписку на него при регистрации пользователей.', color: '#a855f7' },
              { n: '03', icon: '📢', title: 'Рассказывайте о боте', desc: 'Публикуйте о боте в своих соцсетях, блоге, Дзен, Telegram-канале. Пользователи переходят по вашей ссылке.', color: '#6366f1' },
              { n: '04', icon: '💸', title: 'Получайте выплаты', desc: '40% от каждой оплаты ваших пользователей — 160 ₽ за подписку. Бонусы начисляются со всех платежей, а не только с первого.', color: '#f59e0b' }
            ].map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.1}>
                <div className="card-h" style={{ display: 'flex', alignItems: 'flex-start', gap: isMobile ? '16px' : '24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: isMobile ? '20px' : '28px 32px' }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: isMobile ? '24px' : '36px', fontWeight: 800, color: s.color, opacity: 0.4, lineHeight: 1, flexShrink: 0, minWidth: isMobile ? '36px' : '48px' }}>{s.n}</div>
                  <div style={{ fontSize: isMobile ? '24px' : '32px', flexShrink: 0 }}>{s.icon}</div>
                  <div>
                    <h3 style={{ fontSize: isMobile ? '16px' : '20px', fontWeight: 700, marginBottom: '8px' }}>{s.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: isMobile ? '13px' : '15px' }}>{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* MAX channel bonus */}
          <FadeIn delay={0.2}>
            <div style={{ marginTop: '20px', background: 'linear-gradient(135deg, rgba(52,211,153,0.12), rgba(5,150,105,0.06))', border: '1px solid rgba(52,211,153,0.25)', borderRadius: '20px', padding: isMobile ? '24px 20px' : '32px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ fontSize: isMobile ? '28px' : '36px', flexShrink: 0 }}>🌟</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: isMobile ? '16px' : '18px', marginBottom: '8px', color: ACCENT }}>Бонус для владельцев каналов в MAX</div>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: isMobile ? '13px' : '15px' }}>
                  Если у вас есть канал в мессенджере MAX, мы настроим <strong style={{ color: 'white' }}>обязательную подписку на ваш канал</strong> при регистрации пользователей через вашу ссылку. Каждый новый пользователь бота — это новый подписчик вашего канала автоматически.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* EARNINGS CALCULATOR */}
      <section id="earnings" style={{ padding: isMobile ? '60px 20px' : '100px 40px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '48px' : '72px' }}>
              <div style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: ACCENT, marginBottom: '14px', fontWeight: 600 }}>Доход</div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: isMobile ? '28px' : 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em' }}>Считайте вместе с нами</h2>
              <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: '16px', fontSize: isMobile ? '13px' : '16px' }}>Подписка 400 ₽ · Ваша доля 40% = 160 ₽ за каждую оплату</p>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
            {[
              { users: 100, label: '100 активных пользователей', monthly: '16 000 ₽', yearly: '192 000 ₽', color: ACCENT, featured: false },
              { users: 200, label: '200 активных пользователей', monthly: '32 000 ₽', yearly: '384 000 ₽', color: '#a855f7', featured: true },
              { users: 500, label: '500 активных пользователей', monthly: '80 000 ₽', yearly: '960 000 ₽', color: '#f59e0b', featured: false }
            ].map((tier, i) => (
              <FadeIn key={tier.users} delay={i * 0.1}>
                <div className="card-h" style={{
                  background: tier.featured ? 'linear-gradient(135deg, rgba(168,85,247,0.18), rgba(99,102,241,0.1))' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${tier.featured ? 'rgba(168,85,247,0.35)' : 'rgba(255,255,255,0.07)'}`,
                  borderRadius: '24px', padding: isMobile ? '28px 20px' : '36px 28px', textAlign: 'center', position: 'relative'
                }}>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '20px' }}>{tier.label}</div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: isMobile ? '36px' : '42px', fontWeight: 800, color: tier.color, lineHeight: 1 }}>{tier.monthly}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '6px', marginBottom: '16px' }}>в месяц</div>
                  <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.07)', margin: '16px 0' }} />
                  <div style={{ fontSize: '20px', fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>{tier.yearly}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '4px' }}>в год</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div style={{ marginTop: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '20px 24px', textAlign: 'center' }}>
              <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px' }}>
                💡 Бонусы действуют на <strong style={{ color: 'white' }}>все</strong> платежи пользователей — не только на первую оплату. Чем дольше ваши пользователи остаются, тем больше вы зарабатываете.
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PARTNER CABINET */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '48px' : '72px' }}>
              <div style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: ACCENT, marginBottom: '14px', fontWeight: 600 }}>Личный кабинет</div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: isMobile ? '28px' : 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em' }}>Всё под контролем</h2>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)', gap: isMobile ? '12px' : '20px' }}>
            {[
              { icon: '📊', title: 'Статистика', desc: 'Переходы, регистрации, активные подписки — все данные в реальном времени' },
              { icon: '💳', title: 'Начисления', desc: 'История выплат и текущий баланс. Прозрачная система учёта каждого рубля' },
              { icon: '🔗', title: 'Ваша ссылка', desc: 'Уникальная реферальная ссылка с вашим ID. Просто скопируйте и делитесь' },
              { icon: '🎯', title: 'MAX канал', desc: 'Настройка обязательной подписки на ваш канал при регистрации через вашу ссылку' },
              { icon: '🤝', title: 'Поддержка', desc: 'Команда проекта ответит на любые вопросы' }
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="card-h" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: isMobile ? '20px 16px' : '28px' }}>
                  <div style={{ fontSize: isMobile ? '28px' : '32px', marginBottom: '12px' }}>{item.icon}</div>
                  <h3 style={{ fontSize: isMobile ? '14px' : '17px', fontWeight: 700, marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: isMobile ? '12px' : '14px', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section style={{ padding: isMobile ? '60px 20px' : '80px 40px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '56px' }}>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: isMobile ? '24px' : 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em' }}>Кому подойдёт партнёрство?</h2>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '12px' }}>
            {[
              { icon: '📱', title: 'Блогеры и инфлюенсеры', desc: 'С аудиторией от 100 подписчиков в Telegram, ВКонтакте, Дзене, TikTok или Instagram* — любая площадка' },
              { icon: '📺', title: 'Авторы каналов в MAX', desc: 'Бонус: пользователи автоматически подписываются на ваш канал при регистрации в боте' },
              { icon: '✍️', title: 'Контент-мейкеры', desc: 'Пишите о скидках, покупках, экономии — аудитория уже готова к вашему предложению' },
              { icon: '🌐', title: 'Владельцы сайтов', desc: 'Разместите ссылку или баннер — монетизируйте трафик с минимальными усилиями' }
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="card-h" style={{ display: 'flex', gap: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '18px', padding: isMobile ? '20px' : '24px 28px' }}>
                  <div style={{ fontSize: isMobile ? '28px' : '32px', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <h3 style={{ fontSize: isMobile ? '15px' : '17px', fontWeight: 700, marginBottom: '6px' }}>{item.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: isMobile ? '13px' : '14px', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <div style={{ background: 'linear-gradient(135deg, #064e3b, #065f46, #047857)', borderRadius: '32px', padding: isMobile ? '48px 24px' : '64px 48px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 30%, rgba(52,211,153,0.2) 0%, transparent 60%)' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: isMobile ? '26px' : 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>
                  Готовы зарабатывать?
                </div>
                <p style={{ fontSize: isMobile ? '15px' : '17px', color: 'rgba(255,255,255,0.75)', marginBottom: '36px', lineHeight: 1.7 }}>
                  Подайте заявку — мы рассмотрим её и свяжемся с вами в течение 24 часов.
                </p>
                <a href={CONTACT_LINK} target="_blank" rel="noreferrer" className="btn-glow" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: isMobile ? '15px 32px' : '18px 40px', background: 'white', borderRadius: '100px',
                  fontSize: isMobile ? '15px' : '16px', fontWeight: 800, color: '#064e3b', textDecoration: 'none'
                }}>
                  🤝 Подать заявку
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
      <footer style={{ padding: isMobile ? '32px 20px' : '40px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {isMobile ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', textAlign: 'center' }}>
              <a href="https://мониторинг-вб.рф" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '18px', textDecoration: 'none' }}>
                <span style={{ color: 'white' }}>Мониторинг</span>
                <span style={{ color: ACCENT }}>·ВБ</span>
              </a>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="#how" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px' }}>Как работает</a>
                <a href="#earnings" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px' }}>Доход</a>
                <a href={CONTACT_LINK} target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px' }}>Подать заявку</a>
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)' }}>© 2026 Мониторинг ВБ</div>
            </div>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <a href="https://мониторинг-вб.рф" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, textDecoration: 'none' }}>
                <span style={{ color: 'white' }}>Мониторинг</span>
                <span style={{ color: ACCENT }}>·ВБ</span>
              </a>
              <div style={{ display: 'flex', gap: '32px' }}>
                <a href="#how" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px' }}>Как работает</a>
                <a href="#earnings" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px' }}>Доход</a>
                <a href={CONTACT_LINK} target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px' }}>Подать заявку</a>
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)' }}>© 2026 Мониторинг ВБ</div>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
}