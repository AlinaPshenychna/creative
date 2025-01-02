document.addEventListener("DOMContentLoaded", () => {
  const appContainer = document.querySelector(".container");
  appContainer.classList.add("start-animation");

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

const video = document.querySelector(".video");
const btn= document.querySelector(".sound-on");

btn.addEventListener(("click"), () =>{
video.muted=!video.muted;
btn.classList.toggle("sound-off");
});
