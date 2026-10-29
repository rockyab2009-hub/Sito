(() => {
  const cfg = window.CASA_CONFIG || {};
  const phone = (cfg.whatsappNumber || "").replace(/\D/g, "");
  const message = encodeURIComponent(cfg.whatsappMessage || "Ciao Anna, vorrei informazioni per una consulenza.");
  document.querySelectorAll("[data-whatsapp]").forEach(link => {
    if (phone && !phone.includes("000000")) link.href = `https://wa.me/${phone}?text=${message}`;
    else link.href = "#contatti";
  });
})();

(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) return;

  const groups = [
    ".hero-copy > *",
    ".about-copy > *",
    ".combined .section-index, .combined .section-main > *",
    ".combined .steps article",
    ".contact > *"
  ];
  const elements = [...document.querySelectorAll(groups.join(","))];
  elements.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.transitionDelay = `${(index % 4) * 70}ms`;
  });
  document.body.classList.add("js-reveal");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  elements.forEach(element => observer.observe(element));
})();

