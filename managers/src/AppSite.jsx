import React, { useState, useEffect, useRef } from 'react';

const BOT_LINK = 'https://max.ru/id503360228433_bot?start=8838317';

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
      transform: inView ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`
    }}>{children}</div>
  );
};

const Ticker = ({ items }) => (
  <div style={{ overflow: 'hidden', background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '12px 0' }}>
    <div style={{ display: 'flex', gap: '48px', animation: 'ticker 20s linear infinite', whiteSpace: 'nowrap' }}>
      {[...items, ...items].map((item, i) => (
        <span key={i} style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'monospace' }}>
          {item} <span style={{ color: '#a855f7', marginLeft: '24px' }}>◆</span>
        </span>
      ))}
    </div>
  </div>
);

export default function AppSiteMobile() {
  const [scrolled, setScrolled] = useState(false);
  const [count, setCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let start = 0;
    const end = 450000;
    const duration = 2200;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, end);
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#080810', fontFamily: "'DM Sans', 'Segoe UI', sans-serif", color: 'white', overflowX: 'hidden', maxWidth: '100vw' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700;0,9..40,900&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
        html { scroll-behavior: smooth; }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(168,85,247,0.4); } 70% { box-shadow: 0 0 0 12px rgba(168,85,247,0); } 100% { box-shadow: 0 0 0 0 rgba(168,85,247,0); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        .tap-btn:active { transform: scale(0.97); opacity: 0.9; }
        .tap-btn { transition: transform 0.15s ease, opacity 0.15s ease; }
        .card-tap:active { transform: scale(0.98); }
        .card-tap { transition: transform 0.15s ease; }
        ::-webkit-scrollbar { display: none; }
        * { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '14px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(8,8,16,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '17px', letterSpacing: '-0.02em' }}>
          <span style={{ color: 'white' }}>Мониторинг</span>
          <span style={{ color: '#a855f7' }}>·ВБ</span>
        </div>
        <a href={BOT_LINK} target="_blank" rel="noreferrer" className="tap-btn" style={{
          padding: '9px 20px',
          background: 'linear-gradient(135deg, #a855f7, #6366f1)',
          borderRadius: '100px', fontSize: '13px', fontWeight: 700, color: 'white',
          textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px',
          animation: 'pulse 2.5s ease infinite'
        }}>
          Запустить →
        </a>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', padding: '100px 20px 60px' }}>
        {/* BG */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-10%', left: '-30%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '0%', right: '-30%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)', borderRadius: '50%' }} />
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.03 }}>
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '7px 14px', background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.25)', borderRadius: '100px', marginBottom: '24px', animation: 'fadeSlideUp 0.5s ease both' }}>
            <div style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%', boxShadow: '0 0 8px #4ade80', animation: 'blink 1.5s ease infinite' }} />
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>24/7 · {count.toLocaleString()} товаров</span>
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(40px, 11vw, 56px)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.035em', marginBottom: '20px', animation: 'fadeSlideUp 0.5s ease 0.08s both' }}>
            Ловите скидки<br />
            <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f97316 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>на Wildberries</span><br />
            автоматически
          </h1>

          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: '32px', animation: 'fadeSlideUp 0.5s ease 0.15s both' }}>
            Бот в мессенджере MAX следит за ценами и мгновенно сообщает о скидках. До 30 товаров и 5 брендов.
          </p>

          {/* CTA */}
          <div style={{ animation: 'fadeSlideUp 0.5s ease 0.22s both' }}>
            <a href={BOT_LINK} target="_blank" rel="noreferrer" className="tap-btn" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
              padding: '18px 28px', background: 'linear-gradient(135deg, #a855f7, #6366f1)',
              borderRadius: '16px', fontSize: '17px', fontWeight: 700, color: 'white', textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(168,85,247,0.35)'
            }}>
              🚀 Начать бесплатно
            </a>
            <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '13px', color: 'rgba(255,255,255,0.35)', display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <span>✓ 10 дней бесплатно</span>
              <span>✓ Без карт</span>
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: '0', marginTop: '40px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', overflow: 'hidden', animation: 'fadeSlideUp 0.5s ease 0.3s both' }}>
            {[['30', 'товаров'], ['5', 'брендов'], ['24/7', 'мониторинг']].map(([n, l], i) => (
              <div key={l} style={{ flex: 1, padding: '18px 8px', textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '22px', fontWeight: 800, color: 'white' }}>{n}</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.38)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '3px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Phone mockup */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '48px', animation: 'fadeSlideUp 0.5s ease 0.35s both' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '260px', height: '260px', background: 'radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)' }} />

          {/* Phone */}
          <div style={{ position: 'relative', width: '200px', height: '420px', animation: 'float 5s ease-in-out infinite', zIndex: 2 }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(145deg, #1a1a2e, #0d0d1a)', borderRadius: '34px', boxShadow: '0 32px 64px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08)', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: '8px', background: '#111827', borderRadius: '28px', overflow: 'hidden' }}>
                <div style={{ padding: '14px 10px', background: 'linear-gradient(180deg, #1f1135 0%, #0f0a1e 100%)', height: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px', paddingBottom: '9px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ width: '24px', height: '24px', background: 'linear-gradient(135deg, #a855f7, #6366f1)', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>📊</div>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>Мониторинг ВБ</span>
                  </div>
                  {[
                    { label: 'Уведомление о цене 🔔', title: 'Кроссовки Nike Air Max', old: '8 990 ₽', price: '5 394 ₽', badge: '-40%', color: 'rgba(168,85,247,0.15)', border: 'rgba(168,85,247,0.2)' },
                    { label: 'Скидка бренда 🏷️', title: 'Adidas — скидка 35%', sub: 'Найдено 248 товаров', color: 'rgba(99,102,241,0.15)', border: 'rgba(99,102,241,0.2)' },
                    { label: 'Изменение цены ↓', title: 'Сумка Guess', old: '14 500 ₽', price: '9 990 ₽', color: 'rgba(236,72,153,0.1)', border: 'rgba(236,72,153,0.2)' },
                  ].map((msg, i) => (
                    <div key={i} style={{ background: msg.color, borderRadius: '10px 10px 10px 3px', padding: '8px 10px', border: `1px solid ${msg.border}` }}>
                      <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.45)', marginBottom: '3px' }}>{msg.label}</div>
                      <div style={{ fontSize: '10px', color: 'white', fontWeight: 600, marginBottom: msg.price || msg.sub ? '4px' : 0 }}>{msg.title}</div>
                      {msg.price && (
                        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                          <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)', textDecoration: 'line-through' }}>{msg.old}</span>
                          <span style={{ fontSize: '12px', color: '#4ade80', fontWeight: 800 }}>{msg.price}</span>
                          {msg.badge && <span style={{ background: '#ef4444', color: 'white', borderRadius: '3px', padding: '1px 4px', fontSize: '8px', fontWeight: 700 }}>{msg.badge}</span>}
                        </div>
                      )}
                      {msg.sub && <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.5)' }}>{msg.sub}</div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* floating badges */}
          <div style={{ position: 'absolute', top: '12%', right: '4px', background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(16px)', borderRadius: '12px', padding: '9px 12px', border: '1px solid rgba(74,222,128,0.3)', zIndex: 3 }}>
            <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.45)' }}>Экономия</div>
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#4ade80' }}>−3 596 ₽</div>
          </div>
          <div style={{ position: 'absolute', bottom: '18%', left: '4px', background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(16px)', borderRadius: '12px', padding: '9px 12px', border: '1px solid rgba(168,85,247,0.3)', zIndex: 3 }}>
            <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.45)' }}>Уведомлений</div>
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#a855f7' }}>1 247</div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <Ticker items={['Отслеживание цен', 'Скидки брендов', '10 дней бесплатно', 'Мессенджер MAX', 'До 30 товаров', 'До 5 брендов', 'Уведомления', 'Мониторинг 24/7']} />

      {/* FEATURES */}
      <section id="features" style={{ padding: '72px 20px' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a855f7', marginBottom: '12px', fontWeight: 600 }}>Возможности</div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(30px, 8vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '12px' }}>
              Всё для умных покупок
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '15px', lineHeight: 1.6 }}>
              Два мощных инструмента экономии в одном боте
            </p>
          </div>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '16px' }}>
          {[
            {
              icon: '📊',
              label: 'Отслеживание цен',
              title: 'До 30 товаров под контролем',
              desc: 'Добавляйте ссылки на любые товары. Бот оповестит при любом изменении цены — вверх или вниз.',
              points: ['До 30 товаров одновременно', 'Уведомления при изменении цены', 'Карточка с фото и рейтингом', 'История изменений цен'],
              gradient: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(99,102,241,0.06))',
              border: 'rgba(168,85,247,0.18)',
              accent: '#a855f7'
            },
            {
              icon: '🏷️',
              label: 'Скидки брендов',
              title: 'Следите за любимыми брендами',
              desc: 'Выберите до 5 брендов и получайте уведомления когда скидка превышает 25%.',
              points: ['До 5 брендов на мониторинге', 'Порог скидки от 25%', 'Рейтинг > 4.7 и > 200 оценок', 'Тематические категории'],
              gradient: 'linear-gradient(135deg, rgba(236,72,153,0.12), rgba(249,115,22,0.06))',
              border: 'rgba(236,72,153,0.18)',
              accent: '#ec4899'
            }
          ].map((f) => (
            <FadeIn key={f.label}>
              <div className="card-tap" style={{ background: f.gradient, border: `1px solid ${f.border}`, borderRadius: '20px', padding: '28px 24px' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>{f.icon}</div>
                <div style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: f.accent, marginBottom: '6px', fontWeight: 600 }}>{f.label}</div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px', lineHeight: 1.2 }}>{f.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: '20px', fontSize: '14px' }}>{f.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {f.points.map(p => (
                    <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                      <div style={{ width: '5px', height: '5px', background: f.accent, borderRadius: '50%', flexShrink: 0 }} />
                      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {[
            { n: '450K+', l: 'товаров', icon: '👁️' },
            { n: '24/7', l: 'мониторинг', icon: '⚡' },
            { n: '30 сек', l: 'добавить', icon: '⏱️' }
          ].map(s => (
            <FadeIn key={s.l}>
              <div className="card-tap" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '20px 10px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{s.icon}</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '22px', fontWeight: 800, color: '#a855f7', marginBottom: '4px' }}>{s.n}</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.38)', lineHeight: 1.3 }}>{s.l}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '60px 20px', background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a855f7', marginBottom: '12px', fontWeight: 600 }}>Как начать</div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px, 8vw, 40px)', fontWeight: 800, letterSpacing: '-0.03em' }}>Три простых шага</h2>
          </div>
        </FadeIn>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { n: '01', title: 'Запустите бота в MAX', desc: 'Перейдите в мессенджер MAX и нажмите «Старт». Автоматически получаете 10 дней полного доступа — бесплатно.', color: '#a855f7' },
            { n: '02', title: 'Добавьте товары и бренды', desc: 'Отправьте ссылки на нужные товары (до 30) или выберите бренды для мониторинга скидок (до 5).', color: '#6366f1' },
            { n: '03', title: 'Получайте уведомления', desc: 'Бот следит автоматически и присылает карточку товара как только цена изменится или появится выгодная скидка.', color: '#ec4899' }
          ].map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.1}>
              <div className="card-tap" style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '18px', padding: '22px 20px' }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '32px', fontWeight: 800, color: s.color, opacity: 0.45, lineHeight: 1, flexShrink: 0, minWidth: '44px' }}>{s.n}</div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '6px' }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, fontSize: '13px' }}>{s.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: '72px 20px' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a855f7', marginBottom: '12px', fontWeight: 600 }}>Стоимость</div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px, 8vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em' }}>Честная цена</h2>
          </div>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Free trial */}
          <FadeIn>
            <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🎁</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginBottom: '6px' }}>Пробный период</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '52px', fontWeight: 800, color: '#4ade80', lineHeight: 1 }}>10</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '17px', fontWeight: 700, color: '#4ade80', marginBottom: '16px' }}>дней бесплатно</div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', lineHeight: 1.6 }}>Полный доступ ко всем функциям. Без привязки карты.</p>
            </div>
          </FadeIn>

          {/* Paid */}
          <FadeIn delay={0.08}>
            <div style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.18), rgba(99,102,241,0.09))', border: '1px solid rgba(168,85,247,0.28)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #a855f7, #6366f1)', borderRadius: '100px', padding: '4px 16px', fontSize: '11px', fontWeight: 700, whiteSpace: 'nowrap' }}>Основной тариф</div>
              <div style={{ fontSize: '28px', marginBottom: '12px', marginTop: '6px' }}>⚡</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginBottom: '6px' }}>Подписка</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '52px', fontWeight: 800, color: 'white', lineHeight: 1 }}>400<span style={{ fontSize: '22px', color: 'rgba(255,255,255,0.45)' }}>₽</span></div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', marginBottom: '20px' }}>/ 30 дней</div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>Все функции: 30 товаров + 5 брендов</p>
              <a href={BOT_LINK} target="_blank" rel="noreferrer" className="tap-btn" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '16px 28px', background: 'linear-gradient(135deg, #a855f7, #6366f1)',
                borderRadius: '14px', fontSize: '15px', fontWeight: 700, color: 'white', textDecoration: 'none',
                boxShadow: '0 6px 24px rgba(168,85,247,0.3)'
              }}>Начать с 10 дней →</a>
            </div>
          </FadeIn>

          {/* Referral */}
          <FadeIn delay={0.15}>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '18px', padding: '24px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ fontSize: '26px', flexShrink: 0 }}>👥</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, marginBottom: '14px', fontSize: '17px' }}>Реферальная программа</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                      <div style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '100px', padding: '4px 14px', fontSize: '12px', fontWeight: 700, color: '#a855f7', whiteSpace: 'nowrap' }}>+10 дней</div>
                      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>за каждого приглашённого</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                      <div style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '100px', padding: '4px 14px', fontSize: '12px', fontWeight: 700, color: '#818cf8', whiteSpace: 'nowrap' }}>+5 дней</div>
                      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>за каждую оплату друга</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding: '0 20px 72px' }}>
        <FadeIn>
          <div style={{ background: 'linear-gradient(135deg, #a855f7, #6366f1, #ec4899)', borderRadius: '24px', padding: '48px 28px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.12) 0%, transparent 60%)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(26px, 7vw, 38px)', fontWeight: 800, marginBottom: '14px', lineHeight: 1.15 }}>
                Начните экономить сегодня
              </div>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.82)', marginBottom: '32px', lineHeight: 1.55 }}>
                10 дней полного доступа — бесплатно. Без привязки карты.
              </p>
              <a href={BOT_LINK} target="_blank" rel="noreferrer" className="tap-btn" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '16px 32px', background: 'white', borderRadius: '14px',
                fontSize: '16px', fontWeight: 800, color: '#6d28d9', textDecoration: 'none',
                boxShadow: '0 8px 28px rgba(0,0,0,0.3)'
              }}>
                🚀 Запустить бота
              </a>
              <div style={{ marginTop: '18px', fontSize: '12px', color: 'rgba(255,255,255,0.6)', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <span>✓ Мессенджер MAX</span>
                <span>✓ Без карт</span>
                <span>✓ Отмена в 1 клик</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '28px 20px 40px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '17px' }}>
            <span style={{ color: 'white' }}>Мониторинг</span>
            <span style={{ color: '#a855f7' }}>·ВБ</span>
          </div>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#features" style={{ color: 'rgba(255,255,255,0.38)', textDecoration: 'none', fontSize: '13px' }}>Возможности</a>
            <a href="#pricing" style={{ color: 'rgba(255,255,255,0.38)', textDecoration: 'none', fontSize: '13px' }}>Тарифы</a>
            <a href={BOT_LINK} target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.38)', textDecoration: 'none', fontSize: '13px' }}>Запустить бота</a>
          </div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)' }}>© 2026 Мониторинг ВБ</div>
        </div>
      </footer>

      {/* STICKY BOTTOM CTA */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 99,
        padding: '12px 20px 20px',
        background: 'linear-gradient(to top, rgba(8,8,16,0.98) 60%, transparent)',
        pointerEvents: 'none'
      }}>
        <a href={BOT_LINK} target="_blank" rel="noreferrer" className="tap-btn" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
          padding: '16px', background: 'linear-gradient(135deg, #a855f7, #6366f1)',
          borderRadius: '14px', fontSize: '15px', fontWeight: 700, color: 'white', textDecoration: 'none',
          boxShadow: '0 4px 24px rgba(168,85,247,0.4)', pointerEvents: 'auto'
        }}>
          🚀 Начать бесплатно — 10 дней
        </a>
      </div>
    </div>
  );
}