# Сайт ООО «М-Актив»

Многостраничный сайт: поставка, монтаж и сервис медицинского оборудования. Обычный HTML + CSS + JS, без сборки.

## Как открыть
Двойной клик по `index.html` или в Claude Code: превью `m-aktiv-site` (http://localhost:8766).

## Страницы
- `index.html` — главная
- `catalog.html` — все 13 направлений (ассортимент ТД «Пульс», 305 позиций)
- `category.html?c=uzi` — направление (uzi, kt, mrt, inj, xray, angio, nuc, rt, func, reanim, monitor, physio, it)
- `services.html` — услуги + trade-in
- `service.html` — сервис и гарантия
- `about.html` — о компании
- `contacts.html` — контакты и реквизиты
- `privacy.html` — политика персональных данных (черновик, проверить у юриста)

## Где что менять
- Лицензии — `assets/js/layout.js`, `SITE.licenses` (блок появится сам)
- Телефон, почта, адрес — `assets/js/layout.js`, объект `SITE` (+ вручную в блоках «Призыв» на страницах и в `contacts.html`)
- Модели в каталоге — `assets/js/catalog-data.js` (собран из ассортимента ТД «Пульс» скриптом `project/m-aktiv-tools/build_catalog.py`; чтобы обновить — скачать свежий список товаров Пульса и запустить скрипт заново)
- Услуги — `assets/js/services-data.js`
- Цвета и шрифты — начало `assets/css/style.css`

## Заявка «Получить КП»
Форма отправляет заявку на `send.php` → письмо на m-aktiv_ooo@mail.ru (адрес меняется в начале `send.php`).
Если PHP нет (локально, GitHub Pages) — открывается готовое письмо в почте клиента.
Защита от спама: скрытое поле `website`.

## Публикация на maktiv.ru (российский хостинг)
1. Купить хостинг + домен maktiv.ru на ООО «М-Актив».
2. В панели хостинга включить бесплатный SSL (https) для maktiv.ru.
3. Загрузить `project/m-aktiv-upload/maktiv-site.zip` в папку сайта (обычно `maktiv.ru/public_html`) и распаковать.
4. Отправить тестовую заявку, проверить почту (и папку «Спам»).
5. Добавить сайт в Яндекс Вебмастер и Google Search Console, указать `https://maktiv.ru/sitemap.xml`.

Архив пересобирается после любых правок (см. дневник 2026-11-13).
`.htaccess` включает переадресацию на https — загружать после выпуска SSL.
