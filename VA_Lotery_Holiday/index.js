document.addEventListener("DOMContentLoaded", () => {
    const appContainer = document.querySelector(".container");
    appContainer.classList.add("start-animation");
    });



const snowContainer = document.querySelector(".snow-container");

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snow");

  // Случайное позиционирование и размеры снежинок
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
  snowflake.style.width = snowflake.style.height = `${Math.random() * 2 + 3}px`;

  snowContainer.appendChild(snowflake);

  // Удаляем снежинку после завершения анимации
  setTimeout(() => {
    snowflake.remove();
  }, 10000);
}

setInterval(createSnowflake, 50); // Создаем снежинку каждые 300 мс