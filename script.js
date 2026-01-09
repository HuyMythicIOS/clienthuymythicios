/* MENU */
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

openMenu.onclick = () => menuOverlay.classList.add("active");
closeMenu.onclick = () => menuOverlay.classList.remove("active");

/* SCROLL + COUNTER */
const reveals = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function formatNumber(value) {
  if (value >= 1_000_000) {
    return Math.floor(value / 1_000_000) + " triệu+";
  }
  if (value >= 1_000) {
    return Math.floor(value / 1_000) + " nghìn+";
  }
  return value + "+";
}

function animateCounters() {
  counters.forEach(counter => {
    const target = Number(counter.dataset.target);
    let current = 0;
    const step = Math.max(1, Math.floor(target / 80));

    function update() {
      current += step;
      if (current >= target) {
        counter.textContent = formatNumber(target);
      } else {
        counter.textContent = formatNumber(current);
        requestAnimationFrame(update);
      }
    }
    update();
  });
}

function onScroll() {
  const h = window.innerHeight;

  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < h - 80) {
      el.classList.add("active");
    }
  });

  const stats = document.querySelector(".stats-section");
  if (
    stats &&
    !counterStarted &&
    stats.getBoundingClientRect().top < h - 120
  ) {
    counterStarted = true;
    animateCounters();
  }
}

window.addEventListener("scroll", onScroll);
onScroll();