function addStartAnimation() {
  const appContainer = document.querySelector(".container");
  appContainer.classList.add("start-animation");
}

document.addEventListener("DOMContentLoaded", () => {
  addStartAnimation();
  createSnowflake(30);
});

const snowContainer = document.querySelector(".snow-container");

function createSnowflake(number) {
  for (i = 0; i < number; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snow");

    // Случайное позиционирование и размеры снежинок
    snowflake.style.left = `${Math.random() * 100}vw`;

    const minSnowflakeDuration = 3;
    const maxSnowflakeDuration = 4;
    snowflake.style.animationDuration = `${
      Math.random() * minSnowflakeDuration + maxSnowflakeDuration
    }s`;

    const minSnowflakeSize = 2;
    const maxSnowflakeSize = 3;
    snowflake.style.width = snowflake.style.height = `${
      Math.random() * (maxSnowflakeSize - minSnowflakeSize) + minSnowflakeSize
    }px`;

    // Добавляем случайную задержку анимации для каждой снежинки
    const animDelay = 5;
    snowflake.style.animationDelay = `${Math.random() * animDelay}s`;

    snowContainer.appendChild(snowflake);
  }
}
