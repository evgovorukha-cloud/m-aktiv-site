# Сайт ООО «М-Актив»

Многостраничный сайт: поставка, монтаж и сервис медицинского оборудования. Обычный HTML + CSS + JS, без сборки.

## Как открыть
Двойной клик по `index.html` или в Claude Code: превью `m-aktiv-site` (http://localhost:8766).

## Страницы
- `index.html` — главная
- `catalog.html` — все 12 направлений
- `category.html?c=uzi` — направление (uzi, kt, mrt, inj, xray, angio, nuc, func, reanim, monitor, physio, it)
- `services.html` — услуги + trade-in
- `service.html` — сервис и гарантия
- `about.html` — о компании
- `contacts.html` — контакты и реквизиты
- `privacy.html` — политика персональных данных (черновик, проверить у юриста)

## Где что менять
- Телефон, почта, адрес — `assets/js/layout.js`, объект `SITE` (+ вручную в блоках «Призыв» на страницах и в `contacts.html`)
- Модели в каталоге — `assets/js/catalog-data.js`
- Услуги — `assets/js/services-data.js`
- Цвета и шрифты — начало `assets/css/style.css`

## Заявка «Получить КП»
Сейчас форма открывает почтовую программу с готовым письмом на m-aktiv_ooo@mail.ru. Чтобы заявки приходили автоматически (почта/Telegram), нужен хостинг и обработчик формы — следующий шаг.
