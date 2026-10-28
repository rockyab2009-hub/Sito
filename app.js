(() => {
  const config = window.CASA_CONFIG || {};
  const site = document.querySelector("#site-link");
  const whatsapp = document.querySelector("#whatsapp-link");
  const setText = (id, value) => { if (value) document.getElementById(id).textContent = value; };
  setText("site-label", config.siteLabel);
  setText("site-caption", config.siteCaption);
  setText("contact-label", config.contactLabel);
  setText("contact-caption", config.contactCaption);
  if (config.siteUrl && config.siteUrl !== "https://example.com") site.href = config.siteUrl;
  else { site.href = "#"; site.addEventListener("click", event => event.preventDefault()); }
  if (config.whatsappNumber && !config.whatsappNumber.includes("000000")) {
    whatsapp.href = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(config.whatsappMessage || "")}`;
  } else { whatsapp.href = "#"; whatsapp.addEventListener("click", event => event.preventDefault()); }
})();

