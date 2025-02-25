document.addEventListener("DOMContentLoaded", () => {
  const lmContent = document.querySelector(".LM_content");
  lmContent.classList.add("animation");

  const video = document.querySelector(".video");
  const screenshot = document.querySelector(".screenshot");
  const btn = document.querySelector(".sound-on");

  video.addEventListener("ended", () => {
    video.classList.add("hidden");
    screenshot.classList.remove("hidden");
  });

  screenshot.addEventListener("click", () => {
    screenshot.classList.add("hidden");
    video.classList.remove("hidden");
    video.play();
  });
  btn.addEventListener("click", () => {
    video.muted = !video.muted;
    btn.classList.toggle("sound-off");
  });
});
