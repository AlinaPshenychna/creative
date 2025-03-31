document.addEventListener("DOMContentLoaded", () => {
  addStartAnimation();
  appearDots();
  createClickZones();
});

function addStartAnimation() {
  const appContainer = document.querySelector(".LM_content");
  appContainer.classList.add("animation");
}
function appearDots() {
  const dots = document.querySelectorAll(".dots img");
  const reversedDots = Array.from(dots).reverse();
  reversedDots.forEach((dot, index) => {
    setTimeout(() => {
      dot.style.animation = "appear-dots 1s ease-in 1s forwards";
    }, index * 200);
  });
}

function createClickZones() {
  const clickZones= document.querySelector(".click-zones");

  const logoClick = document.createElement("div");
  logoClick.classList.add("logo-click");

  const bgClick = document.createElement("div");
  bgClick.classList.add("bg-click");

  const ctaClick = document.createElement("div");
  ctaClick.classList.add("cta-click");


  logoClick.addEventListener("click", () => {
    window.location.href = "https://google.com";
  });
  bgClick.addEventListener("click", () => {
    window.location.href = "https://sinoptik.ua";
  });
  ctaClick.addEventListener("click", () => {
    window.location.href = "https://rozetka.com.ua";
  });

  clickZones.appendChild(logoClick);
  clickZones.appendChild(bgClick);
  clickZones.appendChild(ctaClick);
};