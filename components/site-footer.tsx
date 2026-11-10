import { AFFILIATE_URL } from '@/lib/constants'

// Keywords from Screen 1 turned into hashtags for footer on-site SEO navigation
const HASHTAGS = [
  { tag: '#volk_casino', label: 'Volk Casino' },
  { tag: '#volk_casino_зеркало', label: 'Volk Casino зеркало' },
  { tag: '#volk_casino_играть', label: 'Volk Casino играть' },
  { tag: '#volk_casino_официальный', label: 'Volk Casino официальный' },
  { tag: '#volk_casino_официальный_сайт', label: 'Volk Casino официальный сайт' },
  { tag: '#volk_казино', label: 'Volk Казино' },
  { tag: '#волк_казино', label: 'Волк Казино' },
  { tag: '#волк_казино_зеркало', label: 'Волк Казино зеркало' },
  { tag: '#волк_казино_зеркало_рабочее', label: 'Волк Казино зеркало рабочее' },
  { tag: '#волк_казино_играть', label: 'Волк Казино играть' },
  { tag: '#волк_казино_онлайн', label: 'Волк Казино онлайн' },
  { tag: '#волк_казино_официальный', label: 'Волк Казино официальный' },
  { tag: '#волк_казино_официальный_сайт', label: 'Волк Казино официальный сайт' },
]

export function SiteFooter() {
  return (
    <footer className="w-full bg-[#06070a] border-t border-white/5 py-10 text-zinc-400 text-xs">
      <div className="v8k2-container space-y-8">
        {/* Top footer row: logo & license warning */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="text-base font-black text-white italic tracking-wider font-mono">VOLK CASINO</span>
            <span className="text-[11px] text-zinc-500">© 2026 Официальный сайт и зеркало</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400 text-[11px]">
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-bold text-zinc-300">18+</span>
            <span>Играйте ответственно. Азартные игры могут вызывать зависимость.</span>
          </div>
        </div>

        {/* SEO Hashtags cloud from Screen 1 keywords */}
        <div>
          <span className="text-zinc-500 uppercase tracking-wider text-[10px] font-bold block mb-3">
            Популярные поисковые теги и навигация:
          </span>
          <div className="flex flex-wrap gap-2">
            {HASHTAGS.map((item, idx) => (
              <a
                key={idx}
                href={AFFILIATE_URL}
                className="px-2.5 py-1 rounded-md bg-white/[0.04] hover:bg-white/[0.08] hover:text-amber-400 text-zinc-400 transition-colors border border-white/5"
              >
                {item.tag}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links & disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5 text-[11px] text-zinc-500">
          <div className="flex flex-wrap gap-4">
            <a href={AFFILIATE_URL} className="hover:text-zinc-300 transition-colors">Правила и условия</a>
            <a href={AFFILIATE_URL} className="hover:text-zinc-300 transition-colors">Политика конфиденциальности</a>
            <a href={AFFILIATE_URL} className="hover:text-zinc-300 transition-colors">Ответственная игра</a>
            <a href={AFFILIATE_URL} className="hover:text-zinc-300 transition-colors">Партнерская программа</a>
            <a href={AFFILIATE_URL} className="hover:text-zinc-300 transition-colors">Рабочее зеркало на сегодня</a>
          </div>
          <p>Лицензия Curacao eGaming No. 8048/JAZ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
