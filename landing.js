(() => {
  const cfg = window.CASA_CONFIG || {};
  const phone = (cfg.whatsappNumber || "").replace(/\D/g, "");
  const message = encodeURIComponent(cfg.whatsappMessage || "Ciao Anna, vorrei informazioni per una consulenza.");
  document.querySelectorAll("[data-whatsapp]").forEach(link => {
    if (phone && !phone.includes("000000")) link.href = `https://wa.me/${phone}?text=${message}`;
    else link.href = "#contatti";
  });
})();

