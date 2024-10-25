const swiperElemAnim = document.querySelector(".animation");
const largeWoman = document.querySelector(".large-woman");
const womanGallery = document.querySelector(".woman-gallery");
const video = document.querySelector(".video");
const screenshot = document.querySelector(".screenshot");
const soundOn = document.querySelector(".soundOn");
const soundOff = document.querySelector(".soundOff");

// Устанавливаем параметры анимации
swiperElemAnim.style.animation = "slide 8.5s ease-in-out forwards";
swiperElemAnim.style.animationDelay = "1.5s";

//ВКЛ ВЫКЛ звук на видео
soundOff.addEventListener("click", () => {
  soundOff.style.display = "none";
  soundOn.style.display = "block";
  // Убираем атрибут 'muted', чтобы включить звук
  video.muted = false;
});
//ВЫКЛ звук на видео
soundOn.addEventListener("click", () => {
  soundOn.style.display = "none";
  soundOff.style.display = "block";
  video.muted = true;
});

//// Обработка завершения анимации
// Функция, которая будет вызвана после завершения анимации
swiperElemAnim.addEventListener("animationend", (event) => {
  if (event.animationName === "slide") {
    // После завершения анимации "slide", запускаем "slideBack"
    swiperElemAnim.style.animation = "slideBack 8.5s ease-in-out forwards";
    largeWoman.style.display = "none";
    womanGallery.style.display = "flex";
    womanGallery.style.width = "60%";

    console.log("Началась анимация slideBack.");
  } else if (event.animationName === "slideBack") {
    // Скроем видео и покажем скриншот только после завершения "slideBack"
    video.style.display = "none";
    screenshot.style.display = "block";
    soundOn.style.display = "none";
    soundOff.style.display = "none";

    console.log(
      "Анимация slideBack завершена. Видео скрыто, показан скриншот."
    );

    // Инициализация свайпера после завершения анимации
    const swiper = new Swiper(swiperElem);
    swiper._element = document.querySelector(".people-gallery-absolute");
    swiper._itemWidth = swiper._element.children[0].offsetWidth;
    swiper._maxTranslate = 0;
    swiper._applyTranslate();
  }
});

// Обработчик клика на скриншот, чтобы снова показать видео
screenshot.addEventListener("click", () => {
  screenshot.style.display = "none"; // Скрываем скриншот
  video.style.display = "block"; // Показываем видео
  video.play();
  // Показать соответствующую кнопку звука в зависимости от состояния 'muted'
  if (video.muted) {
    soundOff.style.display = "block";
    soundOn.style.display = "none";
  } else {
    soundOn.style.display = "block";
    soundOff.style.display = "none";
  }
});

video.addEventListener("ended", () => {
    video.style.display = "none"; // Скрываем видео
    screenshot.style.display = "block"; // Показываем скриншот
    soundOn.style.display = "none"; // Скрываем кнопки звука
    soundOff.style.display = "none";
  });


class Swiper extends EventTarget {
  constructor(element, options = { tresholdX: 10 }) {
    super();
    console.log("Инициализация свайпера");
    this._element = element;
    this._options = options;
    this._startX = 0;
    this._currentTranslate = 0;
    this._itemWidth = element.children[0].offsetWidth; // Используем ширину первого элемента
    this._maxTranslate = -600; // Максимальный сдвиг
    this._minTranslate = 540; // Уменьшаем сдвиг вправо на половину ширины элемента
    // Устанавливаем минимальный сдвиг, равный ширине элемента

    console.log(
      `Ширина элемента: ${this._itemWidth}, Максимальный сдвиг: ${this._maxTranslate}`
    );

    this._element.addEventListener(
      "touchstart",
      this._handleTouchStart.bind(this),
      false
    );
    this._element.addEventListener(
      "touchmove",
      this._handleTouchMove.bind(this),
      false
    );
    this._element.addEventListener(
      "touchend",
      this._handleTouchEnd.bind(this),
      false
    );

    this.addEventListener("swipeLeft", this._swipeLeft.bind(this));
    this.addEventListener("swipeRight", this._swipeRight.bind(this));
  }

  _handleTouchStart(event) {
    this._startX = event.changedTouches[0].clientX;
  }

  _handleTouchMove(event) {
    // Предотвращаем прокрутку страницы во время свайпа
    event.preventDefault();
  }

  _handleTouchEnd(event) {
    const direction = this._getSwipeDirection(event.changedTouches[0].clientX);
    if (direction.left) {
      this.dispatchEvent(new CustomEvent("swipeLeft"));
    }
    if (direction.right) {
      this.dispatchEvent(new CustomEvent("swipeRight"));
    }
  }

  _getSwipeDirection(clientX) {
    const currX = clientX - this._startX;
    return {
      left: Math.abs(currX) > this._options.tresholdX && currX < 0,
      right: Math.abs(currX) > this._options.tresholdX && currX > 0,
    };
  }

  _swipeLeft() {
    console.log("Свайп влево");
    const shiftAmount = this._itemWidth; // Стандартный сдвиг в ширину одного элемента
    if (this._currentTranslate > this._maxTranslate) {
      this._currentTranslate -= shiftAmount; // Применяем сдвиг в один элемент
      if (this._currentTranslate < this._maxTranslate) {
        this._currentTranslate = this._maxTranslate; // Ограничиваем максимум
      }
      this._applyTranslate();
      console.log(
        `Текущий сдвиг после свайпа влево: ${this._currentTranslate}`
      );
    } else {
      console.log("Достигли максимального сдвига влево");
    }
  }

  _swipeRight() {
    console.log("Свайп вправо");
    const shiftAmount = this._itemWidth * 1; // Увеличиваем сдвиг вправо в два раза
    if (this._currentTranslate < this._minTranslate) {
      this._currentTranslate += shiftAmount; // Применяем сдвиг в два элемента
      if (this._currentTranslate > this._minTranslate) {
        this._currentTranslate = this._minTranslate; // Ограничиваем минимум
      }
      this._applyTranslate();
      console.log(
        `Текущий сдвиг после свайпа вправо: ${this._currentTranslate}`
      );
    } else {
      console.log("Достигли максимального сдвига вправо");
    }
  }

  _applyTranslate() {
    this._element.style.transform = `translateX(${this._currentTranslate}px)`;
    console.log(`Применённый сдвиг: ${this._currentTranslate}px`);
  }
}

// Сразу инициализируем свайпер
const swiperElem = document.querySelector(".people-gallery-absolute");
const swiper = new Swiper(swiperElem);