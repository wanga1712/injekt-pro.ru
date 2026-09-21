# INJEKT-PRO landing

Локальная статическая V3-версия сайта ООО «Кардинал Инжиниринг» для направления гидроизоляции подземных паркингов и подвалов.

Страница построена вокруг инженерной логики: объект → путь поступления воды → тип дефекта → технология → обследование. Внутри есть интерактивная схема шести зон риска, шесть технологических решений, двухстадийная логика остановки активной течи, схема пакера/инъектирования, вуальная гидроизоляция и системный процесс от обследования до контроля результата.

## Локальный запуск

Из каталога `injekt-pro-landing` запустите:

```bash
python3 -m http.server 8080
```

Откройте `http://localhost:8080`. На S13 можно использовать тот же порт и проверить адрес сервера в локальной сети.

## Структура

- `index.html` — семантическая разметка, SEO и OpenGraph.
- `styles.css` — темная индустриальная стилистика, адаптивные состояния desktop/tablet/mobile.
- `script.js` — единая CTA-логика, мобильное меню и локальная UX-обработка формы.
- `assets/images/hero-waterproofing-team.png` — hero-сцена команды на объекте.
- `assets/images/zone-*.png` — шесть фотографий зон протечек.
- `assets/images/object-*.png` — фотографии типов объектов.
- `assets/images/work-team.png`, `work-drilling.png`, `work-pump.png` — выполнение работ.
- `assets/images/work-injection-cracks.png`, `work-construction-joints.png`, `work-communication-entry.png`, `work-active-leak.png`, `work-local-waterproofing.png`, `work-concrete-restoration.png` — технические схемы направлений работ.
- `assets/icons/favicon.svg` — основной favicon.
- `assets/icons/favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png`, `apple-touch-icon.png`, `favicon-1024.png` — варианты favicon внутри каталога icons.
- `assets/images/brand-logo-header.svg`, `brand-logo-header.png`, `brand-mark.png`, `brand-kardinal-mark.png` — логотипы и фирменный знак.

## Где менять данные

Телефон, email и домен находятся в `index.html` в форме и footer. Тексты блоков находятся в `index.html` и объектной структуре `script.js`. Все изображения и логотипы лежат в `assets/images`, favicon-файлы — в `assets/icons`. Изображения подключаются в `script.js` и могут быть заменены на локальные `.webp`, `.jpg` или `.png` в `assets/images`. Исходные файлы из `C:\Users\Lenovo\Pictures\сайт` сохранены; в проект скопированы нормализованные web-имена.

Форма сейчас не отправляет данные наружу: после локальной валидации сохраняет payload с `created_at` в `localStorage` и показывает success/error state: «Заявка принята. На рабочей версии сайта здесь будет отправка заявки.» Архитектура UI отделена от обработчика: будущий `POST /api/survey` можно добавить в обработчик `submit` без изменения разметки.

## Следующий этап

После отдельного подтверждения локальной версии можно очистить временные файлы, добавить `.gitignore`, создать Git-репозиторий и подключить бесплатный static hosting. GitHub, Cloudflare, DNS, SSL и production backend на текущем этапе не подключены.
