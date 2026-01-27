import React, { useState, useEffect } from 'react';
import { TrendingDown, Bell, Gift, Users, Zap, Shield, Target, Percent, CheckCircle, ArrowRight, BarChart3, MessageCircle, DollarSign, Eye, Mail } from 'lucide-react';

const BOT_LINK = 'https://t.me/checkupwbbot'; // Ссылка на бота

const AnimatedSection = ({ children, delay = 0, id }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(id);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [id]);

  return (
    <div 
      id={id}
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay, color, iconColor }) => (
  <div className={`bg-gradient-to-br ${color} backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:scale-105`}>
    <Icon className={`w-12 h-12 ${iconColor} mb-4`} />
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-white/70 text-lg">{description}</p>
  </div>
);

const StatCard = ({ number, label, color }) => (
  <div className={`bg-gradient-to-br ${color} p-6 rounded-2xl text-center`}>
    <div className="text-4xl font-bold text-white mb-2">{number}</div>
    <div className="text-white/80">{label}</div>
  </div>
);

const CTAButton = ({ children, className = '', href = BOT_LINK }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all ${className}`}
    onClick={() => {
      // ym(106478241,'reachGoal','start_bot')
      if (typeof window !== "undefined" && window.ym) {
        window.ym(106478241,'reachGoal','start_bot')
      }
    }}
  >
    {children}
  </a>
);

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">

        {/* Moving gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#a310d3_0%,transparent_50%),radial-gradient(circle_at_80%_70%,#7c3aed_0%,transparent_50%),radial-gradient(circle_at_50%_50%,#2563eb_0%,transparent_60%)] opacity-40 animate-gradient-mesh" />

        {/* Floating light */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-pink-500/30 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <div className="text-center lg:text-left">

            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
              <span className="text-pink-400 text-lg">🔥</span>
              <span className="text-white font-semibold">10 дней в подарок при регистрации</span>
            </div>

            <h1 className="text-6xl md:text-7xl xl:text-8xl font-black leading-[1.05] mb-8">
              <span className="text-white">
                Мониторинг
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">ВБ</span>
            </h1>

            <p className="text-2xl md:text-3xl text-white/90 mb-6 max-w-xl">
              Умный Telegram-бот, который <span className="text-pink-400 font-semibold">ловит скидки</span> вместо тебя
            </p>

            <p className="text-lg text-white/70 max-w-xl mb-10">
              Добавляй товары, и бот сам сообщит, когда цена упадёт или появится большая скидка.  
              Ты покупаешь — мы мониторим рынок 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <a
                href="#"
                className="
                  px-14 py-5
                  rounded-full
                  text-white text-lg font-bold
                  whitespace-nowrap
                  bg-gradient-to-r from-pink-500 to-purple-600
                  hover:scale-110 transition-transform
                  shadow-[0_0_40px_rgba(236,72,153,0.7)]
                "
              >
                🚀 Начать бесплатно
              </a>

              <div className="text-white/60 text-sm">
                ✓ Без добавления карт • ✓ 10 дней триал • ✓ Отписка в 1 клик
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative flex justify-center">
            <div className="absolute w-[500px] h-[500px] bg-pink-500/30 blur-[100px] rounded-full"></div>
            <div className="absolute w-[400px] h-[400px] bg-purple-500/30 blur-[100px] rounded-full"></div>

            <div className="relative scale-90 lg:scale-100">
              <div className="relative w-[260px] h-[540px] transition-transform duration-500 ease-out
              animate-phone-float
              group-hover:rotate-x-[12deg] 
              group-hover:-rotate-y-[12deg]
              group-hover:scale-105
              transform-gpu">

                {/* Phone body */}
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-zinc-800 to-black shadow-[0_40px_120px_rgba(0,0,0,0.8)] border border-white/10" />

                {/* Inner bezel */}
                <div className="absolute inset-[10px] rounded-[32px] bg-black overflow-hidden">

                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30"></div>

                  {/* Screen */}
                  <img
                    src="/wb_1.jpg"
                    className="w-full h-full object-cover"
                    alt="WB Bot"
                  />

                  {/* Glass shine */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/0 to-white/20 opacity-40 pointer-events-none" />

                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes gradientMesh {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-mesh {
            background-size: 200% 200%;
            animation: gradientMesh 20s ease infinite;
          }
        `}</style>

      </section>

      

      {/* Features Section */}
      <AnimatedSection id="section-features">
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
              Возможности бота
            </h2>
            <p className="text-xl text-white/70 text-center mb-16">
              Все инструменты для экономии на покупках в одном месте
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <FeatureCard
                icon={TrendingDown}
                title="Отслеживание цен"
                description="Добавьте до 30 товаров и получайте мгновенные уведомления при изменении цены. Информация об изменениях для каждого товара."
                color="from-blue-500/20 to-cyan-500/20"
                iconColor="text-blue-400"
              />
              <FeatureCard
                icon={Target}
                title="Охота на скидки"
                description="Мониторинг около 15,000 качественных товаров в каждой категории с рейтиногом > 4.7 и оценками > 200. Настройте минимальный порог скидки и не пропускайте выгодные предложения."
                color="from-purple-500/20 to-pink-500/20"
                iconColor="text-purple-400"
              />
              <FeatureCard
                icon={Bell}
                title="Умные уведомления"
                description="Красивые карточки товаров с фото, деталями и информацией об изменении цен. Моментальные оповещения о скидках в Telegram."
                color="from-pink-500/20 to-orange-500/20"
                iconColor="text-pink-400"
              />
              <FeatureCard
                icon={Shield}
                title="Защита от накруток"
                description="Система карантина защищает от фейковых скидок. Бот отслеживает искусственное завышение цен перед распродажами."
                color="from-green-500/20 to-emerald-500/20"
                iconColor="text-green-400"
              />
              <FeatureCard
                icon={Percent}
                title="Каналы со скидками"
                description="Автоматическая публикация скидок 40%+ в наши тематические каналы: женщинам, мужчинам, детям и для дома."
                color="from-yellow-500/20 to-orange-500/20"
                iconColor="text-yellow-400"
              />
              <FeatureCard
                icon={Users}
                title="Реферальная программа"
                description="Приглашайте друзей и получайте +10 дней подписки за каждого. Безлимитное продление через рефералов."
                color="from-indigo-500/20 to-purple-500/20"
                iconColor="text-indigo-400"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <StatCard number="450К+" label="товаров мониторится" color="from-purple-600 to-pink-600" />
              <StatCard number="24/7" label="непрерывная работа" color="from-blue-600 to-cyan-600" />
              <StatCard number="30 сек" label="добавить товар" color="from-green-600 to-teal-600" />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Detailed Features */}
      <AnimatedSection id="section-detailed">
        <section className="py-20 px-6 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-blue-400/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Отслеживание цен</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'До 30 товаров на пользователя',
                    'Push-уведомления при изменении цены',
                    'Информация об изменений с фото',
                    'Рейтинги и отзывы в карточке товара'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-500/10 to-orange-500/10 p-8 rounded-2xl border border-pink-400/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-pink-600 to-orange-600 rounded-xl">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Охота на скидки</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    '10 категорий для мониторинга',
                    'Настройка порога скидки (20-40%+)',
                    'Тысячи товаров в каждой категории',
                    'Первыми узнают о суперакциях'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* How It Works */}
      <AnimatedSection id="section-howitworks">
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Как это работает?
            </h2>

            <div className="space-y-6">
              {[
                { num: '1', title: 'Запустите бота', desc: 'Перейдите в Telegram и нажмите "Старт". Получите 10 дней доступа ко всем функциям в подарок.', color: 'from-blue-600 to-cyan-600' },
                { num: '2', title: 'Добавьте товары', desc: 'Отправьте ссылки на товары из Wildberries или выберите категории для отслеживания скидок.', color: 'from-purple-600 to-pink-600' },
                { num: '3', title: 'Экономьте деньги', desc: 'Получайте уведомления о снижении цен и выгодных скидках. Покупайте в нужный момент!', color: 'from-green-600 to-teal-600' }
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-6 bg-white/5 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/10 transition-all">
                  <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <span className="text-2xl font-bold text-white">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/70">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Subscription Section */}
      <AnimatedSection id="section-subscription">
        <section className="py-20 px-6 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
              Гибкая система подписки
            </h2>
            <p className="text-xl text-white/70 text-center mb-16">
              Множество способов продлить подписку абсолютно бесплатно
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm p-8 rounded-2xl text-center border border-green-400/20">
                <div className="text-5xl mb-4">🎁</div>
                <h3 className="text-2xl font-bold text-white mb-2">Триал</h3>
                <p className="text-3xl font-bold text-green-400 mb-2">10 дней</p>
                <p className="text-white/70">В подарок при регистрации</p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm p-8 rounded-2xl text-center border border-blue-400/20">
                <div className="text-5xl mb-4">📢</div>
                <h3 className="text-2xl font-bold text-white mb-2">Каналы</h3>
                <p className="text-3xl font-bold text-blue-400 mb-2">+2 дня</p>
                <p className="text-white/70">За ежедневную активность</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm p-8 rounded-2xl text-center border border-purple-400/20">
                <div className="text-5xl mb-4">👥</div>
                <h3 className="text-2xl font-bold text-white mb-2">Рефералы</h3>
                <p className="text-3xl font-bold text-purple-400 mb-2">+10 дней</p>
                <p className="text-white/70">За каждого приглашенного друга</p>
              </div>

              <div className="bg-gradient-to-br from-pink-500/20 to-orange-500/20 backdrop-blur-sm p-8 rounded-2xl text-center border border-pink-400/20">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-white mb-2">Партнеры</h3>
                <p className="text-3xl font-bold text-pink-400 mb-2">+5 дней</p>
                <p className="text-white/70">За подписку на канал партнера</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Screenshot Gallery */}
      <AnimatedSection id="section-gallery">
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">

            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text 
              bg-gradient-to-r from-pink-400 to-purple-500 text-center mb-20">
              Интерфейс бота
            </h2>

            <div className="grid md:grid-cols-3 gap-16 perspective-[1600px]">

              {["wb_2.jpg", "wb_3.jpg", "wb_4.jpg"].map((img, i) => (
                <div key={i} className="group relative flex justify-center">

                  {/* Glow */}
                  <div className="absolute -inset-20 bg-gradient-to-r from-pink-500/30 to-purple-500/30 blur-3xl opacity-60 group-hover:opacity-100 transition"></div>

                  {/* Phone */}
                  <div
                    className={`relative w-[220px] h-[460px] rounded-[36px] bg-gradient-to-br from-zinc-800 to-black 
                    border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)]
                    transform-gpu transition-all duration-700
                    animate-phone-float
                    group-hover:rotate-x-[12deg] 
                    group-hover:${i === 0 ? '-rotate-y-[12deg]' : i === 2 ? 'rotate-y-[12deg]' : ''}
                    group-hover:scale-110`}
                  >

                    {/* Screen */}
                    <div className="absolute inset-[10px] rounded-[28px] bg-black overflow-hidden">

                      {/* Notch */}
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20"></div>

                      <img
                        src={`/${img}`}
                        className="w-full h-full object-cover"
                        alt="WB bot"
                      />

                      {/* Glass reflection */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/0 to-white/20 pointer-events-none" />
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* <style>{`
            @keyframes phoneFloat {
              0%,100% { transform: translateY(0) rotateZ(0deg); }
              50% { transform: translateY(-12px) rotateZ(1deg); }
            }
            .animate-phone-float {
              animation: phoneFloat 6s ease-in-out infinite;
            }
          `}</style> */}
        </section>

      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection id="section-cta">
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 md:p-16 shadow-2xl text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Начните экономить уже сегодня!
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Присоединяйтесь к тысячам пользователей, которые экономят на покупках в Wildberries с помощью нашего бота
              </p>
              <CTAButton className="!bg-white hover:!bg-white/90 !text-white">
                🚀 Запустить бота бесплатно
              </CTAButton>
              <div className="mt-6 text-white/80 text-sm">
                ✓ 10 дней доступа в подарок при запуске бота • ✓ Без привязки банковских карт • ✓ Отмена в любой момент
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-white/60">
          <p className="mb-4">© 2026 Мониторинг ВБ. Все права защищены.</p>
          <p className="text-sm">Бот использует официальное API Wildberries и не нарушает правила использования платформы.</p>
        </div>
      </footer>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;