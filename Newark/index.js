// TurnON sound on the video
const soundOn = document.querySelector(".sound-on");
const soundOff = document.querySelector(".sound-off");

soundOff.addEventListener("click", () => {
  soundOff.style.display = "none";
  soundOn.style.display = "block";
  video.muted = false;
});
// TurnOff sound on the video
soundOn.addEventListener("click", () => {
  soundOn.style.display = "none";
  soundOff.style.display = "block";
  video.muted = true;
});

const animation = document.querySelector(".animation");
const peopleGalleryAbsolute = document.querySelector(".people-gallery-absolute");
const largeWoman = document.querySelector(".large-woman");
const womanGallery = document.querySelector(".woman-gallery");
const video = document.querySelector(".video");
const screenshot = document.querySelector(".screenshot");

animation.addEventListener("animationend", (event) => {
  if (event.animationName === "slide") {
    animation.classList.add("back-animation");
    largeWoman.style.display = "none";
    womanGallery.style.display = "flex";
    womanGallery.style.width = "75%";
  } else if (event.animationName === "slideBack") {
    peopleGalleryAbsolute.classList.add("slider-wrapper");
    video.style.display = "none";
    screenshot.style.display = "block";
    soundOn.style.display = "none";
    soundOff.style.display = "none";
  }
});

// Listener for screenShot, possibility show video again
screenshot.addEventListener("click", () => {
  screenshot.style.display = "none";
  video.style.display = "block";
  video.play();
  if (video.muted) {
    soundOff.style.display = "block";
    soundOn.style.display = "none";
  } else {
    soundOn.style.display = "block";
    soundOff.style.display = "none";
  }
});

video.addEventListener("ended", () => {
  video.style.display = "none";
  screenshot.style.display = "block";
  soundOn.style.display = "none";
  soundOff.style.display = "none";
});
