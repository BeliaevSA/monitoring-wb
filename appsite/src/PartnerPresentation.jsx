// import React, { useState, useEffect } from 'react';
// import { ChevronRight, TrendingUp, Users, Zap, Target, CheckCircle, ArrowRight, Gift, BarChart3, MessageCircle, DollarSign } from 'lucide-react';

// const PartnerPresentation = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const nextSlide = () => {
//     if (!isAnimating && currentSlide < slides.length - 1) {
//       setIsAnimating(true);
//       setCurrentSlide(prev => prev + 1);
//       setTimeout(() => setIsAnimating(false), 600);
//     }
//   };

//   const prevSlide = () => {
//     if (!isAnimating && currentSlide > 0) {
//       setIsAnimating(true);
//       setCurrentSlide(prev => prev - 1);
//       setTimeout(() => setIsAnimating(false), 600);
//     }
//   };

//   const goToSlide = (index) => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentSlide(index);
//       setTimeout(() => setIsAnimating(false), 600);
//     }
//   };

//   // Слайды
//   const slides = [
//     <CoverSlide key="cover" />,
//     <ProblemSlide key="problem" />,
//     <BotFeaturesSlide key="features" />,
//     <PartnershipTypesSlide key="partnership" />,
//     <DirectPartnershipSlide key="direct" />,
//     <CrossPartnershipSlide key="cross" />,
//     <PricingSlide key="pricing" />,
//     <SpecialOfferSlide key="offer" />,
//     <HowItWorksSlide key="howitworks" />,
//     <ContactSlide key="contact" />
//   ];

//   return (
//     <div className="relative w-full h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden">
//       {/* Animated background particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${5 + Math.random() * 10}s`
//             }}
//           />
//         ))}
//       </div>

//       {/* Slide container */}
//       <div className="relative h-full flex items-center justify-center p-8">
//         <div className={`w-full max-w-6xl transition-all duration-600 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
//           {slides[currentSlide]}
//         </div>
//       </div>

//       {/* Navigation */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
//         <button
//           onClick={prevSlide}
//           disabled={currentSlide === 0}
//           className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
//         >
//           <ChevronRight className="w-6 h-6 text-white rotate-180" />
//         </button>
        
//         <div className="flex gap-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`h-2 rounded-full transition-all ${
//                 index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
//               }`}
//             />
//           ))}
//         </div>

//         <button
//           onClick={nextSlide}
//           disabled={currentSlide === slides.length - 1}
//           className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
//         >
//           <ChevronRight className="w-6 h-6 text-white" />
//         </button>
//       </div>

//       {/* Slide counter */}
//       <div className="absolute top-8 right-8 text-white/60 font-medium">
//         {currentSlide + 1} / {slides.length}
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0) translateX(0); }
//           50% { transform: translateY(-20px) translateX(10px); }
//         }
//         .animate-float {
//           animation: float linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// // Слайд 1: Обложка
// const CoverSlide = () => (
//   <div className="text-center animate-fade-in">
//     <div className="inline-block mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-bounce-subtle">
//       <TrendingUp className="w-16 h-16 text-yellow-300" />
//     </div>
//     <h1 className="text-7xl font-bold text-white mb-6 animate-slide-up">
//       Партнерская программа
//     </h1>
//     <p className="text-3xl text-purple-200 mb-8 animate-slide-up" style={{animationDelay: '0.1s'}}>
//       Мониторинг ВБ
//     </p>
//     <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
//       Перенесите свою аудиторию с Дзена в Telegram и монетизируйте её с помощью реальных, активных подписчиков
//     </p>
//     <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform cursor-pointer animate-pulse-subtle">
//       <Gift className="w-6 h-6" />
//       До 31 января — всё БЕСПЛАТНО!
//     </div>
//   </div>
// );

// // Слайд 2: Проблема
// const ProblemSlide = () => (
//   <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 animate-fade-in">
//     <h2 className="text-5xl font-bold text-white mb-12 text-center">
//       Почему ваша аудитория полюбит наш бот?
//     </h2>
//     <div className="grid grid-cols-2 gap-6">
//       {[
//         { icon: DollarSign, title: 'Экономия денег', desc: 'До 50% экономии на покупках в Wildberries' },
//         { icon: Zap, title: 'Автоматизация', desc: 'Бот работает 24/7, не нужно проверять цены вручную' },
//         { icon: Target, title: 'Персонализация', desc: 'Каждый отслеживает только нужные товары' },
//         { icon: MessageCircle, title: 'Удобство', desc: 'Просто отправить ссылку — всё остальное сделает бот' }
//       ].map((item, i) => (
//         <div 
//           key={i} 
//           className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-all hover:scale-105 animate-slide-up"
//           style={{animationDelay: `${i * 0.1}s`}}
//         >
//           <item.icon className="w-12 h-12 text-yellow-300 mb-4" />
//           <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
//           <p className="text-white/70">{item.desc}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// // Слайд 3: Возможности бота
// const BotFeaturesSlide = () => (
//   <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 animate-fade-in">
//     <h2 className="text-5xl font-bold text-white mb-8 text-center">Что умеет бот?</h2>
    
//     <div className="grid grid-cols-2 gap-8">
//       <div className="animate-slide-left">
//         <h3 className="text-3xl font-bold text-yellow-300 mb-4">📊 Отслеживание цен</h3>
//         <ul className="space-y-3">
//           {[
//             'До 30 товаров на пользователя',
//             'Push-уведомления при изменении цены',
//             'История с фото и деталями',
//             'Рейтинги и отзывы в карточке'
//           ].map((item, i) => (
//             <li key={i} className="flex items-start gap-3 text-white/90">
//               <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
//               <span>{item}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="animate-slide-right">
//         <h3 className="text-3xl font-bold text-yellow-300 mb-4">🎯 Охота на скидки</h3>
//         <ul className="space-y-3">
//           {[
//             '10 категорий для мониторинга',
//             'Настройка порога скидки (20-40%+)',
//             'Тысячи товаров в каждой категории',
//             'Первыми узнают о суперакциях'
//           ].map((item, i) => (
//             <li key={i} className="flex items-start gap-3 text-white/90">
//               <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
//               <span>{item}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>

//     <div className="mt-8 grid grid-cols-3 gap-4">
//       {[
//         { num: '60К+', label: 'товаров мониторится' },
//         { num: '24/7', label: 'непрерывная работа' },
//         { num: '30 сек', label: 'добавить товар' }
//       ].map((stat, i) => (
//         <div key={i} className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-2xl text-center animate-scale-in" style={{animationDelay: `${i * 0.15}s`}}>
//           <div className="text-4xl font-bold text-white mb-2">{stat.num}</div>
//           <div className="text-white/80 text-sm">{stat.label}</div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// // Слайд 4: Типы партнерства
// const PartnershipTypesSlide = () => (
//   <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 animate-fade-in">
//     <h2 className="text-5xl font-bold text-white mb-4 text-center">Два типа партнерства</h2>
//     <p className="text-xl text-white/70 text-center mb-12">Выберите подходящий для вас формат сотрудничества</p>
    
//     <div className="grid grid-cols-2 gap-8">
//       <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8 rounded-2xl border-2 border-blue-400/30 hover:border-blue-400 transition-all hover:scale-105 animate-slide-left">
//         <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
//           <Users className="w-8 h-8 text-white" />
//         </div>
//         <h3 className="text-3xl font-bold text-white mb-4">Прямой перенос</h3>
//         <p className="text-white/80 text-lg mb-6">
//           Ваши подписчики с Дзена → ваш Telegram-канал
//         </p>
//         <div className="space-y-3">
//           {[
//             'Минимальная отписка',
//             'Знакомая аудитория',
//             'Ваши читатели остаются с вами'
//           ].map((item, i) => (
//             <div key={i} className="flex items-center gap-2 text-white/90">
//               <CheckCircle className="w-5 h-5 text-green-400" />
//               <span>{item}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-2xl border-2 border-purple-400/30 hover:border-purple-400 transition-all hover:scale-105 animate-slide-right">
//         <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
//           <ArrowRight className="w-8 h-8 text-white" />
//         </div>
//         <h3 className="text-3xl font-bold text-white mb-4">Перекрестная подписка</h3>
//         <p className="text-white/80 text-lg mb-6">
//           Обмен аудиториями между двумя блогерами
//         </p>
//         <div className="space-y-3">
//           {[
//             'Смежная целевая аудитория',
//             'Взаимовыгодный рост',
//             'Живые активные подписчики'
//           ].map((item, i) => (
//             <div key={i} className="flex items-center gap-2 text-white/90">
//               <CheckCircle className="w-5 h-5 text-green-400" />
//               <span>{item}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// );

// // Слайд 5: Прямое партнерство
// const DirectPartnershipSlide = () => (
//   <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 animate-fade-in">
//     <h2 className="text-5xl font-bold text-white mb-8">🎯 Прямой перенос аудитории</h2>
    
//     <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-8 rounded-2xl mb-8 border-l-4 border-blue-400 animate-slide-up">
//       <p className="text-xl text-white/90 leading-relaxed">
//         Ваши читатели с Дзена переходят по ссылке в статье, попадают в бота и <strong className="text-yellow-300">обязательно подписываются на ваш Telegram-канал</strong> для активации. Они уже знают вас — отписок практически не будет!
//       </p>
//     </div>

//     <div className="grid grid-cols-3 gap-6 mb-8">
//       {[
//         { step: '1', title: 'Публикация', desc: 'Пишете статью в Дзене про экономию на WB' },
//         { step: '2', title: 'Переход', desc: 'Читатель кликает на вашу партнерскую ссылку' },
//         { step: '3', title: 'Подписка', desc: 'Бот требует подписку на ВАШ канал' }
//       ].map((item, i) => (
//         <div key={i} className="text-center animate-scale-in" style={{animationDelay: `${i * 0.1}s`}}>
//           <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
//             {item.step}
//           </div>
//           <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
//           <p className="text-white/70 text-sm">{item.desc}</p>
//         </div>
//       ))}
//     </div>

//     <div className="bg-green-500/20 p-6 rounded-2xl border-2 border-green-400/30 animate-pulse-subtle">
//       <div className="flex items-start gap-4">
//         <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
//         <div>
//           <h4 className="text-xl font-bold text-white mb-2">Ваше преимущество</h4>
//           <p className="text-white/90">
//             Конверсия 70-90% потому что это <strong>ваша аудитория</strong>, которая уже вам доверяет. Они просто переносятся из Дзена в Telegram к знакомому блогеру.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// // Слайд 6: Перекрестное партнерство
// const CrossPartnershipSlide = () => (
//   <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 animate-fade-in">
//     <h2 className="text-5xl font-bold text-white mb-8">🔄 Перекрестная подписка</h2>
    
//     <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-8 rounded-2xl mb-8 border-l-4 border-purple-400 animate-slide-up">
//       <p className="text-xl text-white/90 leading-relaxed">
//         Два блогера из смежных ниш обмениваются аудиториями. Партнер 1 рекламирует бота → пользователи подписываются на Партнера 2. И наоборот. Живой трафик, целевая аудитория!
//       </p>
//     </div>

//     <div className="grid grid-cols-2 gap-8 mb-8">
//       <div className="bg-white/5 p-6 rounded-2xl animate-slide-left">
//         <div className="flex items-center gap-3 mb-4">
//           <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">П1</div>
//           <h3 className="text-2xl font-bold text-white">Партнер 1</h3>
//         </div>
//         <div className="space-y-2 text-white/80">
//           <p>→ Публикует статью в Дзене</p>
//           <p>→ Его читатели переходят по ссылке</p>
//           <p>→ Подписываются на канал Партнера 2</p>
//         </div>
//       </div>

//       <div className="bg-white/5 p-6 rounded-2xl animate-slide-right">
//         <div className="flex items-center gap-3 mb-4">
//           <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">П2</div>
//           <h3 className="text-2xl font-bold text-white">Партнер 2</h3>
//         </div>
//         <div className="space-y-2 text-white/80">
//           <p>→ Публикует статью в Дзене</p>
//           <p>→ Его читатели переходят по ссылке</p>
//           <p>→ Подписываются на канал Партнера 1</p>
//         </div>
//       </div>
//     </div>

//     <div className="bg-yellow-500/20 p-6 rounded-2xl border-2 border-yellow-400/30">
//       <div className="flex items-start gap-4">
//         <Target className="w-8 h-8 text-yellow-400 flex-shrink-0" />
//         <div>
//           <h4 className="text-xl font-bold text-white mb-2">Идеально для:</h4>
//           <p className="text-white/90">
//             Блогеров с похожей аудиторией (женщины 25-45, интересуются покупками, модой, красотой, домом). <strong>Конверсия 50-70%</strong> за счет релевантности контента.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// // Слайд 7: Тарифы
// const PricingSlide = () => (
//   <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 animate-fade-in">
//     <h2 className="text-5xl font-bold text-white mb-4 text-center">💰 Тарифы партнерства</h2>
//     <p className="text-center text-white/70 text-lg mb-12">Стоимость рассчитана на основе ценности женской платежеспособной аудитории</p>
    
//     <div className="grid grid-cols-2 gap-8">
//       {/* Прямой перенос */}
//       <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 rounded-2xl border-2 border-blue-400/30 hover:scale-105 transition-transform animate-slide-left">
//         <div className="flex items-center gap-3 mb-6">
//           <Users className="w-10 h-10 text-blue-400" />
//           <h3 className="text-3xl font-bold text-white">Прямой перенос</h3>
//         </div>
        
//         <div className="mb-6">
//           <div className="text-5xl font-bold text-white mb-2">50₽</div>
//           <div className="text-white/70">за подписчика</div>
//         </div>

//         <div className="space-y-4 mb-6">
//           <div className="bg-white/5 p-4 rounded-lg">
//             <div className="text-sm text-white/60 mb-1">Ожидаемая конверсия</div>
//             <div className="text-2xl font-bold text-blue-400">70-90%</div>
//           </div>
          
//           <div className="bg-white/5 p-4 rounded-lg">
//             <div className="text-sm text-white/60 mb-1">Пример: статья с охватом 10,000</div>
//             <div className="text-white/90">
//               <div>• CTR 5% = 500 кликов</div>
//               <div>• 80% подпишутся = <strong className="text-blue-400">400 подписчиков</strong></div>
//               <div className="mt-2 text-lg">Стоимость: <strong className="text-white">20,000₽</strong></div>
//             </div>
//           </div>
//         </div>

//         <div className="text-sm text-white/60">
//           * Высокая конверсия за счет знакомой аудитории
//         </div>
//       </div>

//       {/* Перекрестная подписка */}
//       <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border-2 border-purple-400/30 hover:scale-105 transition-transform animate-slide-right">
//         <div className="flex items-center gap-3 mb-6">
//           <ArrowRight className="w-10 h-10 text-purple-400" />
//           <h3 className="text-3xl font-bold text-white">Перекрестная</h3>
//         </div>
        
//         <div className="mb-6">
//           <div className="text-5xl font-bold text-white mb-2">35₽</div>
//           <div className="text-white/70">за подписчика</div>
//         </div>

//         <div className="space-y-4 mb-6">
//           <div className="bg-white/5 p-4 rounded-lg">
//             <div className="text-sm text-white/60 mb-1">Ожидаемая конверсия</div>
//             <div className="text-2xl font-bold text-purple-400">50-70%</div>
//           </div>
          
//           <div className="bg-white/5 p-4 rounded-lg">
//             <div className="text-sm text-white/60 mb-1">Пример: статья с охватом 10,000</div>
//             <div className="text-white/90">
//               <div>• CTR 5% = 500 кликов</div>
//               <div>• 60% подпишутся = <strong className="text-purple-400">300 подписчиков</strong></div>
//               <div className="mt-2 text-lg">Стоимость: <strong className="text-white">10,500₽</strong></div>
//             </div>
//           </div>
//         </div>

//         <div className="text-sm text-white/60">
//           * Новая целевая аудитория из смежной ниши
//         </div>
//       </div>
//     </div>

//     <div className="mt-8 bg-white/5 p-6 rounded-2xl">
//       <h4 className="text-lg font-bold text-white mb-3">Почему такая цена?</h4>
//       <div className="grid grid-cols-2 gap-4 text-sm text-white/80">
//         <div>✓ Женская платежеспособная аудитория 25-45 лет</div>
//         <div>✓ Активные пользователи (получают уведомления каждый день)</div>
//         <div>✓ Заинтересованы в покупках и скидках</div>
//         <div>✓ Высокая вовлеченность в канал</div>
//       </div>
//     </div>
//   </div>
// );

// // Слайд 8: Спецпредложение
// const SpecialOfferSlide = () => (
//   <div className="relative bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-3xl p-12 overflow-hidden animate-fade-in">
//     <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
//     <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
    
//     <div className="relative z-10 text-center">
//       <div className="inline-block mb-6 animate-bounce">
//         <Gift className="w-24 h-24 text-yellow-300" />
//       </div>
      
//       <h2 className="text-6xl font-bold text-white mb-6 animate-slide-up">
//         🎉 Спецпредложение января!
//       </h2>
      
//       <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8 animate-scale-in" style={{animationDelay: '0.2s'}}>
//         <p className="text-3xl text-white mb-4">
//           До <strong className="text-yellow-300">31 января 2025</strong>
//         </p>
//         <p className="text-5xl font-bold text-white mb-6">
//           ВСЁ БЕСПЛАТНО! 🎁
//         </p>
//         <p className="text-xl text-white/90">
//           Мы только начинаем свой путь и нам нужны партнеры для сбора статистики
//         </p>
//       </div>

//       <div className="grid grid-cols-3 gap-6 mb-8">
//         {[
//           { value: '0₽', label: 'За подписчика' },
//           { value: '0₽', label: 'За настройку' },
//           { value: '0₽', label: 'Никаких платежей' }
//         ].map((item, i) => (
//           <div key={i} className="bg-white/5 p-6 rounded-2xl animate-slide-up" style={{animationDelay: `${0.3 + i * 0.1}s`}}>
//             <div className="text-4xl font-bold text-yellow-300 mb-2">{item.value}</div>
//             <div className="text-white/80">{item.label}</div>
//           </div>
//         ))}
//       </div>

//       <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-8 rounded-2xl animate-pulse-subtle">
//         <h3 className="text-2xl font-bold text-white mb-4">Что вы получаете БЕСПЛАТНО:</h3>
//         <div className="grid grid-cols-2 gap-4 text-left">
//           {[
//             'Персональную партнерскую ссылку',
//             'Статистику переходов и подписок',
//             'Готовые шаблоны для статей',
//             'Техподдержку 24/7'
//           ].map((item, i) => (
//             <div key={i} className="flex items-center gap-3 text-white">
//               <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0" />
//               <span className="text-lg">{item}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <p className="text-white/70 text-lg mt-8 animate-slide-up" style={{animationDelay: '0.6s'}}>
//         ⏰ Предложение действует до конца месяца. Успейте стать первыми партнерами!
//       </p>
//     </div>
//   </div>
// );

// // Слайд 9: Как это работает
// const HowItWorksSlide = () => (
//   <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 animate-fade-in">
//     <h2 className="text-5xl font-bold text-white mb-12 text-center">⚙️ Как всё работает?</h2>
    
//     <div className="space-y-6">
//       {[
//         {
//           num: '1',
//           title: 'Вы обращаетесь к нам',
//           desc: 'Пишете в Telegram или на email с желанием стать партнером',
//           color: 'from-blue-500 to-cyan-500'
//         },
//         {
//           num: '2',
//           title: 'Мы создаем ссылку',
//           desc: 'Генерируем уникальную партнерскую ссылку для вашего канала',
//           color: 'from-purple-500 to-pink-500'
//         },
//         {
//           num: '3',
//           title: 'Вы публикуете статью',
//           desc: 'Размещаете контент в Дзене с вашей партнерской ссылкой на бота',
//           color: 'from-green-500 to-teal-500'
//         },
//         {
//           num: '4',
//           title: 'Читатели переходят',
//           desc: 'Заинтересованные пользователи кликают и попадают в бота',
//           color: 'from-yellow-500 to-orange-500'
//         },
//         {
//           num: '5',
//           title: 'Обязательная подписка',
//           desc: 'Бот требует подписку на ваш канал (или канал партнера) для активации',
//           color: 'from-red-500 to-pink-500'
//         },
//         {
//           num: '6',
//           title: 'Автоматическая проверка',
//           desc: 'Бот проверяет подписку через Telegram API — никакого обмана!',
//           color: 'from-indigo-500 to-purple-500'
//         }
//       ].map((step, i) => (
//         <div 
//           key={i} 
//           className="flex items-start gap-6 bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-all animate-slide-up"
//           style={{animationDelay: `${i * 0.1}s`}}
//         >
//           <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
//             <span className="text-2xl font-bold text-white">{step.num}</span>
//           </div>
//           <div className="flex-1">
//             <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
//             <p className="text-white/80 text-lg">{step.desc}</p>
//           </div>
//         </div>
//       ))}
//     </div>

//     <div className="mt-8 bg-gradient-to-r from-green-500/20 to-teal-500/20 p-6 rounded-2xl border-2 border-green-400/30 animate-pulse-subtle">
//       <div className="flex items-start gap-4">
//         <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
//         <div>
//           <h4 className="text-xl font-bold text-white mb-2">🔒 100% гарантия</h4>
//           <p className="text-white/90">
//             Проверка подписки через официальный Telegram API. Пользователь физически не сможет активировать бота без подписки. Только реальные подписчики!
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// // Слайд 10: Контакты
// const ContactSlide = () => (
//   <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 animate-fade-in">
//     <h2 className="text-6xl font-bold text-white mb-6 text-center">🚀 Готовы начать?</h2>
//     <p className="text-2xl text-white/80 text-center mb-12">Свяжитесь с нами прямо сейчас!</p>

//     <div className="grid grid-cols-2 gap-8 mb-12">
//       <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8 rounded-2xl border-2 border-blue-400/30 animate-slide-left">
//         <h3 className="text-2xl font-bold text-white mb-6">📞 Контакты</h3>
//         <div className="space-y-4">
//           <div className="flex items-center gap-4">
//             <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
//               <MessageCircle className="w-6 h-6 text-white" />
//             </div>
//             <div>
//               <div className="text-white/60 text-sm">Telegram</div>
//               <div className="text-white font-semibold">@your_username</div>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
//               <Target className="w-6 h-6 text-white" />
//             </div>
//             <div>
//               <div className="text-white/60 text-sm">Email</div>
//               <div className="text-white font-semibold">partner@monitoring-wb.ru</div>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
//               <Zap className="w-6 h-6 text-white" />
//             </div>
//             <div>
//               <div className="text-white/60 text-sm">Бот</div>
//               <div className="text-white font-semibold">@checkupwbbot</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-2xl border-2 border-purple-400/30 animate-slide-right">
//         <h3 className="text-2xl font-bold text-white mb-6">⏰ Что дальше?</h3>
//         <div className="space-y-4">
//           {[
//             { icon: MessageCircle, text: 'Ответим в течение 24 часов' },
//             { icon: CheckCircle, text: 'Создадим вашу ссылку за 1 день' },
//             { icon: BarChart3, text: 'Предоставим шаблоны статей' },
//             { icon: TrendingUp, text: 'Начнёте получать подписчиков!' }
//           ].map((item, i) => (
//             <div key={i} className="flex items-center gap-3">
//               <item.icon className="w-6 h-6 text-purple-400" />
//               <span className="text-white/90">{item.text}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>

//     <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-8 rounded-2xl text-center animate-pulse-subtle">
//       <h3 className="text-3xl font-bold text-white mb-4">⚡ До 31 января — всё БЕСПЛАТНО!</h3>
//       <p className="text-xl text-white/90 mb-6">
//         Станьте одним из первых партнеров и получите преимущество
//       </p>
//       <div className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-full text-orange-600 font-bold text-lg hover:scale-105 transition-transform cursor-pointer">
//         <Gift className="w-6 h-6" />
//         Написать прямо сейчас
//       </div>
//     </div>
//   </div>
// );

// export default PartnerPresentation;
          


import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Zap, Target, CheckCircle, ArrowRight, Gift, BarChart3, MessageCircle, DollarSign, Eye, Mail } from 'lucide-react';

const PartnerLanding = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-block mb-8 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <TrendingUp className="w-16 h-16 text-purple-300" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Партнерская программа
          </h1>
          <p className="text-3xl md:text-4xl text-purple-300 mb-8 font-semibold">
            Мониторинг Wildberries
          </p>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Перенесите свою аудиторию с Дзена в Telegram и монетизируйте её через партнерство с нашим ботом мониторинга цен
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#section-pricing" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all shadow-lg hover:scale-105">
              Узнать стоимость
            </a>
            <a href="#section-contact" className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition-all">
              Связаться с нами
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="section-benefits" className={`py-20 px-6 transition-opacity duration-1000 ${isVisible['section-benefits'] ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Почему ваша аудитория полюбит наш бот?
          </h2>
          <p className="text-xl text-white/70 text-center mb-16">
            Предложите своим подписчикам реальную ценность
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: DollarSign, title: 'Экономия денег', desc: 'До 50% экономии на покупках в Wildberries', color: 'from-green-500/20 to-emerald-500/20', iconColor: 'text-green-400' },
              { icon: Zap, title: 'Автоматизация', desc: 'Бот работает 24/7, не нужно проверять цены вручную', color: 'from-yellow-500/20 to-orange-500/20', iconColor: 'text-yellow-400' },
              { icon: Target, title: 'Персонализация', desc: 'Каждый отслеживает только интересующие товары', color: 'from-purple-500/20 to-pink-500/20', iconColor: 'text-purple-400' },
              { icon: MessageCircle, title: 'Удобство', desc: 'Просто отправить ссылку — всё остальное сделает бот', color: 'from-blue-500/20 to-cyan-500/20', iconColor: 'text-blue-400' }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`bg-gradient-to-br ${item.color} backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:scale-105`}
              >
                <item.icon className={`w-12 h-12 ${item.iconColor} mb-4`} />
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="section-features" className={`py-20 px-6 bg-white/5 transition-opacity duration-1000 ${isVisible['section-features'] ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Возможности бота
          </h2>
          
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
                  'История изменений с фото',
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

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '60К+', label: 'товаров мониторится', color: 'from-purple-600 to-pink-600' },
              { num: '24/7', label: 'непрерывная работа', color: 'from-blue-600 to-cyan-600' },
              { num: '30 сек', label: 'добавить товар', color: 'from-green-600 to-teal-600' }
            ].map((stat, i) => (
              <div key={i} className={`bg-gradient-to-br ${stat.color} p-6 rounded-2xl text-center`}>
                <div className="text-4xl font-bold text-white mb-2">{stat.num}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="section-types" className={`py-20 px-6 transition-opacity duration-1000 ${isVisible['section-types'] ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Форматы партнерства
          </h2>
          <p className="text-xl text-white/70 text-center mb-16">
            Выберите подходящий вариант сотрудничества
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 rounded-2xl border border-blue-400/20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Прямой перенос</h3>
              <p className="text-white/70 text-lg mb-6">
                Ваши подписчики с Дзена переходят в ваш Telegram-канал через бота
              </p>
              <div className="space-y-3">
                {[
                  'Минимальная отписка',
                  'Знакомая вам аудитория',
                  'Конверсия 70-90%'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-purple-400/20">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Перекрестная подписка</h3>
              <p className="text-white/70 text-lg mb-6">
                Обмен аудиториями с другим блогером из смежной ниши
              </p>
              <div className="space-y-3">
                {[
                  'Целевая аудитория',
                  'Взаимовыгодный рост',
                  'Конверсия 50-70%'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="section-pricing" className="py-20 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Тарифы
          </h2>
          <p className="text-xl text-white/70 text-center mb-16">
            Прозрачная модель оплаты за результат
          </p>
          
          <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-md p-10 rounded-3xl border border-white/20 text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Eye className="w-12 h-12 text-purple-300" />
              <h3 className="text-3xl font-bold text-white">Оплата за показы</h3>
            </div>
            
            <div className="mb-8">
              <div className="text-6xl font-bold text-white mb-3">2000₽</div>
              <div className="text-2xl text-white/80">за 1000 показов в боте</div>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl mb-6">
              <h4 className="text-xl font-bold text-white mb-4">Что это значит:</h4>
              <div className="space-y-2 text-left text-white/80">
                <p>• Ваша реклама показывается пользователям бота</p>
                <p>• Вы платите только за реальные показы</p>
                <p>• Целевая аудитория: женщины 25-45, интересующиеся покупками</p>
                <p>• Активные пользователи (ежедневно получают уведомления)</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/30 to-emerald-500/30 p-6 rounded-2xl border-2 border-green-400/40">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Gift className="w-8 h-8 text-green-300" />
                <h4 className="text-2xl font-bold text-white">Для первых клиентов — БЕСПЛАТНО!</h4>
              </div>
              <p className="text-white/90 text-lg">
                Станьте одним из первых партнеров и получите первые показы без оплаты
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <h4 className="text-lg font-bold text-white mb-4 text-center">Почему эта модель выгодна:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-white/70">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span>Платежеспособная женская аудитория 25-45 лет</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span>Высокая вовлеченность и активность</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span>Заинтересованность в покупках и скидках</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span>Прозрачная статистика по показам</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="section-howitworks" className={`py-20 px-6 transition-opacity duration-1000 ${isVisible['section-howitworks'] ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Как это работает
          </h2>
          
          <div className="space-y-6">
            {[
              { num: '1', title: 'Свяжитесь с нами', desc: 'Напишите в Telegram или на email', color: 'from-blue-600 to-cyan-600' },
              { num: '2', title: 'Получите партнерскую ссылку', desc: 'Мы создадим уникальную ссылку для вашего канала', color: 'from-purple-600 to-pink-600' },
              { num: '3', title: 'Разместите контент', desc: 'Опубликуйте статью в Дзене с партнерской ссылкой', color: 'from-green-600 to-teal-600' },
              { num: '4', title: 'Получайте подписчиков', desc: 'Бот требует подписку на ваш канал для активации', color: 'from-orange-600 to-red-600' },
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

          <div className="mt-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-6 rounded-2xl border border-green-400/30">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-white mb-2">🔒 Гарантия качества</h4>
                <p className="text-white/80">
                  Проверка подписки через официальный Telegram API. Только реальные подписчики, никакого обмана.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="section-contact" className="py-20 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы начать?
          </h2>
          <p className="text-2xl text-white/70 mb-12">
            Свяжитесь с нами прямо сейчас
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/20">
              <MessageCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-white/60 text-sm mb-2">Telegram</div>
              <div className="text-white font-semibold text-lg">@your_username</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm p-8 rounded-2xl border border-purple-400/20">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-white/60 text-sm mb-2">Email</div>
              <div className="text-white font-semibold text-lg">partner@monitoring-wb.ru</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-sm p-8 rounded-2xl border border-green-400/20">
              <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-white/60 text-sm mb-2">Бот</div>
              <div className="text-white font-semibold text-lg">@checkupwbbot</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">⚡ Для первых клиентов — бесплатно!</h3>
            <p className="text-xl text-white/90 mb-6">
              Станьте одним из первых партнеров и получите преимущество
            </p>
            <a href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-white/90 text-purple-700 font-bold text-lg rounded-full transition-all shadow-lg hover:scale-105">
              <Gift className="w-6 h-6" />
              Написать прямо сейчас
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-white/60">
          <p>© 2025 Мониторинг WB. Все права защищены.</p>
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

export default PartnerLanding;