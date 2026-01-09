/* MENU */
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

openMenu.onclick = () => menuOverlay.classList.add("active");
closeMenu.onclick = () => menuOverlay.classList.remove("active");

/* REVEAL + COUNTER */
const reveals = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function runCounter(counter) {
  const target = Number(counter.dataset.target);
  let current = 0;
  const duration = 1200; // ms
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    current = Math.floor(progress * target);

    if (target >= 1000000) {
      counter.textContent = Math.floor(current / 1000000) + " triệu+";
    } else if (target >= 1000) {
      counter.textContent = Math.floor(current / 1000) + " nghìn+";
    } else {
      counter.textContent = current + "+";
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
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
    counters.forEach(runCounter);
  }
}

window.addEventListener("scroll", onScroll);
onScroll();