const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

openMenu.onclick = () => menuOverlay.classList.add("active");
closeMenu.onclick = () => menuOverlay.classList.remove("active");
menuOverlay.onclick = (e) => {
  if (e.target === menuOverlay) menuOverlay.classList.remove("active");
};

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

function onScroll() {
  const h = window.innerHeight;
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < h - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);