const header = document.querySelector('.site-header');
header?.querySelector('.button-small')?.remove();
header?.querySelector('.phone')?.remove();
const updateHeaderState = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 80);
  document.querySelector('.mobile-cta')?.classList.toggle('is-visible', window.scrollY > 420);
};
window.addEventListener('scroll', updateHeaderState, { passive: true });
updateHeaderState();
const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.main-nav');
if (primaryNav && !primaryNav.id) primaryNav.id = 'primary-nav';
menuToggle?.setAttribute('aria-expanded', 'false');
if (primaryNav) menuToggle?.setAttribute('aria-controls', primaryNav.id);
document.querySelector('link[href="assets/icons/favicon.svg"]')?.remove();
const faviconLinks = [['icon', 'assets/icons/favicon-48x48.png', '48x48'], ['icon', 'assets/icons/favicon-32x32.png', '32x32'], ['icon', 'assets/icons/favicon-16x16.png', '16x16'], ['apple-touch-icon', 'assets/icons/apple-touch-icon.png', null]];
faviconLinks.forEach(([rel, href, sizes]) => { const link = document.createElement('link'); link.rel = rel; link.href = href; if (sizes) link.sizes = sizes; if (rel === 'icon' && href.endsWith('.png')) link.type = 'image/png'; document.head.append(link); });
document.querySelectorAll('.brand').forEach((brand) => { brand.classList.add('brand-lockup'); brand.innerHTML = '<img class="brand-full-logo" src="assets/images/brand-logo-header.svg" alt="Кардинал Инжиниринг">'; brand.setAttribute('aria-label', 'Кардинал Инжиниринг'); });
const footerContact = document.querySelector('.site-footer .footer-grid > div:nth-child(2)');
if (footerContact) {
  footerContact.className = 'footer-contact-block';
  footerContact.innerHTML = '<h2>Связаться с нами</h2><div class="footer-contact-grid"><div><span class="footer-label">ТЕЛЕФОН</span><a class="footer-phone" href="tel:+79677773568">8-967-777-35-68</a></div><div><span class="footer-label">EMAIL</span><a href="mailto:info@injekt-pro.ru">info@injekt-pro.ru</a></div><div><span class="footer-label">MESSENGERS</span><span class="footer-messengers"><a href="https://t.me/" target="_blank" rel="noreferrer">Telegram</a><span>·</span><a href="https://max.ru/" target="_blank" rel="noreferrer">MAX</a></span></div></div>';
}
const hero = document.querySelector('.hero');

hero.querySelector('h1').innerHTML = 'Гидроизоляция<br>подземных<br>сооружений';
hero.querySelector('.hero-lead').textContent = 'Паркинги, подвалы и технические помещения. Устраняем протечки и выполняем инъекционные работы.';
hero.querySelector('.hero-offer')?.remove();
hero.querySelector('.hero-markers')?.remove();
hero.querySelector('.outline-link')?.remove();
hero.querySelector('.hero-actions .button').innerHTML = 'Записаться на бесплатное обследование <span>↗</span>';
hero.querySelector('.hero-art').style.setProperty('background-image', "linear-gradient(to bottom,rgba(7,10,12,.88) 0%,rgba(7,10,12,.72) 18%,rgba(7,10,12,.48) 34%,rgba(7,10,12,.18) 52%,rgba(7,10,12,0) 68%),linear-gradient(90deg,rgba(8,10,12,.86) 0%,rgba(8,10,12,.72) 30%,rgba(8,10,12,.46) 58%,rgba(8,10,12,.22) 78%,rgba(8,10,12,.10) 100%),url('assets/images/hero-waterproofing-team.webp')", 'important');
hero.querySelector('.hero-art').style.setProperty('background-size', 'cover', 'important');
hero.querySelector('.hero-art').style.setProperty('background-position', 'center', 'important');
const navLinks = document.querySelectorAll('.main-nav a');
[['Зоны работ', '#areas'], ['Выполнение работ', '#works'], ['Как работаем', '#field-process'], ['Обследование', '#survey']].forEach(([label, href], index) => { if (navLinks[index]) { navLinks[index].textContent = label; navLinks[index].href = href; } });

const ASSET_VERSION = 'v10';
const BEFORE_AFTER_CHEVRONS = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.6 8.4 6 12l3.6 3.6M14.4 8.4 18 12l-3.6 3.6"/></svg>';
const initBeforeAfterSlider = (root) => {
  const range = root.querySelector('.ba-range');
  if (!range) return;
  const apply = () => {
    root.style.setProperty('--ba', range.value + '%');
    range.setAttribute('aria-valuetext', range.value + '%');
  };
  apply();
  range.addEventListener('input', apply);
  range.addEventListener('change', apply);
};
const objectSales = document.createElement('section');
objectSales.className = 'object-sales';
objectSales.innerHTML = `
  <section class="section light object-areas" id="areas"><div class="container"><div class="section-heading split"><div><p class="eyebrow dark">01 / ЗОНЫ РАБОТЫ</p><h2>Работаем с основными зонами протечек <em>в подземных конструкциях</em></h2></div><p>Покажите нам объект — мы определим, где проходит вода и что нужно сделать, чтобы восстановить герметичность.</p></div><div class="photo-grid"><article><div class="image-slot">Фото зоны протечки / деформационный шов</div><h3>Деформационные швы</h3><p>Герметизация подвижных узлов подземных конструкций.</p></article><article><div class="image-slot">Фото рабочей зоны / трещина в бетоне</div><h3>Рабочие и холодные швы</h3><p>Инъектирование границ бетонирования и примыканий.</p></article><article><div class="image-slot">Фото стены / ввод коммуникаций</div><h3>Вводы коммуникаций</h3><p>Герметизация пустот вокруг труб и проходок.</p></article><article><div class="image-slot">Фото мокрого участка конструкции</div><h3>Активные протечки</h3><p>Остановка водопритока и постоянная герметизация.</p></article><article><div class="image-slot">Фото стены подвала</div><h3>Фильтрация через стену</h3><p>Локальная и заэкранная гидроизоляция изнутри.</p></article><article><div class="image-slot">Фото примыкания стена / плита</div><h3>Подвалы и техпомещения</h3><p>Работы с железобетонными конструкциями действующих объектов.</p></article></div></div></section>
  <section class="section section-dark object-types"><div class="container"><div class="section-heading"><p class="eyebrow">02 / ОБЪЕКТЫ</p><h2>Где мы <em>работаем</em></h2></div><div class="object-type-list"><span>Подземные паркинги</span><span>Подвалы МКД</span><span>Технические помещения</span><span>Подземные части зданий</span><span>Коммерческие объекты</span><span>Эксплуатируемые объекты</span><span>Объекты капитального ремонта</span></div></div></section>
  <section class="section light work-section" id="works"></section>
  <section class="section section-dark client-section"><div class="container"><p class="eyebrow">04 / ЗАКАЗЧИКИ</p><h2>Работаем с эксплуатационными<br>и <em>объектными заказчиками</em></h2><p class="client-intro">Работаем с ГБУ «Жилищник», управляющими организациями, службами эксплуатации, коммерческими объектами и объектами капитального ремонта.</p><div class="client-tags"><span>ГБУ «Жилищник»</span><span>УК</span><span>ТСЖ / ЖСК</span><span>ЭКСПЛУАТАЦИЯ</span><span>КАПРЕМОНТ</span><span>615</span></div><div class="client-columns"><p>Понимаем объектную специфику</p><p>Готовим технические решения и ТЗ</p><p>Сопровождаем до этапа работ</p></div></div></section>
  <section class="section light field-process" id="field-process"><div class="container"><div class="section-heading split"><div><p class="eyebrow dark">05 / КАК РАБОТАЕМ</p><h2>Работа по объекту — <em>по шагам</em></h2></div><p class="free-callout">Обследование — бесплатно,<br>без обязательств.</p></div><div class="field-steps"><span><b>01</b>Первичный контакт</span><span><b>02</b>Выезд и обследование</span><span><b>03</b>Фотофиксация дефектов</span><span><b>04</b>Подбор технологии</span><span><b>05</b>Техническое решение</span><span><b>06</b>ТКП / смета</span><span><b>07</b>Подготовка ТЗ</span><span><b>08</b>Выполнение работ</span><span><b>09</b>Контроль результата</span></div></div></section>`;
const areasSection = objectSales.querySelector('#areas');
const areasGrid = areasSection?.querySelector('.photo-grid');
if (areasSection && areasGrid) {
  areasSection.querySelector('.section-heading h2').innerHTML = 'Работаем с основными<br>зонами протечек<em>в подземных конструкциях</em>';
  areasSection.querySelector('.section-heading > p:last-child').textContent = 'Определяем источник поступления воды и подбираем решение под конкретный узел конструкции.';
  const areaCards = [...areasGrid.children];
  const areaSolutions = [
    'Инъектируем внутренний объём шва эластичным составом и восстанавливаем герметичность подвижного узла.',
    'Через систему шпуров и пакеров заполняем шов изнутри и перекрываем путь фильтрации воды.',
    'Заполняем пустоты вокруг трубы или гильзы и формируем герметичный контур в месте прохода через конструкцию.',
    'Сначала останавливаем активный водоприток, затем выполняем постоянную герметизацию проблемного участка.',
    'Локализуем путь поступления воды и при необходимости формируем гидроизоляционный экран за конструкцией.',
    'Инъектируем зону сопряжения конструкций, заполняем внутренние пустоты и восстанавливаем непрерывность герметичного контура.'
  ];
  const areaFootnotes = [
    'Технология определяется после обследования.',
    'Схема инъектирования зависит от конструкции шва.',
    'Решение подбирается под геометрию узла.',
    'Остановка воды и постоянная гидроизоляция — разные этапы работ.',
    'Способ зависит от источника и площади фильтрации.',
    'Геометрия шпуров определяется после обследования.'
  ];
  const areaTitles = ['Деформационные швы', 'Рабочие и холодные швы', 'Вводы коммуникаций', 'Активные протечки', 'Фильтрация через стену', 'Примыкания стена–плита'];
  const areaDescriptions = [
    'Герметизация подвижных узлов подземных конструкций.',
    'Инъектирование границ бетонирования и примыканий.',
    'Герметизация проходок и пустот вокруг труб.',
    'Остановка водопритока и постоянная герметизация.',
    'Локальная и экранная гидроизоляция изнутри.',
    'Герметизация стыков и зон сопряжения конструкций.'
  ];
  areaCards.forEach((card, index) => {
    card.className = 'zone-card';
    card.querySelector('h3').textContent = areaTitles[index];
    card.querySelector('p').textContent = areaDescriptions[index];
    card.insertAdjacentHTML('beforeend', `<div class="zone-solution"><strong>Типовое решение</strong><span>${areaSolutions[index]}</span><em class="zone-footnote">${areaFootnotes[index]}</em></div>`);
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-expanded', 'false');
    card.addEventListener('click', () => { const open = card.classList.toggle('is-active'); card.setAttribute('aria-expanded', String(open)); });
    card.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); card.click(); } });
  });
  areasGrid.replaceChildren(...areaCards);
}
const objectTypes = objectSales.querySelector('.object-types');
if (objectTypes) {
  objectTypes.innerHTML = `<div class="container object-types-inner"><div class="object-types-heading"><div><p class="eyebrow">02 / ТИПЫ ОБЪЕКТОВ</p><h2>Работаем с подземными<br>и <em>заглублёнными сооружениями</em></h2></div><p>Решаем задачи гидроизоляции<br>на действующих и строящихся объектах.</p></div><div class="object-diagram-grid"><article class="object-diagram"><span class="diagram-number">01</span><svg viewBox="0 0 260 150" aria-hidden="true"><path d="M30 115V45l100-25 100 25v70"/><path d="M30 45h200M55 51v28h50V39h50v40h50V51M30 115h200"/><path class="underground" d="M30 115h200v25H30z"/><path d="M55 115v25m50-25v25m50-25v25m50-25v25"/><path class="accent-line" d="M55 125h150"/></svg><h3>ПОДЗЕМНЫЕ ПАРКИНГИ</h3><p>Паркинги и многоуровневые подземные конструкции.</p><small>Гидроизоляция и инъекционные работы</small></article><article class="object-diagram"><span class="diagram-number">02</span><svg viewBox="0 0 260 150" aria-hidden="true"><path d="M55 115V38h150v77M40 115h180M70 38V20h120v18M80 55h25v25H80zm75 0h25v25h-25z"/><path class="underground" d="M55 95h150v45H55z"/><path d="M80 95v45m50-45v45m50-45v45"/><path class="accent-line" d="M70 108h120"/></svg><h3>ПОДВАЛЫ МКД</h3><p>Подвальные помещения жилых многоквартирных домов.</p><small>Гидроизоляция и инъекционные работы</small></article><article class="object-diagram"><span class="diagram-number">03</span><svg viewBox="0 0 260 150" aria-hidden="true"><path d="M35 110h190M50 110V55h160v55M50 55h160M70 75h120M70 94h120"/><path class="underground" d="M50 110h160v30H50z"/><path d="M78 110v30m52-30v30m52-30v30"/><path class="accent-line" d="M70 122h120"/><path d="M85 48v-18m45 18V20m45 28V30"/><circle cx="85" cy="25" r="4"/><circle cx="130" cy="15" r="4"/><circle cx="175" cy="25" r="4"/></svg><h3>ТЕХНИЧЕСКИЕ ПОМЕЩЕНИЯ</h3><p>Подземные этажи с инженерными сетями и вводами.</p><small>Гидроизоляция и инъекционные работы</small></article><article class="object-diagram"><span class="diagram-number">04</span><svg viewBox="0 0 260 150" aria-hidden="true"><path d="M45 110V32h170v78M30 110h200M70 32V18h120v14M70 55h120M70 78h120"/><path class="underground" d="M45 110h170v30H45z"/><path d="M75 110v30m55-30v30m55-30v30"/><path class="accent-line" d="M65 122h130"/></svg><h3>БИЗНЕС-ЦЕНТРЫ И ТОРГОВЫЕ ОБЪЕКТЫ</h3><p>Крупные здания с подземными уровнями.</p><small>Гидроизоляция и инъекционные работы</small></article><article class="object-diagram"><span class="diagram-number">05</span><svg viewBox="0 0 260 150" aria-hidden="true"><path d="M55 35h150v75H55zM35 110h190M75 35v75m55-75v75m55-75v75"/><path class="underground" d="M55 110h150v30H55z"/><path d="M75 110v30m55-30v30m55-30v30"/><path class="accent-line" d="M70 122h120"/></svg><h3>ПОДЗЕМНЫЕ ЧАСТИ ЗДАНИЙ</h3><p>Фундаменты, стены и заглублённые объёмы.</p><small>Гидроизоляция и инъекционные работы</small></article><article class="object-diagram"><span class="diagram-number">06</span><svg viewBox="0 0 260 150" aria-hidden="true"><path d="M40 110V42l90-23 90 23v68M40 42h180M65 55h45v25H65zm85 0h45v25h-45z"/><path class="underground" d="M40 110h180v30H40z"/><path d="M70 110v30m60-30v30m60-30v30"/><path class="accent-line" d="M60 122h140"/><path class="repair-line" d="M130 19v121"/></svg><h3>ОБЪЕКТЫ КАПИТАЛЬНОГО РЕМОНТА</h3><p>Действующие здания с участками восстановления.</p><small>Гидроизоляция и инъекционные работы</small></article></div></div>`;
}
if (objectTypes) {
  objectTypes.innerHTML = `<div class="container object-types-inner"><div class="object-types-heading"><div><p class="eyebrow">ТИПЫ ОБЪЕКТОВ</p><h2>Подземные<br>и <em>заглублённые<br>сооружения</em></h2></div><p>Паркинги, подвалы, технические и коммерческие объекты — от локальных дефектов до комплексного восстановления гидроизоляции.</p></div><div class="object-photo-grid"><article class="object-photo-card object-photo-featured"><div class="object-photo"></div><span class="object-photo-number">01</span><h3>Подземные паркинги</h3><p>Многоуровневые паркинги жилых и коммерческих объектов.</p><span class="object-photo-more">Подробнее</span><div class="object-photo-tasks"><strong>ТИПОВЫЕ ЗАДАЧИ</strong><span>Швы, трещины, вводы коммуникаций, примыкания и фильтрация воды через железобетонные конструкции.</span></div></article><article class="object-photo-card"><div class="object-photo"></div><span class="object-photo-number">02</span><h3>Подвалы МКД</h3><p>Подвальные помещения и заглублённые части жилых домов.</p><span class="object-photo-more">Подробнее</span><div class="object-photo-tasks"><strong>ТИПОВЫЕ ЗАДАЧИ</strong><span>Протечки через стены и плиты, рабочие швы, вводы коммуникаций и зоны сопряжения конструкций.</span></div></article><article class="object-photo-card"><div class="object-photo"></div><span class="object-photo-number">03</span><h3>Технические помещения</h3><p>Помещения с инженерными сетями, оборудованием и коммуникациями.</p><span class="object-photo-more">Подробнее</span><div class="object-photo-tasks"><strong>ТИПОВЫЕ ЗАДАЧИ</strong><span>Герметизация проходок, локальных протечек и участков, где вода контактирует с инженерными системами.</span></div></article><article class="object-photo-card"><div class="object-photo"></div><span class="object-photo-number">04</span><h3>Бизнес-центры и торговые объекты</h3><p>Подземные уровни БЦ, ТЦ и других коммерческих зданий.</p><span class="object-photo-more">Подробнее</span><div class="object-photo-tasks"><strong>ТИПОВЫЕ ЗАДАЧИ</strong><span>Гидроизоляция эксплуатируемых подземных помещений с минимальным вмешательством в работу объекта.</span></div></article><article class="object-photo-card"><div class="object-photo"></div><span class="object-photo-number">05</span><h3>Подземные части зданий</h3><p>Фундаменты, стены, плиты и другие заглублённые конструкции.</p><span class="object-photo-more">Подробнее</span><div class="object-photo-tasks"><strong>ТИПОВЫЕ ЗАДАЧИ</strong><span>Восстановление герметичности конструктивных узлов и защита от поступления грунтовой воды.</span></div></article><article class="object-photo-card"><div class="object-photo"></div><span class="object-photo-number">06</span><h3>Объекты капитального ремонта</h3><p>Действующие здания, где требуется восстановление гидроизоляции.</p><span class="object-photo-more">Подробнее</span><div class="object-photo-tasks"><strong>ТИПОВЫЕ ЗАДАЧИ</strong><span>Обследование, техническое решение, подготовка объёмов и выполнение работ на существующих конструкциях.</span></div></article></div></div>`;
}
if (objectTypes) {
  objectTypes.querySelector('.object-types-heading h2').innerHTML = 'Подземные и<br><span class="heading-accent">заглублённые</span> сооружения';
  objectTypes.querySelector('.object-types-heading > p').innerHTML = 'Паркинги, подвалы, технические<br>и коммерческие объекты —<br>от отдельных узлов<br>до комплексного восстановления гидроизоляции.';
  objectTypes.querySelector('.object-types-heading .eyebrow').textContent = '02 / ТИПЫ ОБЪЕКТОВ';
  const objectCards = [...objectTypes.querySelectorAll('.object-photo-card')];
  const objectTitles = ['Подземные паркинги', 'Подвалы МКД', 'Технические помещения', 'Бизнес-центры и торговые объекты', 'Подземные части зданий', 'Объекты капитального ремонта'];
  const objectDescriptions = [
    'Многоуровневые паркинги жилых и коммерческих объектов.',
    'Подвальные и заглублённые помещения многоквартирных домов.',
    'Подземные уровни с инженерными сетями и коммуникациями.',
    'Подземные части коммерческих и общественных зданий.',
    'Фундаменты, стены, плиты и другие заглублённые конструкции.',
    'Действующие здания, где требуется восстановление гидроизоляции.'
  ];
  objectCards.forEach((card, index) => {
    card.classList.remove('object-photo-featured');
    card.querySelector('.object-photo-number')?.remove();
    card.querySelector('.object-photo-more')?.remove();
    card.querySelector('.object-photo-tasks')?.remove();
    card.querySelector('h3').textContent = objectTitles[index];
    card.querySelector('p').textContent = objectDescriptions[index];
  });

  const objectTypeMedia = [
    {
      before: 'object-underground-parking-after.webp',
      after: 'object-underground-parking-before.webp',
      w: 700, h: 525,
      altBefore: 'Подземный паркинг после инъекционной гидроизоляции: шов герметичен, стена и пол сухие',
      altAfter: 'Подземный паркинг: протечка по рабочему шву бетонной стены, мокрый след и лужа на полу'
    },
    {
      before: 'object-apartment-basement-after.webp',
      after: 'object-apartment-basement-before.webp',
      w: 1024, h: 768,
      altBefore: 'Тот же подвал после инъекционной гидроизоляции: примыкание герметично, стена и пол сухие',
      altAfter: 'Подвал многоквартирного дома: сырость и высолы по примыканию стены к плите, мокрые следы фильтрации'
    },
    {
      before: 'object-technical-room-after.webp',
      after: 'object-technical-room-before.webp',
      w: 506, h: 380,
      altBefore: 'Техническое помещение после герметизации ввода: проходка трубы сухая и герметичная',
      altAfter: 'Техническое помещение: негерметичный ввод коммуникаций, следы фильтрации и коррозии вокруг трубы'
    },
    {
      before: 'object-commercial-building-after.webp',
      after: 'object-commercial-building-before.webp',
      w: 495, h: 371,
      altBefore: 'Та же колонна после локального инъекционного ремонта: протечка устранена, поверхность восстановлена',
      altAfter: 'Подземный уровень коммерческого объекта: следы протечки на железобетонной колонне'
    },
    {
      before: 'object-underground-structure-after.webp',
      after: 'object-underground-structure-before.webp',
      w: 533, h: 400,
      altBefore: 'Тот же узел после инъекционного ремонта: колонна восстановлена, пол сухой',
      altAfter: 'Подземная часть здания: высолы на колонне, мокрые потёки и лужа воды на полу'
    },
    {
      before: 'object-capital-repair-after.webp',
      after: 'object-capital-repair-before.webp',
      w: 760, h: 570,
      altBefore: 'Тот же участок после восстановления гидроизоляции: колонна сухая, лужа устранена',
      altAfter: 'Эксплуатируемый объект капитального ремонта: повторная протечка, высолы на колонне и мокрая лужа у основания'
    }
  ];
  objectTypeMedia.forEach((media, index) => {
    const box = objectCards[index]?.querySelector('.object-photo');
    if (!box) return;
    const title = objectTitles[index];
    if (media.pending) {
      box.classList.add('is-pending');
      box.setAttribute('role', 'img');
      box.setAttribute('aria-label', title + ': фотографии до и после готовятся к публикации');
      box.innerHTML = '<span class="pending-note">Фото до / после<br>готовится</span>';
      return;
    }
    box.classList.add('has-slider');
    box.innerHTML = '<div class="ba" data-before-after role="group" aria-label="' + title + ': сравнение до и после" style="--ba:58%">'
      + '<input class="ba-range" type="range" min="0" max="100" step="1" value="58" aria-label="' + title + ': сравнение до и после, ползунок" aria-valuetext="58%">'
      + '<img class="ba-img ba-before" src="assets/images/' + media.before + '?v=' + ASSET_VERSION + '" alt="' + media.altBefore + '" width="' + media.w + '" height="' + media.h + '" loading="lazy" decoding="async">'
      + '<img class="ba-img ba-after" src="assets/images/' + media.after + '?v=' + ASSET_VERSION + '" alt="' + media.altAfter + '" width="' + media.w + '" height="' + media.h + '" loading="lazy" decoding="async">'
      + '<span class="ba-tag ba-tag-before" aria-hidden="true">До</span>'
      + '<span class="ba-tag ba-tag-after" aria-hidden="true">После</span>'
      + '<span class="ba-line" aria-hidden="true"></span>'
      + '<span class="ba-knob" aria-hidden="true">' + BEFORE_AFTER_CHEVRONS + '</span>'
      + '</div>';
  });
}
hero.after(objectSales);
document.querySelectorAll('[data-before-after]').forEach(initBeforeAfterSlider);
document.querySelectorAll('.eyebrow').forEach((label) => {
  label.textContent = label.textContent.replace(/^\s*\d+\s*\/\s*/, '').trim();
});
const areaPhotos = [
  { file: 'zone-expansion-joint.webp', alt: 'Специалист обследует деформационный шов в бетонной стене подземного паркинга', focus: 'center' },
  { file: 'zone-construction-joint.webp', alt: 'Обследование рабочего и холодного шва на бетонной стене подземного сооружения', focus: 'center' },
  { file: 'zone-communication-entry.webp', alt: 'Герметизация ввода коммуникаций: трубы проходят через бетонную стену технического помещения', focus: 'center' },
  { file: 'zone-active-leak.webp', alt: 'Устранение активной протечки: инъектирование трещины в бетонной стене, из которой поступает вода', focus: 'center 30%' },
  { file: 'zone-wall-filtration.webp', alt: 'Фильтрация воды через бетонную стену подземного паркинга: влажные участки и высолы', focus: 'center' },
  { file: 'zone-wall-slab-junction.webp', alt: 'Примыкание стены и плиты в подземном паркинге: обследование узла сопряжения конструкций', focus: 'center' }
];
objectSales.querySelectorAll('.photo-grid .image-slot').forEach((slot, index) => { const title = slot.parentElement.querySelector('h3').textContent; const photo = areaPhotos[index]; slot.style.backgroundImage = 'none'; slot.innerHTML = `<img src="assets/images/${photo.file}" alt="${photo.alt}" width="900" height="672" loading="lazy" decoding="async" style="object-position:${photo.focus}">`; slot.classList.add('has-image'); slot.setAttribute('aria-label', `Фотография зоны: ${title}`); });
const WORK_STEPS = [
  {
    file: 'work-01-inspection.webp', w: 1118, h: 838,
    title: 'Диагностика и обследование',
    text: 'Фиксируем дефект, характер водопритока и состояние конструкции.',
    alt: 'Инженеры обследуют дефект бетонной стены в подземном паркинге: тепловизор и планшет'
  },
  {
    file: 'work-02-injection-layout.webp', w: 1118, h: 838,
    title: 'Подготовка схемы инъектирования',
    text: 'Размечаем точки подачи состава с учётом геометрии шва, трещины или примыкания.',
    alt: 'Разметка точек инъектирования по шву на бетонной стене'
  },
  {
    file: 'work-03-packer-installation.webp', w: 1118, h: 838,
    title: 'Установка пакеров',
    text: 'Устанавливаем точки подачи состава по принятой схеме инъектирования.',
    alt: 'Установленные пакеры по линии шва на бетонной стене, специалист проверяет монтаж'
  },
  {
    file: 'work-04-injection.webp', w: 1260, h: 945,
    title: 'Инъектирование',
    text: 'Последовательно подаём состав через установленные пакеры и заполняем внутренний объём дефекта.',
    alt: 'Инъектирование состава через пакеры: специалист подаёт состав, оператор работает с насосом'
  },
  {
    file: 'work-05-local-sealing.webp', w: 1200, h: 900,
    title: 'Локальная заделка',
    text: 'После завершения инъектирования и демонтажа пакеров заделываем технологические отверстия и приводим участок в техническое состояние.',
    alt: 'Заделанные технологические отверстия и следы инъектирования на обработанном участке стены'
  },
  {
    file: 'work-06-result-control.webp', w: 1246, h: 935,
    title: 'Контроль результата',
    text: 'Проверяем отсутствие водопритока и состояние обработанного участка.',
    alt: 'Инженер контролирует результат работ: влагомер и планшет у обработанного участка стены'
  }
];
const initWorkProcess = () => {
  const workSection = objectSales.querySelector('.work-section');
  if (!workSection) return;
  const workSrc = WORK_STEPS.map((step) => 'assets/images/' + step.file + '?v=' + ASSET_VERSION);
  const inner = document.createElement('div');
  inner.className = 'container work-section-inner';
  inner.innerHTML = '<div class="section-heading split work-heading">'
    + '<div><p class="eyebrow dark">ВЫПОЛНЕНИЕ РАБОТ</p><h2>Как выполняем<br>инъекционные работы</h2></div>'
    + '<p>От диагностики дефекта до контроля результата — каждый этап выполняется по принятой технической схеме.</p>'
    + '</div>'
    + '<div class="work-process">'
    + '<div class="work-stage" id="work-stage" role="tabpanel" aria-labelledby="work-step-1">'
    + '<img class="work-stage-img is-active" src="' + workSrc[0] + '" alt="' + WORK_STEPS[0].alt + '" width="' + WORK_STEPS[0].w + '" height="' + WORK_STEPS[0].h + '" loading="lazy" decoding="async">'
    + '<img class="work-stage-img" alt="" aria-hidden="true" decoding="async">'
    + '<span class="work-stage-count" aria-hidden="true">01 / 06</span>'
    + '</div>'
    + '<div class="work-steps" role="tablist" aria-orientation="vertical" aria-label="Этапы выполнения инъекционных работ"></div>'
    + '</div>';
  const steps = inner.querySelector('.work-steps');
  steps.innerHTML = WORK_STEPS.map((step, index) => {
    const number = String(index + 1).padStart(2, '0');
    return '<button type="button" class="work-step' + (index === 0 ? ' is-active' : '') + '" role="tab" id="work-step-' + (index + 1) + '" aria-controls="work-stage" aria-selected="' + (index === 0) + '" data-step="' + index + '">'
      + '<span class="work-step-no">' + number + '</span>'
      + '<span class="work-step-main">'
      + '<span class="work-step-title">' + step.title + '</span>'
      + '<span class="work-step-text">' + step.text + '</span>'
      + '<img class="work-step-photo" src="' + workSrc[index] + '" alt="" aria-hidden="true" width="' + step.w + '" height="' + step.h + '" loading="lazy" decoding="async">'
      + '</span>'
      + '</button>';
  }).join('');
  workSection.replaceChildren(inner);
  const panel = inner.querySelector('.work-stage');
  const layers = [...panel.querySelectorAll('.work-stage-img')];
  const counter = panel.querySelector('.work-stage-count');
  const tabs = [...steps.querySelectorAll('.work-step')];
  const total = String(WORK_STEPS.length).padStart(2, '0');
  let front = 0;
  let active = 0;
  const select = (index) => {
    if (index === active || index < 0 || index >= tabs.length) return;
    active = index;
    tabs.forEach((tab, tabIndex) => {
      const on = tabIndex === index;
      tab.classList.toggle('is-active', on);
      tab.setAttribute('aria-selected', String(on));
    });
    panel.setAttribute('aria-labelledby', 'work-step-' + (index + 1));
    counter.textContent = String(index + 1).padStart(2, '0') + ' / ' + total;
    const back = layers[1 - front];
    const prev = layers[front];
    back.src = workSrc[index];
    back.alt = WORK_STEPS[index].alt;
    back.classList.add('is-active');
    front = 1 - front;
    window.setTimeout(() => prev.classList.remove('is-active'), 300);
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(index));
    tab.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault();
        select(index);
        return;
      }
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight' || event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault();
        const forward = event.key === 'ArrowDown' || event.key === 'ArrowRight';
        const next = (index + (forward ? 1 : -1) + tabs.length) % tabs.length;
        tabs[next].focus();
        select(next);
        return;
      }
      if (event.key === 'Home') { event.preventDefault(); tabs[0].focus(); select(0); return; }
      if (event.key === 'End') { event.preventDefault(); tabs[tabs.length - 1].focus(); select(tabs.length - 1); }
    });
  });
  let preloaded = false;
  const preload = () => {
    if (preloaded) return;
    preloaded = true;
    workSrc.slice(1).forEach((src) => { const image = new Image(); image.src = src; });
  };
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) { preload(); observer.disconnect(); }
    }, { rootMargin: '600px 0px' });
    observer.observe(workSection);
  } else {
    window.addEventListener('load', preload, { once: true });
  }
  steps.addEventListener('pointerdown', preload, { once: true });
  steps.addEventListener('focusin', preload, { once: true });
};
initWorkProcess();
document.querySelectorAll('.location,.defects,.injection,.assessment,.audience,.process-v3').forEach((section) => { section.hidden = true; });
const hotspotText = {
  joint: ['01 / ДЕФОРМАЦИОННЫЙ ШОВ', 'Подвижный узел, в котором нарушилась герметичность.'],
  cold: ['02 / РАБОЧИЙ ШОВ', 'Граница бетонирования, по которой вода проходит через конструкцию.'],
  crack: ['03 / ТРЕЩИНА', 'Дефект тела бетона, который заполняется через установленные пакеры.'],
  pipe: ['04 / ВВОД КОММУНИКАЦИЙ', 'Вода движется по контакту трубы и бетонной конструкции.'],
  mass: ['05 / МАССИВ БЕТОНА', 'При внешнем источнике вода фильтруется через толщу конструкции.'],
  abutment: ['06 / СТЕНА — ПЛИТА', 'Примыкание требует отдельного решения с учетом движения узла.']
};

document.querySelectorAll('[data-action="survey"]').forEach((target) => target.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#survey').scrollIntoView({ behavior: 'smooth' });
  header.classList.remove('menu-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

menuToggle?.addEventListener('click', () => {
  const open = header.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
});
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && header.classList.contains('menu-open')) { header.classList.remove('menu-open'); menuToggle?.setAttribute('aria-expanded', 'false'); menuToggle?.setAttribute('aria-label', 'Открыть меню'); } });
document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => header.classList.remove('menu-open')));

function showHotspot(key, source) {
  const panel = document.querySelector('#hotspot-panel');
  if (!panel || !hotspotText[key]) return;
  panel.innerHTML = `<strong>${hotspotText[key][0]}</strong><p>${hotspotText[key][1]}</p>`;
  document.querySelectorAll('.hotspot').forEach((item) => item.classList.toggle('active', item.dataset.hotspot === key));
  document.querySelectorAll('.hotspot-list button').forEach((item) => item.classList.toggle('active', item.dataset.hotspot === key));
  if (source?.classList.contains('hotspot-list')) panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
document.querySelectorAll('[data-hotspot]').forEach((item) => {
  item.addEventListener('click', () => showHotspot(item.dataset.hotspot, item.parentElement));
  item.addEventListener('mouseenter', () => showHotspot(item.dataset.hotspot, item));
});

document.querySelectorAll('.survey-form').forEach((form) => form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const status = form.querySelector('.form-status');
  const phone = form.elements.phone.value.trim();
  status.className = 'form-status';
  if (phone.replace(/\D/g, '').length < 10) {
    status.className = 'form-status is-visible is-error';
    status.textContent = 'Укажите корректный номер телефона, чтобы мы могли связаться с вами.';
    form.elements.phone.focus();
    return;
  }
  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  button.textContent = 'Фиксируем заявку…';
  const payload = Object.fromEntries(new FormData(form));
  payload.created_at = new Date().toISOString();
  try {
    await new Promise((resolve) => setTimeout(resolve, 650));
    localStorage.setItem('injekt-pro-last-survey', JSON.stringify(payload));
    status.className = 'form-status is-visible';
    status.textContent = 'Заявка принята. На рабочей версии сайта здесь будет отправка заявки.';
    form.reset();
  } catch (error) {
    status.className = 'form-status is-visible is-error';
    status.textContent = 'Не удалось сохранить заявку локально. Позвоните нам по телефону 8-967-777-35-68.';
  } finally {
    button.disabled = false;
    button.innerHTML = 'Записаться на обследование <span>↗</span>';
  }
}));
