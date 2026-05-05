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
        @keyframes pulse-ring { 0% { transform: scale(1); opacity: 0.6; } 100% { transform: scale(1.8); opacity: 0; } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .shine-btn:hover { transform: scale(1.04); box-shadow: 0 0 40px rgba(168,85,247,0.5); }
        .shine-btn { transition: all 0.25s ease; }
        .card-hover:hover { transform: translateY(-6px); border-color: rgba(168,85,247,0.4) !important; }
        .card-hover { transition: all 0.3s ease; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: #a855f7; border-radius: 4px; }

        /* ── MOBILE STYLES ── */
        @media (max-width: 768px) {

          /* Nav */
          .nav-inner {
            padding: 14px 20px !important;
          }
          .nav-links {
            display: none !important;
          }
          .nav-cta {
            padding: 9px 18px !important;
            font-size: 13px !important;
          }

          /* Hero */
          .hero-section {
            padding: 100px 20px 60px !important;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .hero-phone-col {
            display: none !important;
          }
          .hero-stats {
            gap: 20px !important;
          }
          .hero-cta-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }

          /* Features */
          .features-section {
            padding: 80px 20px !important;
          }
          .features-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-grid {
            grid-template-columns: 1fr !important;
          }

          /* How it works */
          .how-section {
            padding: 60px 20px !important;
          }

          /* Pricing */
          .pricing-section {
            padding: 80px 20px !important;
          }
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }

          /* CTA */
          .cta-section {
            padding: 60px 20px !important;
          }
          .cta-box {
            padding: 40px 24px !important;
            border-radius: 24px !important;
          }

          /* Footer */
          .footer-inner {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
          }
          .footer-links {
            gap: 20px !important;
            flex-wrap: wrap !important;
          }

          /* Referral block */
          .referral-block {
            padding: 24px 20px !important;
          }

          /* Step cards */
          .step-card {
            flex-direction: column !important;
            gap: 12px !important;
            padding: 24px 20px !important;
          }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav-inner" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '16px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.4s ease'
      }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '18px', letterSpacing: '-0.02em' }}>
          <span style={{ color: 'white' }}>Мониторинг</span>
          <span style={{ color: '#a855f7' }}>·ВБ</span>
        </div>
        <div className="nav-links" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#features" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px' }}>Возможности</a>
          <a href="#pricing" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px' }}>Тарифы</a>
          <a href={BOT_LINK} target="_blank" rel="noreferrer" className="nav-cta shine-btn" style={{
            padding: '10px 24px', background: 'linear-gradient(135deg, #a855f7, #6366f1)',
            borderRadius: '100px', fontSize: '14px', fontWeight: 700, color: 'white', textDecoration: 'none'
          }}>Запустить бота →</a>
        </div>
        {/* Mobile-only CTA in nav */}
        <a href={BOT_LINK} target="_blank" rel="noreferrer" className="nav-cta shine-btn" style={{
          display: 'none',
          padding: '9px 18px', background: 'linear-gradient(135deg, #a855f7, #6366f1)',
          borderRadius: '100px', fontSize: '13px', fontWeight: 700, color: 'white', textDecoration: 'none'
        }}
          // shown via CSS on mobile via .nav-links hiding; we show this via a separate trick
        />
      </nav>

      {/* HERO */}
      <section className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '120px 40px 80px' }}>
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

        <div className="hero-grid" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '100px', marginBottom: '32px', animation: 'fadeSlideUp 0.6s ease both' }}>
              <div style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%', boxShadow: '0 0 8px #4ade80', animation: 'blink 1.5s ease infinite' }} />
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>Работает 24/7 · {count.toLocaleString()} товаров</span>
            </div>

            <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.03em', marginBottom: '24px', animation: 'fadeSlideUp 0.6s ease 0.1s both' }}>
              Ловите скидки<br />
              <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f97316 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>на Wildberries</span><br />
              автоматически
            </h1>

            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '40px', maxWidth: '460px', animation: 'fadeSlideUp 0.6s ease 0.2s both' }}>
              Бот в мессенджере MAX следит за ценами на ваши товары и сразу сообщает о скидках. До 30 товаров и 5 брендов — всё в одном месте.
            </p>

            <div className="hero-cta-row" style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', animation: 'fadeSlideUp 0.6s ease 0.3s both' }}>
              <a href={BOT_LINK} target="_blank" rel="noreferrer" className="shine-btn" style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '16px 32px', background: 'linear-gradient(135deg, #a855f7, #6366f1)',
                borderRadius: '100px', fontSize: '16px', fontWeight: 700, color: 'white', textDecoration: 'none',
                boxShadow: '0 0 0 0 rgba(168,85,247,0.4)'
              }}>
                🚀 Начать бесплатно
              </a>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
                ✓ 10 дней бесплатно&nbsp;&nbsp;✓ Без карт
              </div>
            </div>

            <div className="hero-stats" style={{ display: 'flex', gap: '32px', marginTop: '48px', animation: 'fadeSlideUp 0.6s ease 0.4s both' }}>
              {[['30', 'товаров'], ['5', 'брендов'], ['24/7', 'мониторинг']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '28px', fontWeight: 800, color: 'white' }}>{n}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: floating phone mockup */}
          <div className="hero-phone-col" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)' }} />
            
            {/* Phone */}
            <div style={{ position: 'relative', width: '240px', height: '500px', animation: 'float 6s ease-in-out infinite', zIndex: 2 }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(145deg, #1a1a2e, #0d0d1a)', borderRadius: '38px', boxShadow: '0 40px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                {/* screen */}
                <div style={{ position: 'absolute', inset: '10px', background: '#111827', borderRadius: '30px', overflow: 'hidden' }}>
                  <div style={{ padding: '16px 12px', background: 'linear-gradient(180deg, #1f1135 0%, #0f0a1e 100%)', height: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {/* header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg, #a855f7, #6366f1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px' }}>📊</div>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>Мониторинг ВБ</span>
                    </div>
                    
                    {/* message */}
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

            {/* floating badges */}
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
      <section id="features" className="features-section" style={{ padding: '120px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <div style={{ display: 'inline-block', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a855f7', marginBottom: '16px', fontWeight: 600 }}>Возможности</div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '16px' }}>
                Всё для умных покупок
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '18px', maxWidth: '500px', margin: '0 auto' }}>
                Два мощных инструмента экономии в одном боте
              </p>
            </div>
          </FadeIn>

          {/* Big feature blocks */}
          <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
            {[
              {
                icon: '📊',
                label: 'Отслеживание цен',
                title: 'До 30 товаров под контролем',
                desc: 'Добавляйте ссылки на любые товары Wildberries. Бот мгновенно оповестит при любом изменении цены — вверх или вниз.',
                points: ['До 30 товаров одновременно', 'Уведомления при изменении цены', 'Карточка товара с фото и рейтингом', 'История изменений цен'],
                gradient: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(99,102,241,0.08))',
                border: 'rgba(168,85,247,0.2)',
                accent: '#a855f7'
              },
              {
                icon: '🏷️',
                label: 'Скидки брендов',
                title: 'Следите за любимыми брендами',
                desc: 'Выберите до 5 брендов и получайте уведомления когда скидка превышает 25%. Охват ~15 000 качественных товаров в каждой категории.',
                points: ['До 5 брендов на мониторинге', 'Порог скидки от 25%', 'Рейтинг товара > 4.7 и > 200 оценок', 'Тематические категории'],
                gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(249,115,22,0.08))',
                border: 'rgba(236,72,153,0.2)',
                accent: '#ec4899'
              }
            ].map((f) => (
              <FadeIn key={f.label}>
                <div className="card-hover" style={{ background: f.gradient, border: `1px solid ${f.border}`, borderRadius: '24px', padding: '40px', height: '100%' }}>
                  <div style={{ fontSize: '40px', marginBottom: '16px' }}>{f.icon}</div>
                  <div style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: f.accent, marginBottom: '8px', fontWeight: 600 }}>{f.label}</div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', lineHeight: 1.2 }}>{f.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '28px' }}>{f.desc}</p>
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

          {/* Bottom stats row */}
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {[
              { n: '450K+', l: 'товаров под наблюдением', icon: '👁️' },
              { n: '24/7', l: 'непрерывный мониторинг', icon: '⚡' },
              { n: '30 сек', l: 'добавить новый товар', icon: '⏱️' }
            ].map(s => (
              <FadeIn key={s.l}>
                <div className="card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '32px', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>{s.icon}</div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '36px', fontWeight: 800, color: '#a855f7', marginBottom: '8px' }}>{s.n}</div>
                  <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>{s.l}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section" style={{ padding: '80px 40px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a855f7', marginBottom: '16px', fontWeight: 600 }}>Как начать</div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.03em' }}>Три простых шага</h2>
            </div>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { n: '01', title: 'Запустите бота в MAX', desc: 'Перейдите в мессенджер MAX и нажмите «Старт». Автоматически получаете 10 дней полного доступа — бесплатно.', color: '#a855f7' },
              { n: '02', title: 'Добавьте товары и бренды', desc: 'Отправьте ссылки на нужные товары (до 30) или выберите бренды для мониторинга скидок (до 5).', color: '#6366f1' },
              { n: '03', title: 'Получайте уведомления', desc: 'Бот автоматически следит и присылает карточку товара как только цена изменится или появится выгодная скидка.', color: '#ec4899' }
            ].map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.12}>
                <div className="card-hover step-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '28px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '28px 32px' }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '40px', fontWeight: 800, color: s.color, opacity: 0.5, lineHeight: 1, flexShrink: 0 }}>{s.n}</div>
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

      {/* PRICING */}
      <section id="pricing" className="pricing-section" style={{ padding: '120px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a855f7', marginBottom: '16px', fontWeight: 600 }}>Стоимость</div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em' }}>Честная цена</h2>
            </div>
          </FadeIn>

          <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <FadeIn>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '40px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>🎁</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>Пробный период</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '56px', fontWeight: 800, color: '#4ade80', lineHeight: 1 }}>10</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '18px', fontWeight: 700, color: '#4ade80', marginBottom: '24px' }}>дней бесплатно</div>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', lineHeight: 1.7 }}>Полный доступ ко всем функциям. Без привязки карты.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(99,102,241,0.1))', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '24px', padding: '40px', textAlign: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #a855f7, #6366f1)', borderRadius: '100px', padding: '4px 16px', fontSize: '11px', fontWeight: 700, whiteSpace: 'nowrap' }}>Основной тариф</div>
                <div style={{ fontSize: '32px', marginBottom: '16px', marginTop: '8px' }}>⚡</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>Подписка</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '56px', fontWeight: 800, color: 'white', lineHeight: 1 }}>400<span style={{ fontSize: '24px', color: 'rgba(255,255,255,0.5)' }}>₽</span></div>
                <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>/ 30 дней</div>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>Все функции: 30 товаров + 5 брендов</p>
                <a href={BOT_LINK} target="_blank" rel="noreferrer" className="shine-btn" style={{
                  display: 'inline-block', padding: '14px 32px', background: 'linear-gradient(135deg, #a855f7, #6366f1)',
                  borderRadius: '100px', fontSize: '15px', fontWeight: 700, color: 'white', textDecoration: 'none'
                }}>Начать с 10 дней →</a>
              </div>
            </FadeIn>
          </div>

          {/* Referral block */}
          <FadeIn delay={0.2}>
            <div className="referral-block" style={{ marginTop: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '28px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ fontSize: '28px', flexShrink: 0 }}>👥</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, marginBottom: '12px', fontSize: '18px' }}>Реферальная программа</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '100px', padding: '4px 14px', fontSize: '13px', fontWeight: 700, color: '#a855f7', whiteSpace: 'nowrap' }}>+10 дней</div>
                      <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)' }}>за каждого приглашённого друга</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '100px', padding: '4px 14px', fontSize: '13px', fontWeight: 700, color: '#818cf8', whiteSpace: 'nowrap' }}>+5 дней</div>
                      <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)' }}>за каждую оплату приглашённого друга</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ padding: '80px 40px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <FadeIn>
            <div className="cta-box" style={{ background: 'linear-gradient(135deg, #a855f7, #6366f1, #ec4899)', borderRadius: '32px', padding: '64px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>
                  Начните экономить сегодня
                </div>
                <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '40px' }}>
                  10 дней полного доступа — бесплатно. Без привязки карты.
                </p>
                <a href={BOT_LINK} target="_blank" rel="noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '18px 40px', background: 'white', borderRadius: '100px',
                  fontSize: '16px', fontWeight: 800, color: '#6d28d9', textDecoration: 'none',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  transition: 'transform 0.2s ease'
                }}>
                  🚀 Запустить бота
                </a>
                <div style={{ marginTop: '20px', fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
                  ✓ Мессенджер MAX &nbsp;·&nbsp; ✓ Без карт &nbsp;·&nbsp; ✓ Отмена в 1 клик
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '40px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="footer-inner" style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
            <span style={{ color: 'white' }}>Мониторинг</span>
            <span style={{ color: '#a855f7' }}>·ВБ</span>
          </div>
          <div className="footer-links" style={{ display: 'flex', gap: '32px' }}>
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