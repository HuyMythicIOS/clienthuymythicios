const reveals = document.querySelectorAll(".reveal");

function onScrollReveal() {
  const height = window.innerHeight;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < height - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", onScrollReveal);
onScrollReveal();