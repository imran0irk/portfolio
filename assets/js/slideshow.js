(() => {
  function init(el) {
    const imgs = Array.from(el.querySelectorAll("img"));
    if (imgs.length <= 1) return;

    let i = imgs.findIndex(img => img.classList.contains("active"));
    if (i < 0) { i = 0; imgs[0].classList.add("active"); }

    const interval = Number(el.dataset.interval) || 3500;

    setInterval(() => {
      imgs[i].classList.remove("active");
      i = (i + 1) % imgs.length;
      imgs[i].classList.add("active");
    }, interval);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".slideshow").forEach(init);
  });
})();
