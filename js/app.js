(function () {
  "use strict";
  const cfg = window.IMPERIO || {};
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");
  const header = document.getElementById("header");
  function closeMenu() {
    nav?.classList.remove("open");
    toggle?.classList.remove("active");
    toggle?.setAttribute("aria-expanded", "false");
  }
  toggle?.addEventListener("click", () => {
    const open = nav?.classList.toggle("open");
    toggle.classList.toggle("active", !!open);
    toggle.setAttribute("aria-expanded", String(!!open));
  });
  nav?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
  window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 10);
  }, { passive: true });
  document.querySelectorAll("[data-wa]").forEach((el) => {
    const key = el.getAttribute("data-wa");
    if (key === "create") el.href = cfg.waCreate || cfg.waBase;
    if (key === "kit") el.href = cfg.waKit || cfg.waBase;
    if (key === "base") el.href = cfg.waBase;
  });
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("visible"));
  }
})();
