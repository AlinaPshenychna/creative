document.addEventListener("DOMContentLoaded", () => {
  addStartAnimation();
  createClickZones();
});

function addStartAnimation() {
  const appContainer = document.querySelector(".LM_content");
  appContainer.classList.add("animation");
}

function createClickZones() {
  const clickZones= document.querySelector(".click-zones");
  const logoClick= document.querySelector(".logo-click");
  const bgClick= document.querySelector(".bg-click");
  const ctaClick= document.querySelector(".cta-click");

  logoClick.addEventListener("click", () => {
    window.location.href = "https://google.com";
    console.log(logoClick);
  });
  bgClick.addEventListener("click", () => {
    window.location.href = "https://sinoptik.ua";
    console.log(bgClick);
  });
  ctaClick.addEventListener("click", () => {
    window.location.href = "https://rozetka.com.ua";
    console.log(ctaClick);
  });

  clickZones.appendChild(logoClick);
  clickZones.appendChild(bgClick);
  clickZones.appendChild(ctaClick);
};