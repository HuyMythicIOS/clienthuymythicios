const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

openMenu.onclick = () => {
  menuOverlay.classList.add("active");
};

closeMenu.onclick = () => {
  menuOverlay.classList.remove("active");
};

menuOverlay.onclick = (e) => {
  if (e.target === menuOverlay) {
    menuOverlay.classList.remove("active");
  }
};