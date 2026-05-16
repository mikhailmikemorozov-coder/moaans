import ServicePage from "./ServicePage";

export default function Shinomontazh() {
  return (
    <ServicePage
      meta={{
        title: "Шиномонтаж в Москве — BI Color | от 700 ₽/колесо",
        description: "Шиномонтаж и балансировка в Москве: легковые, джипы, рамные авто (Land Cruiser, Prado). Без записи, ежедневно 10:00–19:00. Внуково, Центральная ул. 18с2.",
        keywords: "шиномонтаж москва, балансировка колёс москва, замена резины внуково, шиномонтаж внуково, сезонная замена шин",
        path: "/shinomontazh-moskva",
        ogImage: "/og-image.png",
      }}
      color="#00d4ff"
      h1="Шиномонтаж"
      h1Accent="в Москве"
      intro="Монтаж, балансировка, сезонная замена шин. Работаем со всеми типами авто: легковые, джипы, паркетники, рамные. Без записи — ежедневно 10:00–19:00."
      price="от 700 ₽/колесо"
      benefits={[
        {
          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="22"/><line x1="2" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="22" y2="12"/></svg>,
          title: "Все типы автомобилей",
          desc: "Легковые, кроссоверы, джипы, паркетники, рамные авто (Land Cruiser, Prado, Lexus GX/LX), а также автомобили с повышенным индексом нагрузки C и ЛТ.",
        },
        {
          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
          title: "Балансировка на стенде",
          desc: "Компьютерная балансировка устраняет вибрацию на руле и продлевает срок службы шин и подшипников. Делаем для всех размеров от R13 до R22.",
        },
        {
          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
          title: "Ошиповка и ремонт шин",
          desc: "Ошипуем шины на месте. Ремонт проколов — жгутом, грибком или кордовой латкой в зависимости от размера и расположения повреждения.",
        },
        {
          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
          title: "Без записи",
          desc: "Приезжайте в любое время с 10:00 до 19:00. В сезон ожидание возможно, но стараемся принять сразу. Рядом с выездом из Внуково.",
        },
      ]}
      faqItems={[
        {
          q: "Сколько стоит шиномонтаж для кроссовера R18?",
          a: "Для джипа/паркетника R18 — от 1 075 ₽ за колесо, комплект 4 колеса от 4 300 ₽. Цена включает снятие/установку, монтаж/демонтаж шины и балансировку. Низкопрофильная резина и RUN-FLAT + 50% к стоимости работ.",
        },
        {
          q: "Делаете ли ошиповку шин?",
          a: "Да, ошиповка входит в перечень услуг. Стоимость — 30 ₽/шип. Уточняйте наличие шипов и запись по телефону.",
        },
        {
          q: "Что делать если шина пробита?",
          a: "Привозите колесо или весь автомобиль — осмотрим и определим метод ремонта. Жгут: 350 ₽. Латка универсальная: 550 ₽. Кордовая латка: от 750 до 1 650 ₽ в зависимости от размера. Грибок: 600 ₽.",
        },
        {
          q: "Можно ли поменять шины и сразу покрасить диски?",
          a: "Да, это популярная комбинация. Снимаем колёса, красим диски, затем монтируем шины обратно — всё за один визит. Согласовываем порядок работ при приёме.",
        },
      ]}
      relatedServices={[
        {
          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/><path d="M20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>,
          title: "Покраска дисков",
          desc: "Порошковая покраска в любой цвет RAL. Гарантия 4 года.",
          price: "от 2 500 ₽",
          color: "#ff6b00",
          href: "/pokraska-diskov-moskva",
        },
        {
          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M6 3h12l3.3 5-9.3 13-9.3-13z"/><line x1="3" y1="8" x2="21" y2="8"/><path d="M6 3l6 5 6-5"/></svg>,
          title: "Алмазная проточка",
          desc: "Восстанавливаем заводской блеск на станке с ЧПУ.",
          price: "от 5 000 ₽",
          color: "#00d4ff",
          href: "/almaznaya-prochka-diskov",
        },
        {
          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
          title: "Ремонт дисков",
          desc: "Правка геометрии, сварка TIG, технология Димет.",
          price: "от 1 300 ₽",
          color: "#ff0080",
          href: "/remont-diskov-moskva",
        },
      ]}
    />
  );
}
