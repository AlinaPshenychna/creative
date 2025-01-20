function addStartAnimation() {
  const appContainer = document.querySelector(".container");
  appContainer.classList.add("start-animation");
}

document.addEventListener("DOMContentLoaded", () => {
  addStartAnimation();
});

const snowContainer = document.querySelector(".snow-container");

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snow");

  // Случайное позиционирование и размеры снежинок
  snowflake.style.left = `${Math.random() * 100}vw`;

  const minSnowflakeDuration = 3;
  const maxSnowflakeDuration = 4;
  snowflake.style.animationDuration = `${
    Math.random() * minSnowflakeDuration + maxSnowflakeDuration}s`;

  const minSnowflakeSize = 2;
  const maxSnowflakeSize = 3;
  snowflake.style.width = snowflake.style.height = `${
    Math.random() * (maxSnowflakeSize - minSnowflakeSize) + minSnowflakeSize }px`;

  snowContainer.appendChild(snowflake);

  // Удаляем снежинку после завершения анимации
  const timeRemoveSnowflake = 10000;
  setTimeout(() => {
    snowflake.remove();
  }, timeRemoveSnowflake);
}

// Создаем снежинку каждые 10 мс
const timeCreateSnowflake = 10;
setInterval(createSnowflake, timeCreateSnowflake);
