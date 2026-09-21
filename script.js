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
hero.querySelector('.hero-art').style.setProperty('background-image', "linear-gradient(to bottom,rgba(7,10,12,.88) 0%,rgba(7,10,12,.72) 18%,rgba(7,10,12,.48) 34%,rgba(7,10,12,.18) 52%,rgba(7,10,12,0) 68%),linear-gradient(90deg,rgba(8,10,12,.86) 0%,rgba(8,10,12,.72) 30%,rgba(8,10,12,.46) 58%,rgba(8,10,12,.22) 78%,rgba(8,10,12,.10) 100%),url('assets/images/hero-waterproofing-team.png')", 'important');
hero.querySelector('.hero-art').style.setProperty('background-size', 'cover', 'important');
hero.querySelector('.hero-art').style.setProperty('background-position', 'center', 'important');
const navLinks = document.querySelectorAll('.main-nav a');
[['Зоны работ', '#areas'], ['Выполнение работ', '#works'], ['Как работаем', '#field-process'], ['Обследование', '#survey']].forEach(([label, href], index) => { if (navLinks[index]) { navLinks[index].textContent = label; navLinks[index].href = href; } });

const objectSales = document.createElement('section');
objectSales.className = 'object-sales';
objectSales.innerHTML = `
  <section class="section light object-areas" id="areas"><div class="container"><div class="section-heading split"><div><p class="eyebrow dark">01 / ЗОНЫ РАБОТЫ</p><h2>Работаем с основными зонами протечек <em>в подземных конструкциях</em></h2></div><p>Покажите нам объект — мы определим, где проходит вода и что нужно сделать, чтобы восстановить герметичность.</p></div><div class="photo-grid"><article><div class="image-slot">Фото зоны протечки / деформационный шов</div><h3>Деформационные швы</h3><p>Герметизация подвижных узлов подземных конструкций.</p></article><article><div class="image-slot">Фото рабочей зоны / трещина в бетоне</div><h3>Рабочие и холодные швы</h3><p>Инъектирование границ бетонирования и примыканий.</p></article><article><div class="image-slot">Фото стены / ввод коммуникаций</div><h3>Вводы коммуникаций</h3><p>Герметизация пустот вокруг труб и проходок.</p></article><article><div class="image-slot">Фото мокрого участка конструкции</div><h3>Активные протечки</h3><p>Остановка водопритока и постоянная герметизация.</p></article><article><div class="image-slot">Фото стены подвала</div><h3>Фильтрация через стену</h3><p>Локальная и заэкранная гидроизоляция изнутри.</p></article><article><div class="image-slot">Фото примыкания стена / плита</div><h3>Подвалы и техпомещения</h3><p>Работы с железобетонными конструкциями действующих объектов.</p></article></div></div></section>
  <section class="section section-dark object-types"><div class="container"><div class="section-heading"><p class="eyebrow">02 / ОБЪЕКТЫ</p><h2>Где мы <em>работаем</em></h2></div><div class="object-type-list"><span>Подземные паркинги</span><span>Подвалы МКД</span><span>Технические помещения</span><span>Подземные части зданий</span><span>Коммерческие объекты</span><span>Эксплуатируемые объекты</span><span>Объекты капитального ремонта</span></div></div></section>
  <section class="section light work-section" id="works"><div class="container work-layout"><div class="image-slot image-slot-large">Фото команды на объекте / выполнение инъектирования</div><div><p class="eyebrow dark">03 / ВЫПОЛНЕНИЕ РАБОТ</p><h2>Выполняем работы по гидроизоляции и <em>инъектированию</em></h2><ul class="work-list"><li>Инъектирование трещин и деформационных швов</li><li>Герметизация рабочих и холодных швов</li><li>Герметизация вводов коммуникаций</li><li>Устранение активных протечек</li><li>Локальная гидроизоляция подземных конструкций</li><li>Восстановление герметичности железобетона</li></ul></div></div></section>
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
  objectTypes.innerHTML = `<div class="container object-types-inner"><div class="object-types-heading"><div><p class="eyebrow">ТИПЫ ОБЪЕКТОВ</p><h2>Подземные<br>и <em>заглублённые<br>сооружения</em></h2></div><p>Паркинги, подвалы, технические и коммерческие объекты — от локальных дефектов до комплексного восстановления гидроизоляции.</p></div><div class="object-photo-grid"><article class="object-photo-card object-photo-featured"><div class="object-photo"><img src="assets/images/object-underground-parking.png" alt="Подземный паркинг" loading="lazy" decoding="async"></div><span class="object-photo-number">01</span><h3>Подземные паркинги</h3><p>Многоуровневые паркинги жилых и коммерческих объектов.</p><span class="object-photo-more">Подробнее</span><div class="object-photo-tasks"><strong>ТИПОВЫЕ ЗАДАЧИ</strong><span>Швы, трещины, вводы коммуникаций, примыкания и фильтрация воды через железобетонные конструкции.</span></div></article><article class="object-photo-card"><div class="object-photo"><img src="assets/images/object-apartment-basement.png" alt="Подвал многоквартирного дома" loading="lazy" decoding="async"></div><span class="object-photo-number">02</span><h3>Подвалы МКД</h3><p>Подвальные помещения и заглублённые части жилых домов.</p><span class="object-photo-more">Подробнее</span><div class="object-photo-tasks"><strong>ТИПОВЫЕ ЗАДАЧИ</strong><span>Протечки через стены и плиты, рабочие швы, вводы коммуникаций и зоны сопряжения конструкций.</span></div></article><article class="object-photo-card"><div class="object-photo"><img src="assets/images/object-technical-room.png" alt="Техническое помещение" loading="lazy" decoding="async"></div><span class="object-photo-number">03</span><h3>Технические помещения</h3><p>Помещения с инженерными сетями, оборудованием и коммуникациями.</p><span class="object-photo-more">Подробнее</span><div class="object-photo-tasks"><strong>ТИПОВЫЕ ЗАДАЧИ</strong><span>Герметизация проходок, локальных протечек и участков, где вода контактирует с инженерными системами.</span></div></article><article class="object-photo-card"><div class="object-photo"><img src="assets/images/object-commercial-building.png" alt="Бизнес-центр и торговый объект" loading="lazy" decoding="async"></div><span class="object-photo-number">04</span><h3>Бизнес-центры и торговые объекты</h3><p>Подземные уровни БЦ, ТЦ и других коммерческих зданий.</p><span class="object-photo-more">Подробнее</span><div class="object-photo-tasks"><strong>ТИПОВЫЕ ЗАДАЧИ</strong><span>Гидроизоляция эксплуатируемых подземных помещений с минимальным вмешательством в работу объекта.</span></div></article><article class="object-photo-card"><div class="object-photo"><img src="assets/images/object-underground-structure.png" alt="Подземная часть здания" loading="lazy" decoding="async"></div><span class="object-photo-number">05</span><h3>Подземные части зданий</h3><p>Фундаменты, стены, плиты и другие заглублённые конструкции.</p><span class="object-photo-more">Подробнее</span><div class="object-photo-tasks"><strong>ТИПОВЫЕ ЗАДАЧИ</strong><span>Восстановление герметичности конструктивных узлов и защита от поступления грунтовой воды.</span></div></article><article class="object-photo-card"><div class="object-photo"><img src="assets/images/object-capital-repair.png" alt="Объект капитального ремонта" loading="lazy" decoding="async"></div><span class="object-photo-number">06</span><h3>Объекты капитального ремонта</h3><p>Действующие здания, где требуется восстановление гидроизоляции.</p><span class="object-photo-more">Подробнее</span><div class="object-photo-tasks"><strong>ТИПОВЫЕ ЗАДАЧИ</strong><span>Обследование, техническое решение, подготовка объёмов и выполнение работ на существующих конструкциях.</span></div></article></div></div>`;
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
}
hero.after(objectSales);
document.querySelectorAll('.eyebrow').forEach((label) => {
  label.textContent = label.textContent.replace(/^\s*\d+\s*\/\s*/, '').trim();
});
const areaPhotos = ['zone-expansion-joint.png', 'zone-construction-joint.png', 'zone-communication-entry.png', 'zone-active-leak.png', 'zone-wall-filtration.png', 'zone-wall-slab-junction.png'];
objectSales.querySelectorAll('.photo-grid .image-slot').forEach((slot, index) => { const title = slot.parentElement.querySelector('h3').textContent; slot.style.backgroundImage = 'none'; slot.innerHTML = `<img src="assets/images/${areaPhotos[index]}" alt="${title}" width="1536" height="1024" loading="eager" decoding="sync">`; slot.classList.add('has-image'); slot.setAttribute('aria-label', `Фотография зоны: ${title}`); });
const worksPhoto = objectSales.querySelector('.image-slot-large');
worksPhoto.style.backgroundImage = 'none';
worksPhoto.innerHTML = '<img src="assets/images/work-team.png" alt="Команда выполняет инъектирование" width="1536" height="1024" loading="eager" decoding="sync">';
worksPhoto.classList.add('has-image');
worksPhoto.setAttribute('aria-label', 'Фотография команды, выполняющей инъектирование');
const detailImages = document.createElement('div');
detailImages.className = 'works-detail-images';
detailImages.innerHTML = '<div class="image-slot has-image" aria-label="Фото бурения"></div><div class="image-slot has-image" aria-label="Фото насоса и пакеров"></div>';
detailImages.children[0].innerHTML = '<img src="assets/images/work-drilling.png" alt="Бурение инъекционных отверстий" width="1536" height="1024" loading="eager" decoding="sync">';
detailImages.children[1].innerHTML = '<img src="assets/images/work-pump.png" alt="Насос и пакеры на объекте" width="1536" height="1024" loading="eager" decoding="sync">';
worksPhoto.parentElement.insertBefore(detailImages, worksPhoto.nextSibling);
detailImages.remove();
const worksCopy = objectSales.querySelector('.work-section .work-layout > div:last-child');
if (worksCopy) {
  worksCopy.innerHTML = `<p class="eyebrow dark">ВЫПОЛНЕНИЕ РАБОТ</p><h2>Инъектирование<br>и гидроизоляция</h2><p class="works-intro">Подбираем технологию под тип дефекта, характер водопритока и состояние конструкции.</p><div class="work-service-list"><article><span class="work-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 38 17 10l7 15 15-8"/><path d="m24 25 6 13"/></svg></span><div><h3>Инъектирование трещин</h3><p>Заполнение трещин и восстановление герметичности железобетона.</p></div></article><article><span class="work-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 11h34M7 24h34M7 37h34"/><path class="work-accent" d="M18 7v34"/></svg></span><div><h3>Деформационные швы</h3><p>Герметизация подвижных конструктивных узлов.</p></div></article><article><span class="work-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M9 7v34m30-34v34M9 16h30M9 32h30"/><circle cx="24" cy="24" r="4"/><path class="work-accent" d="M24 3v13m0 16v13"/></svg></span><div><h3>Рабочие и холодные швы</h3><p>Восстановление герметичности границ бетонирования.</p></div></article><article><span class="work-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 10h34v28H7zM13 31c5-10 9-10 13 0s8 10 15 0"/><path class="work-accent" d="M24 10v9"/></svg></span><div><h3>Вводы коммуникаций</h3><p>Герметизация проходок и пустот вокруг труб.</p></div></article><article><span class="work-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 7h34v34H7zM15 15h18v18H15z"/><path class="work-accent" d="m15 33 18-18"/></svg></span><div><h3>Активные протечки</h3><p>Остановка водопритока и постоянная герметизация.</p></div></article><article><span class="work-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 10h36v29H6zM14 10v29m20-29v29M6 24h36"/><path class="work-accent" d="M20 32h8"/></svg></span><div><h3>Локальная гидроизоляция</h3><p>Защита отдельных участков подземных конструкций.</p></div></article></div>`;
}
const serviceItems = [...objectSales.querySelectorAll('.work-service-list article')];
if (serviceItems.length === 6) {
  const iconMarkup = serviceItems.map((item) => item.querySelector('.work-icon').innerHTML);
  const serviceCopy = [
    ['Инъектирование трещин и деформационных швов', 'Заполнение дефектов и восстановление герметичности конструкции.'],
    ['Рабочие и холодные швы', 'Герметизация границ бетонирования и конструктивных примыканий.'],
    ['Вводы коммуникаций', 'Герметизация проходок и пустот вокруг инженерных вводов.'],
    ['Активные протечки', 'Локализация водопритока и последующая постоянная герметизация.'],
    ['Локальная гидроизоляция', 'Защита проблемных участков подземных конструкций.'],
    ['Герметичность железобетона', 'Восстановление повреждённых и негерметичных конструктивных участков.']
  ];
  const iconOrder = [iconMarkup[0], iconMarkup[2], iconMarkup[3], iconMarkup[4], iconMarkup[5], iconMarkup[1]];
  serviceItems.forEach((item, index) => {
    item.dataset.workIndex = String(index);
    item.querySelector('.work-icon').innerHTML = iconOrder[index];
    item.querySelector('h3').textContent = serviceCopy[index][0];
    item.querySelector('p').textContent = serviceCopy[index][1];
  });
}
const workSection = objectSales.querySelector('.work-section');
const workLayout = workSection?.querySelector('.work-layout');
const workCopy = workSection?.querySelector('.work-layout > div:last-child');
if (workSection && workLayout && workCopy) {
  const label = workCopy.querySelector('.eyebrow');
  const heading = workCopy.querySelector('h2');
  const intro = workCopy.querySelector('.works-intro');
  const services = workCopy.querySelector('.work-service-list');
  const headingRow = document.createElement('div');
  headingRow.className = 'section-heading split work-heading';
  const headingCopy = document.createElement('div');
  headingCopy.append(label, heading);
  headingRow.append(headingCopy, intro);
  workCopy.replaceChildren(services);
  workLayout.classList.remove('container');
  const inner = document.createElement('div');
  inner.className = 'container work-section-inner';
  inner.append(headingRow, workLayout);
  workSection.replaceChildren(inner);
}
const workItems = [...objectSales.querySelectorAll('.work-section .work-service-list article')];
const workStage = objectSales.querySelector('.work-section .image-slot-large');
const workTechSources = ['work-injection-cracks.png', 'work-construction-joints.png', 'work-communication-entry.png', 'work-active-leak.png', 'work-local-waterproofing.png', 'work-concrete-restoration.png'];
if (workStage && workItems.length === workTechSources.length) {
  workStage.classList.add('work-visual-stage');
  const defaultVisual = workStage.querySelector('img');
  defaultVisual.classList.add('work-default-visual');
  const techVisual = document.createElement('img');
  techVisual.className = 'work-tech-visual';
  techVisual.alt = '';
  techVisual.setAttribute('aria-hidden', 'true');
  workStage.append(techVisual);
  let lockedWork = null;
  const clearWorkSelection = () => {
    lockedWork = null;
    workStage.classList.remove('is-tech-preview');
    techVisual.removeAttribute('src');
    workItems.forEach((item) => item.classList.remove('is-selected'));
  };
  const showWorkPreview = (index, lock = false) => {
    techVisual.src = `assets/images/${workTechSources[index]}`;
    techVisual.alt = workItems[index].querySelector('h3').textContent;
    workStage.classList.add('is-tech-preview');
    if (lock) {
      lockedWork = index;
      workItems.forEach((item, itemIndex) => item.classList.toggle('is-selected', itemIndex === index));
    }
  };
  workItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      if (!window.matchMedia('(hover: hover)').matches || lockedWork !== null) return;
      showWorkPreview(index);
    });
    item.addEventListener('mouseleave', () => {
      if (!window.matchMedia('(hover: hover)').matches || lockedWork !== null) return;
      clearWorkSelection();
    });
    item.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 720px)').matches) {
        const current = item.querySelector('.work-mobile-preview');
        document.querySelectorAll('.work-mobile-preview').forEach((preview) => preview.remove());
        workItems.forEach((entry) => entry.classList.remove('is-selected'));
        if (current) return;
        const mobilePreview = document.createElement('img');
        mobilePreview.className = 'work-mobile-preview';
        mobilePreview.src = `assets/images/${workTechSources[index]}`;
        mobilePreview.alt = item.querySelector('h3').textContent;
        item.append(mobilePreview);
        item.classList.add('is-selected');
        return;
      }
      showWorkPreview(index, true);
    });
  });
  workStage.addEventListener('click', clearWorkSelection);
}
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
});
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
