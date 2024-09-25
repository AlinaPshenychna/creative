const galleryPic = document.querySelector(".gallery-pic");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

// Общее количество изображений
const totalImages = galleryPic.querySelectorAll('img').length;

let count = 0;

// Функция для обновления смещения галереи
function updateGalleryPosition() {
    galleryPic.style.transform = `translateX(-${100 / totalImages * count}%)`;
    console.log(count);
}

leftArrow.addEventListener("click", (leftClick = () => {
    if (count > 0) {
        count--;
    } else {
        count = totalImages - 1; // Если на первом изображении, переходим на последнее
    }
    updateGalleryPosition();
  })
);

rightArrow.addEventListener("click", () => {
    if (count < totalImages - 1) {
        count++;
    } else {
        count = 0; // Если на последнем изображении, переходим на первое
    }
    updateGalleryPosition();
  });
