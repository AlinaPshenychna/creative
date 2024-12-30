document.addEventListener("DOMContentLoaded", () => {
  const appContainer = document.querySelector(".container");
  appContainer.classList.add("start-animation");
});

const bananaOpen = document.querySelector(".banana-open");
const bananaClose = document.querySelector(".banana-close");

function blinkBanana() {
  bananaOpen.style.opacity = 0;
  bananaClose.style.opacity = 1;
  setTimeout(() => {
    bananaOpen.style.opacity = 1;
    bananaClose.style.opacity = 0;
  }, 300);
}
setInterval(blinkBanana, 1500);

const coffeeOpen = document.querySelector(".coffee-open");
const coffeeClose = document.querySelector(".coffee-close");

function blink() {
  coffeeOpen.style.opacity = 0;
  coffeeClose.style.opacity = 1;
  setTimeout(() => {
    coffeeOpen.style.opacity = 1;
    coffeeClose.style.opacity = 0;
  }, 300);
}
setInterval(blink, 1500);

const soundOn = document.querySelector(".sound-on");
const soundOff = document.querySelector(".sound-off");
const muteButton = document.querySelector(".mute-button");
const video = document.querySelector(".video");

muteButton.addEventListener("click", () => {
  if (video.muted) {
    soundOff.classList.add("hidden");
    soundOn.classList.remove("hidden");
  } else {
    soundOn.classList.add("hidden");
    soundOff.classList.remove("hidden");
  }
  video.muted = !video.muted;
});

document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".video");
  const screenshot = document.querySelector(".screenshot");

  video.addEventListener("ended", () => {
    video.classList.add("hidden");
    screenshot.classList.remove("hidden");
  });

  screenshot.addEventListener("click", () => {
    screenshot.classList.add("hidden");
    video.classList.remove("hidden");
    video.play();
  });
});
