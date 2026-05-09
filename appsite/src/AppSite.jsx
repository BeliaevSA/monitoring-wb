import React, { useState, useEffect, useRef } from 'react';

const BOT_LINK = 'https://max.ru/id503360228433_bot?start=8838317';

const useInView = (threshold = 0.15) => {
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
      transform: inView ? 'translateY(0)' : 'translateY(32px)',
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`
    }}>{children}</div>
  );
};

const Ticker = ({ items }) => (
  <div style={{ overflow: 'hidden', background: 'rgba(255,255,255,0.04)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '14px 0' }}>
    <div style={{ display: 'flex', gap: '60px', animation: 'ticker 25s linear infinite', whiteSpace: 'nowrap' }}>
      {[...items, ...items].map((item, i) => (
        <span key={i} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'monospace' }}>
          {item} <span style={{ color: '#a855f7', marginLeft: '30px' }}>◆</span>
        </span>
      ))}
    </div>
  </div>
);

export default function AppSite() {
  const [scrolled, setScrolled] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let start = 0;
    const end = 450000;
    const duration = 2000;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, end);
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', fontFamily: "'DM Sans', 'Segoe UI', sans-serif", color: 'white', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,700;0,9..40,900;1,9..40,300&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes float { 0%,100% { transform: translateY(0px) rotate(-1deg); } 50% { transform: translateY(-18px) rotate(1deg); } }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .shine-btn:hover { transform: scale(1.04); box-shadow: 0 0 40px rgba(168,85,247,0.5); }
        .shine-btn { transition: all 0.25s ease; }
        .card-hover:hover { transform: translateY(-6px); border-color: rgba(168,85,247,0.4) !important; }
        .card-hover { transition: all 0.3s ease; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: #a855f7; border-radius: 4px; }

        /* NAV */
        .nav-root {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 20px;
          transition: all 0.4s ease;
        }
        .nav-links-desktop { display: none; }
        .nav-cta-mobile { display: flex; }

        /* HERO */
        .hero-section { padding: 100px 20px 60px; }
        .hero-grid { display: grid; grid-template-columns: 1fr; gap: 48px; }
        .hero-phone-col { display: none; }
        .hero-stats { display: flex; gap: 24px; flex-wrap: wrap; }
        .hero-cta-row { display: flex; flex-direction: column; align-items: flex-start; gap: 12px; }

        /* FEATURES */
        .features-section { padding: 80px 20px; }
        .features-grid { display: grid; grid-template-columns: 1fr; gap: 20px; margin-bottom: 20px; }
        .stats-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }

        /* HOW IT WORKS */
        .how-section { padding: 60px 20px; }
        .step-card { display: flex; flex-direction: column; gap: 10px; padding: 22px 20px; }

        /* PRICING */
        .pricing-section { padding: 70px 20px; }
        .pricing-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        .referral-block { padding: 22px 20px; }

        /* CTA */
        .cta-section { padding: 50px 20px; }
        .cta-box { padding: 40px 24px; border-radius: 24px; }
        .cta-title { font-size: clamp(24px, 6vw, 44px); }

        /* FOOTER */
        .footer-inner { display: flex; flex-direction: column; align-items: flex-start; gap: 16px; }
        .footer-links { display: flex; gap: 20px; flex-wrap: wrap; }

        /* SECTION HEADINGS */
        .section-h2 { font-size: clamp(28px, 6vw, 56px); }

        /* DESKTOP */
        @media (min-width: 769px) {
          .nav-root { padding: 16px 40px; }
          .nav-links-desktop { display: flex; gap: 32px; align-items: center; }
          .nav-cta-mobile { display: none; }

          .hero-section { padding: 120px 40px 80px; min-height: 100vh; display: flex; align-items: center; justify-content: center; }
          .hero-grid { grid-template-columns: 1fr 1fr; gap: 80px; }
          .hero-phone-col { display: flex; }
          .hero-stats { gap: 32px; }
          .hero-cta-row { flex-direction: row; align-items: center; }

          .features-section { padding: 120px 40px; }
          .features-grid { grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px; }
          .stats-grid { grid-template-columns: repeat(3, 1fr); gap: 16px; }

          .how-section { padding: 80px 40px; }
          .step-card { flex-direction: row; gap: 28px; padding: 28px 32px; align-items: flex-start; }

          .pricing-section { padding: 120px 40px; }
          .pricing-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
          .referral-block { padding: 28px 32px; }

          .cta-section { padding: 80px 40px; }
          .cta-box { padding: 64px 48px; border-radius: 32px; }

          .footer-inner { flex-direction: row; justify-content: space-between; align-items: center; }
          .footer-links { gap: 32px; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav-root" style={{
        background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '18px', letterSpacing: '-0.02em', flexShrink: 0 }}>
          <span style={{ color: 'white' }}>Мониторинг</span>
          <span style={{ color: '#a855f7' }}>·ВБ</span>
        </div>

        {/* Десктоп: ссылки + кнопка */}
        <div className="nav-links-desktop">
          <a href="#features" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px' }}>Возможности</a>
          <a href="#pricing" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px' }}>Тарифы</a>
          <a href={BOT_LINK} target="_blank" rel="noreferrer" className="shine-btn" style={{
            padding: '10px 24px', background: 'linear-gradient(135deg, #a855f7, #6366f1)',
            borderRadius: '100px', fontSize: '14px', fontWeight: 700, color: 'white', textDecoration: 'none'
          }}>Запустить бота →</a>
        </div>

        {/* Мобиль: компактная кнопка */}
        <a href={BOT_LINK} target="_blank" rel="noreferrer" className="nav-cta-mobile shine-btn" style={{
          padding: '9px 16px', background: 'linear-gradient(135deg, #a855f7, #6366f1)',
          borderRadius: '100px', fontSize: '13px', fontWeight: 700, color: 'white',
          textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0,
          alignItems: 'center'
        }}>Бот →</a>
      </nav>

      {/* HERO */}
      <section className="hero-section" style={{ position: 'relative' }}>
        {/* BG mesh */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', top: '40%', left: '50%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)', borderRadius: '50%', transform: 'translate(-50%, -50%)' }} />
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04 }}>
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="hero-grid" style={{ maxWidth: '1100px', margin: '0 auto', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '100px', marginBottom: '28px', animation: 'fadeSlideUp 0.6s ease both' }}>
              <div style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%', boxShadow: '0 0 8px #4ade80', animation: 'blink 1.5s ease infinite', flexShrink: 0 }} />
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>Работает 24/7 · {count.toLocaleString()} товаров</span>
            </div>

            <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(38px, 8vw, 80px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '20px', animation: 'fadeSlideUp 0.6s ease 0.1s both' }}>
              Ловите скидки<br />
              <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f97316 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>на Wildberries</span><br />
              автоматически
            </h1>

            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '32px', maxWidth: '460px', animation: 'fadeSlideUp 0.6s ease 0.2s both' }}>
              Бот в мессенджере MAX следит за ценами на ваши товары и сразу сообщает о скидках. До 30 товаров и 5 брендов — всё в одном месте.
            </p>

            <div className="hero-cta-row" style={{ animation: 'fadeSlideUp 0.6s ease 0.3s both' }}>
              <a href={BOT_LINK} target="_blank" rel="noreferrer" className="shine-btn" style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '15px 28px', background: 'linear-gradient(135deg, #a855f7, #6366f1)',
                borderRadius: '100px', fontSize: '15px', fontWeight: 700, color: 'white', textDecoration: 'none',
              }}>
                🚀 Начать бесплатно
              </a>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
                ✓ 10 дней бесплатно&nbsp;&nbsp;✓ Без автоматических списаний
              </div>
            </div>

            <div className="hero-stats" style={{ marginTop: '40px', animation: 'fadeSlideUp 0.6s ease 0.4s both' }}>
              {[['30', 'товаров'], ['5', 'брендов'], ['24/7', 'мониторинг']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '26px', fontWeight: 800, color: 'white' }}>{n}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: floating phone mockup — скрыт на мобиле */}
          <div className="hero-phone-col" style={{ justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)' }} />
            <div style={{ position: 'relative', width: '240px', height: '500px', animation: 'float 6s ease-in-out infinite', zIndex: 2 }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(145deg, #1a1a2e, #0d0d1a)', borderRadius: '38px', boxShadow: '0 40px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: '10px', background: '#111827', borderRadius: '30px', overflow: 'hidden' }}>
                  <div style={{ padding: '16px 12px', background: 'linear-gradient(180deg, #1f1135 0%, #0f0a1e 100%)', height: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg, #a855f7, #6366f1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px' }}>📊</div>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>Мониторинг ВБ</span>
                    </div>
                    <div style={{ background: 'rgba(168,85,247,0.15)', borderRadius: '12px 12px 12px 4px', padding: '10px 12px', border: '1px solid rgba(168,85,247,0.2)' }}>
                      <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>Уведомление о цене 🔔</div>
                      <div style={{ fontSize: '11px', color: 'white', fontWeight: 600, marginBottom: '6px' }}>Кроссовки Nike Air Max</div>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through' }}>8 990 ₽</span>
                        <span style={{ fontSize: '13px', color: '#4ade80', fontWeight: 800 }}>5 394 ₽</span>
                        <span style={{ background: '#ef4444', color: 'white', borderRadius: '4px', padding: '1px 5px', fontSize: '9px', fontWeight: 700 }}>-40%</span>
                      </div>
                    </div>
                    <div style={{ background: 'rgba(99,102,241,0.15)', borderRadius: '12px 12px 12px 4px', padding: '10px 12px', border: '1px solid rgba(99,102,241,0.2)' }}>
                      <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>Скидка бренда 🏷️</div>
                      <div style={{ fontSize: '11px', color: 'white', fontWeight: 600, marginBottom: '6px' }}>Adidas — скидка 35%</div>
                      <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}>Найдено 248 товаров</div>
                    </div>
                    <div style={{ background: 'rgba(236,72,153,0.1)', borderRadius: '12px 12px 12px 4px', padding: '10px 12px', border: '1px solid rgba(236,72,153,0.2)' }}>
                      <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>Изменение цены ↓</div>
                      <div style={{ fontSize: '11px', color: 'white', fontWeight: 600, marginBottom: '6px' }}>Сумка Guess</div>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through' }}>14 500 ₽</span>
                        <span style={{ fontSize: '13px', color: '#4ade80', fontWeight: 800 }}>9 990 ₽</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: 'absolute', top: '15%', right: '-10px', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(16px)', borderRadius: '14px', padding: '10px 14px', border: '1px solid rgba(74,222,128,0.3)', zIndex: 3 }}>
              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>Экономия</div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#4ade80' }}>−3 596 ₽</div>
            </div>
            <div style={{ position: 'absolute', bottom: '20%', left: '-20px', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(16px)', borderRadius: '14px', padding: '10px 14px', border: '1px solid rgba(168,85,247,0.3)', zIndex: 3 }}>
              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>Уведомлений</div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#a855f7' }}>1 247</div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <Ticker items={['Отслеживание цен', 'Скидки брендов', '10 дней бесплатно', 'Мессенджер MAX', 'До 30 товаров', 'До 5 брендов', 'Уведомления', 'Мониторинг 24/7']} />

      {/* FEATURES */}
      <section id="features" className="features-section">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div style={{ display: 'inline-block', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a855f7', marginBottom: '14px', fontWeight: 600 }}>Возможности</div>
              <h2 className="section-h2" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '14px' }}>
                Всё для умных покупок
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
                Два мощных инструмента экономии в одном боте
              </p>
            </div>
          </FadeIn>

          <div className="features-grid">
            {[
              {
                icon: '📊',
                label: 'Отслеживание цен',
                title: 'До 30 товаров под контролем',
                desc: 'Добавляйте ссылки на любые товары Wildberries. Бот мгновенно оповестит при любом изменении цены — вверх или вниз.',
                points: ['До 30 товаров одновременно', 'Уведомления при изменении цены', 'Карточка товара с фото', 'История изменений цен'],
                gradient: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(99,102,241,0.08))',
                border: 'rgba(168,85,247,0.2)',
                accent: '#a855f7'
              },
              {
                icon: '🏷️',
                label: 'Скидки брендов',
                title: 'Следите за любимыми брендами',
                desc: 'Выберите до 5 брендов и получайте уведомления о выгодных скидках. Порог срабатывания рассчитывается динамически на основе среднестатистической скидки за определённый период.',
                points: ['До 5 брендов на мониторинге', 'Динамический порог скидки', 'Только товары выбранного бренда', 'Тематические категории'],
                gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(249,115,22,0.08))',
                border: 'rgba(236,72,153,0.2)',
                accent: '#ec4899'
              }
            ].map((f) => (
              <FadeIn key={f.label}>
                <div className="card-hover" style={{ background: f.gradient, border: `1px solid ${f.border}`, borderRadius: '20px', padding: '28px', height: '100%' }}>
                  <div style={{ fontSize: '36px', marginBottom: '14px' }}>{f.icon}</div>
                  <div style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: f.accent, marginBottom: '8px', fontWeight: 600 }}>{f.label}</div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 700, marginBottom: '12px', lineHeight: 1.2 }}>{f.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '22px', fontSize: '15px' }}>{f.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {f.points.map(p => (
                      <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '6px', height: '6px', background: f.accent, borderRadius: '50%', flexShrink: 0 }} />
                        <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="stats-grid">
            {[
              { n: '450K+', l: 'товаров под наблюдением', icon: '👁️' },
              { n: '24/7', l: 'непрерывный мониторинг', icon: '⚡' },
              { n: '30 сек', l: 'добавить новый товар', icon: '⏱️' }
            ].map(s => (
              <FadeIn key={s.l}>
                <div className="card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '18px', padding: '28px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', marginBottom: '10px' }}>{s.icon}</div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px, 6vw, 36px)', fontWeight: 800, color: '#a855f7', marginBottom: '6px' }}>{s.n}</div>
                  <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>{s.l}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a855f7', marginBottom: '14px', fontWeight: 600 }}>Как начать</div>
              <h2 className="section-h2" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, letterSpacing: '-0.03em' }}>Три простых шага</h2>
            </div>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { n: '01', title: 'Запустите бота в MAX', desc: 'Перейдите в мессенджер MAX и нажмите «Старт». Автоматически получаете 10 дней полного доступа — бесплатно.', color: '#a855f7' },
              { n: '02', title: 'Добавьте товары и бренды', desc: 'Отправьте ссылки на нужные товары (до 30) или выберите бренды для мониторинга скидок (до 5).', color: '#6366f1' },
              { n: '03', title: 'Получайте уведомления', desc: 'Бот автоматически следит и присылает карточку товара как только цена изменится или появится выгодная скидка.', color: '#ec4899' }
            ].map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.12}>
                <div className="card-hover step-card" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '18px' }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '36px', fontWeight: 800, color: s.color, opacity: 0.5, lineHeight: 1, flexShrink: 0 }}>{s.n}</div>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>{s.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: '15px' }}>{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="pricing-section">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a855f7', marginBottom: '14px', fontWeight: 600 }}>Стоимость</div>
              <h2 className="section-h2" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, letterSpacing: '-0.03em' }}>Честная цена</h2>
            </div>
          </FadeIn>

          <div className="pricing-grid">
            <FadeIn>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '36px 28px', textAlign: 'center' }}>
                <div style={{ fontSize: '28px', marginBottom: '14px' }}>🎁</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>Пробный период</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '52px', fontWeight: 800, color: '#4ade80', lineHeight: 1 }}>10</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '16px', fontWeight: 700, color: '#4ade80', marginBottom: '20px' }}>дней бесплатно</div>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', lineHeight: 1.7 }}>Полный доступ ко всем функциям. Без автоматических списаний.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(99,102,241,0.1))', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '20px', padding: '36px 28px', textAlign: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #a855f7, #6366f1)', borderRadius: '100px', padding: '4px 16px', fontSize: '11px', fontWeight: 700, whiteSpace: 'nowrap' }}>Основной тариф</div>
                <div style={{ fontSize: '28px', marginBottom: '14px', marginTop: '8px' }}>⚡</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>Подписка</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '52px', fontWeight: 800, color: 'white', lineHeight: 1 }}>400<span style={{ fontSize: '22px', color: 'rgba(255,255,255,0.5)' }}>₽</span></div>
                <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '20px' }}>/ 30 дней</div>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>Все функции: 30 товаров + 5 брендов</p>
                <a href={BOT_LINK} target="_blank" rel="noreferrer" className="shine-btn" style={{
                  display: 'inline-block', padding: '13px 28px', background: 'linear-gradient(135deg, #a855f7, #6366f1)',
                  borderRadius: '100px', fontSize: '15px', fontWeight: 700, color: 'white', textDecoration: 'none'
                }}>Начать с 10 дней →</a>
              </div>
            </FadeIn>
          </div>

          {/* Referral */}
          <FadeIn delay={0.2}>
            <div className="referral-block" style={{ marginTop: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{ fontSize: '26px', flexShrink: 0 }}>👥</div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <div style={{ fontWeight: 700, marginBottom: '12px', fontSize: '17px' }}>Реферальная программа</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                      <div style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '100px', padding: '4px 14px', fontSize: '13px', fontWeight: 700, color: '#a855f7', whiteSpace: 'nowrap' }}>+10 дней</div>
                      <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)' }}>за каждого приглашённого друга</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                      <div style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '100px', padding: '4px 14px', fontSize: '13px', fontWeight: 700, color: '#818cf8', whiteSpace: 'nowrap' }}>+5 дней</div>
                      <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)' }}>за каждую оплату приглашённого</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <FadeIn>
            <div className="cta-box" style={{ background: 'linear-gradient(135deg, #a855f7, #6366f1, #ec4899)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="cta-title" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, marginBottom: '14px', lineHeight: 1.2 }}>
                  Начните экономить сегодня
                </div>
                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', marginBottom: '32px' }}>
                  10 дней полного доступа — бесплатно. Без автоматических списаний.
                </p>
                <a href={BOT_LINK} target="_blank" rel="noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '16px 36px', background: 'white', borderRadius: '100px',
                  fontSize: '15px', fontWeight: 800, color: '#6d28d9', textDecoration: 'none',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)', transition: 'transform 0.2s ease'
                }}>
                  🚀 Запустить бота
                </a>
                <div style={{ marginTop: '18px', fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>
                  ✓ Мессенджер MAX &nbsp;·&nbsp; ✓ Без автоматических списаний &nbsp;·&nbsp; ✓ Отмена в 1 клик
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '32px 20px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="footer-inner" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
            <span style={{ color: 'white' }}>Мониторинг</span>
            <span style={{ color: '#a855f7' }}>·ВБ</span>
          </div>
          <div className="footer-links">
            <a href="#features" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px' }}>Возможности</a>
            <a href="#pricing" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px' }}>Тарифы</a>
            <a href={BOT_LINK} target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '13px' }}>Запустить бота</a>
          </div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)' }}>© 2026 Мониторинг ВБ</div>
        </div>
      </footer>
    </div>
  );
}