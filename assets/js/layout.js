/* =========================================================
   М-АКТИВ — общие части сайта: шапка, подвал, окно «Получить КП»
   Контакты меняются здесь — и сразу на всех страницах.
   ========================================================= */
const SITE = {
  phone: "+7 (988) 242-42-36",
  phoneHref: "tel:+79882424236",
  email: "m-aktiv_ooo@mail.ru",
  city: "Краснодар",
  address: "350063, г. Краснодар, ул. Кубанская Набережная, д. 5/8, офис 58",
  legal: "ООО «М-АКТИВ»",
};

const NAV = [
  { href: "catalog.html", label: "Каталог", page: "catalog" },
  { href: "services.html", label: "Услуги", page: "services" },
  { href: "service.html", label: "Сервис и гарантия", page: "service" },
  { href: "about.html", label: "О компании", page: "about" },
  { href: "contacts.html", label: "Контакты", page: "contacts" },
];

const LOGO_SVG = `
<svg viewBox="0 0 230 64" fill="none" role="img" aria-label="М-Актив">
  <path d="M2 54H22L36 4L52 50L60 34L70 54H226" stroke="#707D3A" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
  <circle class="logo-dot" cx="78" cy="38" r="2.6" fill="#0E1A2B"/>
  <text class="logo-text" x="86" y="46" font-family="Golos Text, Arial, sans-serif" font-size="26" letter-spacing="2" fill="#0E1A2B">АКТИВ</text>
</svg>`;

const ARROW = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 12h16M14 6l6 6-6 6"/></svg>`;

/* Линейные иконки направлений (рисованные, свои) */
const ICONS = {
  uzi: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="8" y="6" width="24" height="18" rx="2"/><path d="M14 18c2-6 10-6 12 0"/><path d="M20 24v6M12 42h16l-2-12H14z"/><path d="M34 14c4 0 6 3 6 7v10c0 3-2 5-5 5h-3"/><rect x="28" y="34" width="6" height="8" rx="2"/></svg>',
  kt: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="20" cy="22" r="14"/><circle cx="20" cy="22" r="6"/><path d="M4 40h40M26 22h18v6H26"/></svg>',
  mrt: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="6" y="6" width="28" height="30" rx="6"/><circle cx="20" cy="21" r="8"/><path d="M28 21h16v6H28M4 42h40"/></svg>',
  inj: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M30 6l12 12M34 10l-20 20-6 2 2-6 20-20M24 16l8 8M8 40l6-6"/></svg>',
  xray: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="10" y="4" width="28" height="40" rx="2"/><path d="M24 10v26M24 14c-5 1-8 3-8 3M24 14c5 1 8 3 8 3M24 20c-6 1-9 3-9 3M24 20c6 1 9 3 9 3M24 26c-5 1-8 3-8 3M24 26c5 1 8 3 8 3"/></svg>',
  angio: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M10 8a18 18 0 0 0 0 30"/><path d="M10 8h6M10 38h6"/><rect x="16" y="5" width="8" height="6"/><path d="M16 40h28M22 32h20"/></svg>',
  nuc: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="24" cy="24" r="4"/><ellipse cx="24" cy="24" rx="18" ry="7"/><ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(60 24 24)"/><ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(120 24 24)"/></svg>',
  func: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="40" height="30" rx="2"/><path d="M8 26h8l3-8 5 14 4-10 3 4h9"/></svg>',
  reanim: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M24 40S6 30 6 17a9 9 0 0 1 18-3 9 9 0 0 1 18 3c0 13-18 23-18 23z"/><path d="M14 22h6l2-4 3 8 2-4h7"/></svg>',
  monitor: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="6" width="40" height="28" rx="2"/><path d="M8 16h7l2-4 3 8 2-4h6M8 26h12M30 22h10M30 28h6M16 42h16M24 34v8"/></svg>',
  physio: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="6" y="14" width="24" height="24" rx="3"/><circle cx="18" cy="26" r="5"/><path d="M30 20c6 0 8 4 8 8s-2 8-8 8M36 10l4 4M40 6v6"/></svg>',
  it: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="4" y="6" width="26" height="20" rx="2"/><path d="M12 32h10M17 26v6"/><ellipse cx="36" cy="14" rx="8" ry="3"/><path d="M28 14v20c0 2 4 3 8 3s8-1 8-3V14M28 24c0 2 4 3 8 3s8-1 8-3"/></svg>',
  /* услуги */
  select: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="20" cy="20" r="12"/><path d="M29 29l13 13M15 20l4 4 7-8"/></svg>',
  design: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M6 6h36v36H6zM6 22h14V6M28 42V28h14M20 22v8"/></svg>',
  truck: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h26v22H4zM30 20h8l6 7v7H30"/><circle cx="12" cy="36" r="4"/><circle cx="36" cy="36" r="4"/></svg>',
  install: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M30 6a8 8 0 0 0-8 10L6 32l4 4 6 4 16-16a8 8 0 0 0 10-8l-5 3-5-3-1-6z"/></svg>',
  train: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 18l20-10 20 10-20 10z"/><path d="M12 22v10c0 3 6 6 12 6s12-3 12-6V22M44 18v12"/></svg>',
  service: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M24 4l16 6v12c0 10-7 18-16 22-9-4-16-12-16-22V10z"/><path d="M17 24l5 5 9-10"/></svg>',
  tradein: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 18h30l-7-7M40 30H10l7 7"/></svg>',
  parts: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="24" cy="24" r="7"/><path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M10 38l4-4M34 14l4-4"/></svg>',
};

function renderHeader() {
  const page = document.body.dataset.page || "";
  const links = NAV.map(n => `<a href="${n.href}" class="${n.page === page ? "is-active" : ""}">${n.label}</a>`).join("");
  const mLinks = NAV.map(n => `<a class="mm-link" href="${n.href}">${n.label}</a>`).join("");
  const el = document.getElementById("site-header");
  if (!el) return;
  el.outerHTML = `
  <div class="topbar">
    <div class="wrap">
      <div class="topbar__left">
        <span class="topbar__badge">Поставка · Монтаж · Сервис</span>
        <span>${SITE.city} — работаем по всей России</span>
      </div>
      <div class="topbar__right">
        <a href="mailto:${SITE.email}">${SITE.email}</a>
      </div>
    </div>
  </div>
  <header class="header">
    <div class="wrap">
      <a href="index.html" class="logo" aria-label="М-Актив — на главную">${LOGO_SVG}</a>
      <nav class="nav" aria-label="Главное меню">${links}</nav>
      <a class="header__phone" href="${SITE.phoneHref}">${SITE.phone}</a>
      <button class="btn btn--primary btn--sm" data-kp>Получить КП</button>
      <button class="burger" aria-label="Открыть меню" aria-expanded="false"><span></span></button>
    </div>
  </header>
  <div class="mobile-menu" id="mobile-menu">
    ${mLinks}
    <div class="mm-contacts">
      <a href="${SITE.phoneHref}">${SITE.phone}</a>
      <a href="mailto:${SITE.email}">${SITE.email}</a>
    </div>
    <button class="btn btn--primary btn--block" data-kp>Получить КП</button>
  </div>`;
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const cats = (window.CATALOG || []).slice(0, 6)
    .map(c => `<li><a href="category.html?c=${c.id}">${c.name}</a></li>`).join("");
  el.outerHTML = `
  <footer class="footer">
    <div class="wrap">
      <div class="footer__grid">
        <div>
          <a href="index.html" class="logo" aria-label="М-Актив">${LOGO_SVG}</a>
          <p class="footer__about">Поставка, запуск и техническое сопровождение высокотехнологичного медицинского оборудования. От проекта — до устойчивой эксплуатации.</p>
        </div>
        <div>
          <h4>Каталог</h4>
          <ul>${cats}<li><a href="catalog.html">Весь каталог →</a></li></ul>
        </div>
        <div>
          <h4>Компания</h4>
          <ul>${NAV.slice(1).map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Связаться</h4>
          <a class="footer__contact" href="${SITE.phoneHref}">${SITE.phone}</a>
          <a class="footer__contact" href="mailto:${SITE.email}" style="font-size:18px;margin-top:6px">${SITE.email}</a>
          <p style="margin-top:14px">${SITE.address}</p>
          <button class="btn btn--light btn--sm" data-kp style="margin-top:20px">Получить КП</button>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© ${new Date().getFullYear()} ${SITE.legal}. Информация на сайте не является публичной офертой.</span>
        <a href="privacy.html">Политика обработки персональных данных</a>
      </div>
    </div>
  </footer>`;
}

function renderModal() {
  const wrap = document.createElement("div");
  wrap.className = "modal";
  wrap.id = "kp-modal";
  wrap.setAttribute("role", "dialog");
  wrap.setAttribute("aria-modal", "true");
  wrap.setAttribute("aria-labelledby", "kp-title");
  wrap.innerHTML = `
    <div class="modal__overlay" data-close></div>
    <div class="modal__box">
      <button class="modal__close" data-close aria-label="Закрыть">×</button>
      <span class="label">Коммерческое предложение</span>
      <h2 id="kp-title">Получить КП</h2>
      <p class="modal__sub">Подберём оборудование под задачу и бюджет, рассчитаем поставку, монтаж и сервис.</p>
      <form class="form" id="kp-form" novalidate>
        <label class="field"><span>Оборудование</span><input name="item" id="kp-item" placeholder="Например: аппарат УЗИ экспертного класса"></label>
        <div class="form__row">
          <label class="field"><span>Имя *</span><input name="name" required autocomplete="name"></label>
          <label class="field"><span>Телефон *</span><input name="phone" type="tel" required autocomplete="tel"></label>
        </div>
        <label class="field"><span>Email</span><input name="email" type="email" autocomplete="email"></label>
        <label class="field"><span>Организация, город, комментарий</span><textarea name="comment"></textarea></label>
        <label class="consent"><input type="checkbox" name="agree" required><span>Согласен(а) на обработку персональных данных согласно <a href="privacy.html" target="_blank">политике</a></span></label>
        <button class="btn btn--accent btn--block" type="submit">Отправить запрос ${ARROW}</button>
      </form>
      <div class="form__ok">
        <h3>Почти готово</h3>
        <p>Открылось письмо с вашей заявкой — нажмите «Отправить» в почте.<br>Или позвоните: <a href="${SITE.phoneHref}" style="color:var(--accent)">${SITE.phone}</a></p>
      </div>
    </div>`;
  document.body.appendChild(wrap);

  const form = wrap.querySelector("#kp-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const d = new FormData(form);
    if (!d.get("name") || !d.get("phone") || !d.get("agree")) {
      form.querySelectorAll("[required]").forEach(i => {
        const bad = i.type === "checkbox" ? !i.checked : !i.value.trim();
        (i.closest(".field") || i.closest(".consent")).style.color = bad ? "#B4232A" : "";
        if (i.type !== "checkbox") i.style.borderColor = bad ? "#B4232A" : "";
      });
      return;
    }
    const body = [
      `Оборудование: ${d.get("item") || "—"}`,
      `Имя: ${d.get("name")}`,
      `Телефон: ${d.get("phone")}`,
      `Email: ${d.get("email") || "—"}`,
      `Комментарий: ${d.get("comment") || "—"}`,
    ].join("\n");
    const subject = `Запрос КП с сайта: ${d.get("item") || "оборудование"}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    form.classList.add("is-sent");
  });
}

function openKP(item) {
  const m = document.getElementById("kp-modal");
  const form = m.querySelector("#kp-form");
  form.classList.remove("is-sent");
  m.querySelector("#kp-item").value = item || "";
  m.classList.add("is-open");
  document.body.style.overflow = "hidden";
  setTimeout(() => m.querySelector(item ? "[name=name]" : "#kp-item").focus(), 50);
}
function closeKP() {
  document.getElementById("kp-modal").classList.remove("is-open");
  document.body.style.overflow = "";
}

function bindUI() {
  document.addEventListener("click", e => {
    const kp = e.target.closest("[data-kp]");
    if (kp) {
      e.preventDefault();
      document.body.classList.remove("menu-open");
      openKP(kp.dataset.kp);
      return;
    }
    if (e.target.closest("[data-close]")) closeKP();
    const burger = e.target.closest(".burger");
    if (burger) {
      const open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", open);
    }
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeKP(); });

  // плавное появление блоков при прокрутке
  const els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
  } else {
    els.forEach(el => el.classList.add("is-in"));
  }
}

function initLayout() {
  renderHeader();
  renderFooter();
  renderModal();
  bindUI();
}
