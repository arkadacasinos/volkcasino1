import { HeaderHero } from '@/components/header-hero'
import { SeoArticle } from '@/components/seo-article'
import { SiteFooter } from '@/components/site-footer'
import { AFFILIATE_URL } from '@/lib/constants'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#090a0d] text-[#e2e8f0] relative">
      <div className="flex-1 flex flex-col">
        {/* First Screen (matches Reference Screen 2) */}
        <HeaderHero />

        {/* SEO Text Section (300-400+ words with exact search keys from Screen 1) */}
        <main className="flex-1">
          <SeoArticle />
        </main>
      </div>

      {/* Footer with hashtag cloud from keywords */}
      <SiteFooter />

      {/* Floating Yellow Support Chat Button matching reference screenshot */}
      <a
        href={AFFILIATE_URL}
        className="fixed bottom-5 right-5 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#facc15] hover:bg-[#fde047] text-[#090a0d] shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Онлайн чат поддержки"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
      </a>
    </div>
  )
}
