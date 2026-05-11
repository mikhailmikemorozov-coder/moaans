import ServicePage from "./ServicePage";

export default function PokraskaDisk() {
  return (
    <ServicePage
      meta={{
        title: "Порошковая покраска дисков в Москве — BI Color | от 2 500 ₽",
        description: "Порошковая покраска литых дисков в Москве: трёхслойное нанесение, гарантия 4 года, срок 1–2 дня. Любой цвет RAL. Внуково, Центральная ул. 18с2. +7 (499) 136-55-00",
        keywords: "покраска дисков москва, порошковая покраска литых дисков, покраска дисков цена, порошковая покраска дисков внуково",
        path: "/pokraska-diskov-moskva",
        ogImage: "/og-pokraska.png",
      }}
      color="#ff6b00"
      h1="Порошковая покраска"
      h1Accent="дисков в Москве"
      intro="Трёхслойное нанесение: грунт — краска — лак. Каждый слой запекается в печи. Покрытие прочнее заводского: устойчиво к сколам, реагентам и мойке высокого давления."
      price="от 2 500 ₽"
      benefits={[
        { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M12 2a10 10 0 100 20 3 3 0 000-6h-1.5a1.5 1.5 0 010-3H12a10 10 0 000-11z"/><circle cx="7" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="10" cy="7.5" r="1" fill="currentColor" stroke="none"/><circle cx="14" cy="7.5" r="1" fill="currentColor" stroke="none"/><circle cx="17" cy="11" r="1" fill="currentColor" stroke="none"/></svg>, title: "Любой цвет RAL", desc: "Матовый, глянец или сатин — более 200 оттенков. Подбираем цвет по образцу кузова или каталогу RAL." },
        { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M12 2C9.5 6.5 7 9 7 13a5 5 0 0010 0c0-3.5-1.5-5.5-3-7 0 1.5-.5 2.5-1 3C12.5 7 12.5 4 12 2z"/></svg>, title: "Трёхслойное нанесение", desc: "Грунт — краска — лак, каждый слой запекается в печи при высокой температуре. Монолитное покрытие без пор." },
        { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, title: "Гарантия 4 года", desc: "Выдаём письменную гарантию на каждый заказ. Покрытие не трескается, не шелушится и не выгорает." },
        { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>, title: "Скидка за комплект", desc: "При сдаче 4 дисков комплектом — скидка 15% на весь заказ. Срочно? Сделаем за 24 часа." },
      ]}
      gallery={[
        { src: "/pokraska-6.jpg", alt: "Порошковая покраска дисков в золотом цвете RAL", caption: "Золотой металлик, матовый финиш" },
        { src: "/pokraska-8.jpg", alt: "Порошковая покраска диска в кэнди-зелёном цвете", caption: "Кэнди-зелёный, глянцевый финиш" },
        { src: "/pokraska-10.jpg", alt: "Порошковая покраска диска в серебристом цвете", caption: "Серебристый, глянцевый финиш" },
        { src: "/pokraska-7.jpg", alt: "Порошковая покраска комплекта дисков в ярко-зелёном цвете", caption: "Ярко-зелёный RAL, глянец — комплект 4 диска" },
        { src: "/pokraska-9.jpg", alt: "Порошковая покраска дисков в тёмно-серый антрацит", caption: "Антрацит, глянцевый финиш — комплект 4 диска" },
        { src: "/pokraska-11.jpg", alt: "Порошковая покраска литых дисков — работа BI Color", caption: "Покраска дисков — результат работы" },
      ]}
      faqItems={[
        { q: "Сколько стоит покраска одного диска?", a: "Зависит от радиуса: R13–16 — от 2 750 ₽, R17–18 — от 3 250 ₽, R19+ — от 3 500 ₽. Скидка 15% при сдаче полного комплекта из 4 дисков. Точную цену называем после осмотра." },
        { q: "Можно покрасить диски в любой цвет?", a: "Да, работаем по каталогу RAL — более 200 стандартных оттенков. Можем подобрать под кузов или любой образец. Доступны матовый, глянцевый и сатиновый финиш. Специальные цвета — графит и алюмохром — стоят чуть дороже." },
        { q: "Нужно ли снимать резину?", a: "Да, шину снимаем для качественной подготовки поверхности. Если нужно — разбортируем и балансируем на месте." },
        { q: "Чем порошковая покраска лучше жидкой?", a: "Порошковое покрытие запекается в печи при высокой температуре и даёт монолитный слой без пор. Стойкость к сколам, реагентам и мойке значительно выше жидкой краски — поэтому мы даём гарантию 4 года." },
      ]}
      relatedServices={[
        { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M6 3h12l3.3 5-9.3 13-9.3-13z"/><line x1="3" y1="8" x2="21" y2="8"/><path d="M6 3l6 5 6-5"/></svg>, title: "Алмазная проточка", desc: "Восстанавливаем заводской блеск diamond cut на станке с ЧПУ.", price: "от 5 000 ₽", color: "#00d4ff", href: "/almaznaya-prochka-diskov" },
        { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>, title: "Ремонт дисков", desc: "Правка, сварка TIG/аргон, устранение трещин и деформаций.", price: "от 1 500 ₽", color: "#ff0080", href: "/remont-diskov-moskva" },
        { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M12 2C9.5 6.5 7 9 7 13a5 5 0 0010 0c0-3.5-1.5-5.5-3-7 0 1.5-.5 2.5-1 3C12.5 7 12.5 4 12 2z"/></svg>, title: "Покраска суппортов", desc: "Термостойкая краска до 300°C, любой цвет RAL.", price: "от 2 000 ₽", color: "#39ff14", href: "/pokraska-supportov-moskva" },
      ]}
    />
  );
}
