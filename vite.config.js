import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { mkdirSync, readFileSync, writeFileSync } from 'fs'

const routeMeta = {
  'pokraska-diskov-moskva': {
    title: 'Покраска дисков в Москве — порошковая покраска литых дисков | BI Color',
    description: 'Порошковая покраска литых дисков в Москве. Любой цвет RAL, трёхслойное покрытие, гарантия 4 года. Цена от 2 750 руб./диск. Сервис BI Color, Внуково.',
    canonical: 'https://bi-color.ru/pokraska-diskov-moskva',
  },
  'almaznaya-prochka-diskov': {
    title: 'Алмазная проточка дисков в Москве — diamond cut | BI Color',
    description: 'Алмазная проточка (diamond cut) литых дисков на станке с ЧПУ. Восстанавливаем заводской блеск. Гарантия 4 года. Цена от 5 000 руб. Москва, Внуково.',
    canonical: 'https://bi-color.ru/almaznaya-prochka-diskov',
  },
  'remont-diskov-moskva': {
    title: 'Ремонт дисков в Москве — правка и сварка литых дисков | BI Color',
    description: 'Ремонт литых дисков в Москве: правка геометрии, аргонная сварка TIG, технология Димет. Бесплатная диагностика. Гарантия. Сервис BI Color, Внуково.',
    canonical: 'https://bi-color.ru/remont-diskov-moskva',
  },
  'pokraska-supportov-moskva': {
    title: 'Покраска суппортов в Москве — термостойкая краска | BI Color',
    description: 'Покраска тормозных суппортов термостойкой краской до 300°C. Любой цвет RAL: красный, жёлтый, синий. От 2 000 руб./суппорт. Москва, Внуково.',
    canonical: 'https://bi-color.ru/pokraska-supportov-moskva',
  },
  'tseny': {
    title: 'Цены на покраску и ремонт дисков в Москве | BI Color',
    description: 'Цены на покраску дисков, алмазную проточку, ремонт и восстановление, покраску суппортов в Москве. BI Color, Внуково. +7 (499) 136-55-00.',
    canonical: 'https://bi-color.ru/tseny',
  },
  'blog': {
    title: 'Блог о дисках — советы по покраске и ремонту | BI Color',
    description: 'Статьи об алмазной проточке, покраске и восстановлении дисков. Советы от мастеров BI Color в Москве.',
    canonical: 'https://bi-color.ru/blog',
  },
  'blog/almaznaya-prochka-diskov-chto-eto': {
    title: 'Алмазная проточка дисков: что это и как работает | BI Color',
    description: 'Алмазная проточка литых дисков — как работает технология diamond cut, чем отличается от полировки, когда стоит делать и сколько это стоит в Москве. Ответы от мастеров BI Color.',
    canonical: 'https://bi-color.ru/blog/almaznaya-prochka-diskov-chto-eto',
  },
  'blog/pokraska-diskov-v-chernyy': {
    title: 'Покраска дисков в чёрный: матовый, глянец или антрацит | BI Color',
    description: 'Как выбрать между матовым чёрным, глянцем и антрацитом для дисков. Разбираем варианты, стойкость покрытий и цены на покраску дисков в чёрный в Москве.',
    canonical: 'https://bi-color.ru/blog/pokraska-diskov-v-chernyy',
  },
  'blog/pokraska-diskov-nissan': {
    title: 'Покраска дисков Nissan: до и после — кейс BI Color',
    description: 'Реальный кейс: покраска четырёх дисков Nissan R17 в алюмохром. Фото до и после, видео результата. Сервис BI Color, Москва, Внуково.',
    canonical: 'https://bi-color.ru/blog/pokraska-diskov-nissan',
  },
  'blog/almaznaya-prochka-video-protsessa': {
    title: 'Алмазная проточка дисков: видео процесса и результат | BI Color',
    description: 'Смотри как проходит алмазная проточка литых дисков на станке с ЧПУ — видео процесса от сервиса BI Color. Реальный результат diamond cut на многоспицевых дисках.',
    canonical: 'https://bi-color.ru/blog/almaznaya-prochka-video-protsessa',
  },
  'blog/pokraska-supportov': {
    title: 'Покраска суппортов: зачем, как и сколько стоит | BI Color',
    description: 'Зачем красят тормозные суппорты, как выглядит процесс и что даёт термостойкая краска до 300°C. Разбор от мастеров BI Color в Москве.',
    canonical: 'https://bi-color.ru/blog/pokraska-supportov',
  },
  'blog/remont-litogo-diska-tsena': {
    title: 'Ремонт литого диска: цены и технологии | BI Color',
    description: 'Цены на ремонт литых дисков в Москве — правка, сварка, Димет. Разбираем что влияет на стоимость, когда диск восстановим, а когда нет. Сервис BI Color, Внуково.',
    canonical: 'https://bi-color.ru/blog/remont-litogo-diska-tsena',
  },
}

function injectMeta(html, meta) {
  let result = html
  result = result.replace(
    /<title>[^<]*<\/title>/,
    `<title>${meta.title}</title>`
  )
  result = result.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${meta.description}"`
  )
  result = result.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${meta.canonical}"`
  )
  result = result.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${meta.canonical}"`
  )
  result = result.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${meta.title}"`
  )
  result = result.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${meta.description}"`
  )
  return result
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-spa-routes',
      closeBundle() {
        const baseHtml = readFileSync('dist/index.html', 'utf8')

        // 404.html fallback for Cloudflare Pages
        writeFileSync('dist/404.html', baseHtml)

        // Real HTML file for each route with injected meta tags
        for (const [route, meta] of Object.entries(routeMeta)) {
          mkdirSync(`dist/${route}`, { recursive: true })
          const html = injectMeta(baseHtml, meta)
          writeFileSync(`dist/${route}/index.html`, html)
        }
      },
    },
  ],
  base: process.env.VITE_BASE_PATH ?? '/',
})
