import ServicePage from "./ServicePage";

export default function PokraskaSupportov() {
  return (
    <ServicePage
      meta={{
        title: "Покраска суппортов в Москве — BI Color | от 2 000 ₽",
        description: "Покраска тормозных суппортов в Москве: термостойкая краска, любой цвет, видно сквозь спицы дисков. Гарантия. Внуково, Центральная ул. 18с2. +7 (499) 136-55-00",
        keywords: "покраска суппортов москва, покраска тормозных суппортов, красные суппорты, суппорты покраска цена внуково",
        path: "/pokraska-supportov-moskva",
        ogImage: "/og-supporty.png",
      }}
      color="#ff6b00"
      h1="Покраска суппортов"
      h1Accent="в Москве"
      intro="Яркие суппорты сквозь спицы — эффектная деталь, которую замечают все. Термостойкая краска выдерживает нагрев до 300 °C, не выгорает и не шелушится."
      price="от 2 000 ₽"
      benefits={[
        { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M12 2C9.5 6.5 7 9 7 13a5 5 0 0010 0c0-3.5-1.5-5.5-3-7 0 1.5-.5 2.5-1 3C12.5 7 12.5 4 12 2z"/></svg>, title: "Термостойкая краска", desc: "Специальная краска для тормозных суппортов выдерживает нагрев до 300 °C в постоянном режиме. Не трескается и не выгорает." },
        { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/><path d="M20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>, title: "Любой цвет", desc: "Классический красный, жёлтый, синий, чёрный, зелёный — или любой нестандартный цвет под ваш стиль." },
        { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, title: "Выглядит как спортивный авто", desc: "Цветные суппорты — деталь, которую сразу замечают. Особенно эффектно сочетается с тёмными дисками." },
        { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>, title: "Подготовка поверхности", desc: "Обезжириваем, грунтуем и только потом красим. Краска держится долго и не отслаивается при перепадах температур." },
      ]}
      faqItems={[
        { q: "Нужно ли снимать суппорт?", a: "Для качественного результата — желательно. Полный демонтаж позволяет покрасить суппорт равномерно со всех сторон и правильно подготовить поверхность. При покраске на машине качество будет ниже." },
        { q: "Выдержит ли краска нагрев?", a: "Да. Используем специализированную термостойкую краску, рассчитанную на постоянный нагрев до 300 °C. Активная зона тормозного диска нагревается значительно сильнее, чем суппорт, поэтому краска работает в штатном режиме." },
        { q: "Какие цвета самые популярные?", a: "Красный — классика спортивного стиля. Жёлтый и синий — яркий акцент. Чёрный — строго и дорого, особенно с глянцем. Можем покрасить в любой цвет RAL по вашему выбору." },
        { q: "Можно ли покрасить суппорты вместе с дисками?", a: "Да, и это популярное комплексное решение. Привозите и диски, и суппорты — сделаем всё за один приезд, согласуем цвета и выдадим общую гарантию." },
      ]}
      relatedServices={[
        { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/><path d="M20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>, title: "Покраска дисков", desc: "Порошковая покраска в любой цвет RAL. Отлично сочетается с покраской суппортов.", price: "от 2 500 ₽", color: "#ff6b00", href: "/pokraska-diskov-moskva" },
        { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M6 3h12l3.3 5-9.3 13-9.3-13z"/><line x1="3" y1="8" x2="21" y2="8"/><path d="M6 3l6 5 6-5"/></svg>, title: "Алмазная проточка", desc: "Восстанавливаем заводской блеск diamond cut на станке с ЧПУ.", price: "от 5 000 ₽", color: "#00d4ff", href: "/almaznaya-prochka-diskov" },
        { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>, title: "Ремонт дисков", desc: "Правка, сварка TIG/аргон, устранение трещин и деформаций.", price: "от 1 500 ₽", color: "#ff0080", href: "/remont-diskov-moskva" },
      ]}
    />
  );
}
