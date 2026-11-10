import Image from 'next/image'
import { AFFILIATE_URL } from '@/lib/constants'

const STORIES = [
  {
    title: 'До 20% кэ...',
    fullTitle: 'До 20% кэшбэк',
    image: '/story-1.jpg',
  },
  {
    title: 'VIP-стая',
    fullTitle: 'VIP-стая привилегий',
    image: '/story-2.jpg',
  },
  {
    title: 'Подтверди...',
    fullTitle: 'Подтверди профиль',
    image: '/story-3.jpg',
  },
  {
    title: 'Казино на...',
    fullTitle: 'Казино на телефон',
    image: '/story-4.jpg',
  },
  {
    title: 'Играй на х...',
    fullTitle: 'Играй на х10000',
    image: '/story-5.jpg',
  },
]

export function HeaderHero() {
  return (
    <header className="w-full bg-[#090a0d] border-b border-white/5 relative z-30">
      {/* Top Bar matching reference */}
      <div className="v8k2-container py-3 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Burger + Logo + Main Nav */}
        <div className="flex items-center gap-3 sm:gap-6">
          <a
            href="#v8k2-mobile-drawer"
            className="p-1.5 text-zinc-300 hover:text-white rounded-lg transition-colors md:hidden focus:outline-none"
            aria-label="Открыть главное меню"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </a>

          {/* VOLK CASINO Logo with sharp geometric wolf emblem */}
          <a href={AFFILIATE_URL} className="flex items-center gap-2 group focus:outline-none">
            <div className="flex items-center gap-1.5">
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none" className="transition-transform group-hover:scale-105">
                <path d="M6 10 L16 32 L20 22 L24 32 L34 10 L28 35 L20 38 L12 35 Z" fill="#ffffff" />
                <path d="M14 18 L20 12 L26 18 L20 23 Z" fill="#f59e0b" />
              </svg>
              <div className="flex flex-col tracking-wider">
                <span className="text-lg sm:text-xl font-black text-white italic tracking-widest leading-none font-mono">
                  VOLK
                </span>
                <span className="text-[9px] tracking-[0.3em] text-zinc-400 font-semibold uppercase leading-tight">
                  CASINO
                </span>
              </div>
            </div>
          </a>

          {/* Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-5 text-sm font-semibold text-zinc-300 ml-2">
            <a href={AFFILIATE_URL} className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <polyline points="20 12 20 22 4 22 4 12" />
                <rect x="2" y="7" width="20" height="5" />
                <line x1="12" y1="22" x2="12" y2="7" />
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
              </svg>
              <span>Бонусы</span>
            </a>
            <a href={AFFILIATE_URL} className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l5.59-5.59L19 10l-7 7z" />
              </svg>
              <span>Казино</span>
            </a>
            <a href={AFFILIATE_URL} className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M20.4 14.5L16 10 4 20" />
              </svg>
              <span>Live Казино</span>
            </a>
          </nav>
        </div>

        {/* Right: Search + Login + Register */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={AFFILIATE_URL}
            className="p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Поиск по играм"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </a>

          <a
            href={AFFILIATE_URL}
            className="v8k2-btn-dark px-3.5 sm:px-5 py-2 text-xs sm:text-sm rounded-full"
          >
            Вход
          </a>

          <div className="relative">
            <a
              href={AFFILIATE_URL}
              className="v8k2-btn-gold px-4 sm:px-6 py-2 text-xs sm:text-sm rounded-full flex items-center gap-1.5"
            >
              <span>Регистрация</span>
            </a>
            {/* Tiny gift badge on registration button as shown in reference */}
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#090a0d] border border-amber-400 text-amber-300 rounded-full flex items-center justify-center text-[10px] shadow">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="8" width="18" height="13" rx="2" />
                <path d="M12 8v13" />
                <path d="M3 12h18" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Pure CSS Mobile Drawer Menu */}
      <div id="v8k2-mobile-drawer" className="md:hidden">
        <a href="#!" className="fixed inset-0 bg-black/75 z-40" aria-label="Закрыть меню" />
        <aside className="fixed top-0 left-0 bottom-0 w-72 max-w-[80vw] bg-[#0c0f15] border-r border-white/10 z-50 p-5 flex flex-col justify-between shadow-2xl overflow-y-auto">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <span className="font-bold text-white tracking-wider text-base font-mono">VOLK CASINO</span>
              <a href="#!" className="text-zinc-400 hover:text-white p-1" aria-label="Закрыть">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </a>
            </div>

            <nav className="flex flex-col gap-2 font-medium text-sm">
              <a href={AFFILIATE_URL} className="p-3 rounded-lg bg-white/5 text-amber-400 hover:bg-white/10 transition-colors flex items-center justify-between">
                <span>Бонусы стаи</span>
                <span className="text-xs bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded">NEW</span>
              </a>
              <a href={AFFILIATE_URL} className="p-3 rounded-lg text-zinc-200 hover:bg-white/5 transition-colors">
                Игровой зал (Слоты)
              </a>
              <a href={AFFILIATE_URL} className="p-3 rounded-lg text-zinc-200 hover:bg-white/5 transition-colors">
                Live Казино с дилерами
              </a>
              <a href={AFFILIATE_URL} className="p-3 rounded-lg text-zinc-200 hover:bg-white/5 transition-colors">
                Турниры и гонки
              </a>
              <a href={AFFILIATE_URL} className="p-3 rounded-lg text-zinc-200 hover:bg-white/5 transition-colors">
                VIP-программа Волк
              </a>
              <a href={AFFILIATE_URL} className="p-3 rounded-lg text-zinc-200 hover:bg-white/5 transition-colors">
                Рабочее зеркало
              </a>
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-2.5">
            <a href={AFFILIATE_URL} className="v8k2-btn-gold w-full py-2.5 text-center text-sm rounded-lg">
              Быстрая регистрация
            </a>
            <a href={AFFILIATE_URL} className="v8k2-btn-dark w-full py-2.5 text-center text-sm rounded-lg">
              Войти в личный кабинет
            </a>
          </div>
        </aside>
      </div>

      {/* Main First Screen (Hero Section) */}
      <div className="v8k2-container pt-3 pb-6 sm:py-6">
        {/* Hero Banner Box */}
        <div className="relative w-full rounded-2xl overflow-hidden v8k2-glow-banner border border-white/10 bg-[#0c0e14] min-h-[380px] sm:min-h-[440px] md:min-h-[480px] lg:min-h-[520px] flex items-end sm:items-center">
          {/* Banner Graphic Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-banner-clean.jpg"
              alt="Volk Casino официальный сайт — Ты здесь главный волк!"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1360px"
              className="object-cover object-[52%_center] sm:object-center"
            />
            {/* Cinematic dark scrim for mobile readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090a0d] via-[#090a0d]/75 to-transparent sm:hidden" />
          </div>

          {/* Banner Content overlay */}
          <div className="relative z-10 p-4 sm:p-8 md:p-12 lg:p-16 max-w-xl flex flex-col items-start pb-8 sm:pb-12">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3 backdrop-blur-sm">
              <span>Официальный клуб</span>
            </div>

            <h1 className="text-xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-[1.1] mb-1.5 sm:mb-3 drop-shadow-md">
              ТЫ ЗДЕСЬ ГЛАВНЫЙ ВОЛК!
            </h1>

            <p className="text-zinc-200 text-xs sm:text-lg md:text-xl font-medium mb-4 sm:mb-7 leading-snug drop-shadow">
              Расти в стае — забирай больше
            </p>

            <div className="flex flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <a
                href={AFFILIATE_URL}
                className="v8k2-btn-gold px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl text-xs sm:text-base font-bold shadow-lg uppercase tracking-wider inline-flex items-center justify-center gap-1.5 grow sm:grow-0"
              >
                <span>Подробнее</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>

              <a
                href={AFFILIATE_URL}
                className="v8k2-btn-dark px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-base font-semibold inline-flex items-center justify-center gap-1.5 grow sm:grow-0"
              >
                <span>Играть сейчас</span>
              </a>
            </div>
          </div>

          {/* Carousel dots indicator (decorative like reference) */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <span className="w-6 h-1.5 rounded-full bg-white transition-all" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
          </div>
        </div>

        {/* Stories / Quick Nav circular badges below banner matching reference */}
        <div className="mt-5 sm:mt-6 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-4 sm:gap-6 min-w-max">
            {STORIES.map((story, idx) => (
              <a
                key={idx}
                href={AFFILIATE_URL}
                className="flex flex-col items-center gap-2 group text-center focus:outline-none"
              >
                <div className="v8k2-story-ring">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-black/60 border border-black/80">
                    <Image
                      src={story.image}
                      alt={story.fullTitle}
                      fill
                      sizes="64px"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <span className="text-[11px] sm:text-xs text-zinc-300 group-hover:text-amber-400 font-medium tracking-tight whitespace-nowrap transition-colors">
                  {story.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
