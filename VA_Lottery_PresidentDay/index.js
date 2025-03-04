function addStartAnimation() {
  const appContainer = document.querySelector(".LM_content");
  appContainer.classList.add("animation");
}

document.addEventListener("DOMContentLoaded", () => {
  addStartAnimation();
  createDollarFlake(15);
});

const dollarContainer = document.querySelector(".dollar-container");

const dollarImages = [
  "https://i.loopme.me/html/TwoTango_VA_Lottery_President_Day_US_Jan25_VersionB/assets/project_images/DOLLAR_LIGHT.png",
  "https://i.loopme.me/html/TwoTango_VA_Lottery_President_Day_US_Jan25_VersionB/assets/project_images/DOLLARY_MEDIUM.png",
  "https://i.loopme.me/html/TwoTango_VA_Lottery_President_Day_US_Jan25_VersionB/assets/project_images/DOLLAR_DARK.png",
];

function createDollarFlake(number) {
  for (let i = 0; i < number; i++) {
    const dollarflake = document.createElement("div");
    dollarflake.classList.add("dollar");

    const randomImage =
      dollarImages[Math.floor(Math.random() * dollarImages.length)];
    dollarflake.style.backgroundImage = `url(${randomImage})`;

    dollarflake.style.left = `${Math.random() * 100}vw`;

    const minDollarflakeDuration = 8;
    const maxDollarflakeDuration = 15;
    dollarflake.style.animationDuration = `${
      Math.random() * (maxDollarflakeDuration - minDollarflakeDuration) +
      minDollarflakeDuration
    }s`;

    const minDollarflakeSize = 50;
    const maxDollarflakeSize = 100;
    const size =
      Math.random() * (maxDollarflakeSize - minDollarflakeSize) +
      minDollarflakeSize;
    dollarflake.style.width = `${size}px`;
    dollarflake.style.height = `${size}px`;

    dollarflake.style.animationDelay = `${Math.random() * 5}s`;
    dollarContainer.appendChild(dollarflake);
  }
}
