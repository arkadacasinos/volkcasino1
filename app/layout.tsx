import '@fontsource-variable/inter'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark">
      <head>
        <title>Volk Casino официальный сайт — играть в Волк Казино онлайн, рабочее зеркало</title>
        <meta
          name="description"
          content="Volk Casino официальный сайт: играйте онлайн на реальные деньги в проверенном Волк Казино. Актуальное рабочее зеркало на сегодня, щедрые бонусы стаи, лицензионные слоты и быстрые выплаты 24/7."
        />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#090a0d" />
        <link rel="canonical" href="https://volkcasino1.vercel.app" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Volk Casino официальный сайт — играть в Волк Казино онлайн, рабочее зеркало" />
        <meta
          property="og:description"
          content="Volk Casino официальный сайт: играйте онлайн на реальные деньги в проверенном Волк Казино. Актуальное рабочее зеркало на сегодня, щедрые бонусы стаи, лицензионные слоты и быстрые выплаты 24/7."
        />
        <meta property="og:url" content="https://volkcasino1.vercel.app" />
        <meta property="og:site_name" content="Volk Casino" />
        <meta property="og:image" content="https://volkcasino1.vercel.app/hero-banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Volk Casino официальный сайт — играть в Волк Казино онлайн, рабочее зеркало" />
        <meta
          name="twitter:description"
          content="Volk Casino официальный сайт: играйте онлайн на реальные деньги в проверенном Волк Казино. Актуальное рабочее зеркало на сегодня, щедрые бонусы стаи, лицензионные слоты и быстрые выплаты 24/7."
        />
        <meta name="twitter:image" content="https://volkcasino1.vercel.app/hero-banner.jpg" />
      </head>
      <body className="antialiased bg-[#090a0d] text-[#e2e8f0] font-sans selection:bg-[#f59e0b] selection:text-black min-h-screen">
        {children}
      </body>
    </html>
  )
}
