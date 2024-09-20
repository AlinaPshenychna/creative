

const gallery = document.querySelector('.gallery');
const arrowsRight = document.querySelectorAll('.right');
let count = 0;

const shiftGalleryRight = ()=> {
    count++
gallery.style.transform = `translateX(-${count*100}vw)`
// размер должен быть одинаковым тут и в цсс строка 14
console.log(count)
}

[...arrowsRight].forEach(el => el.addEventListener('click', () => {
    shiftGalleryRight()
}))
// [...arrowsRight] — который преобразует коллекцию (NodeList) в массив.
//  Это нужно для того, чтобы использовать методы массивов, такие как forEach.
// еl.addEventListener('click', () => { shiftGalleryRight() }) — для каждого элемента el (стрелки)
//  добавляется обработчик события, который реагирует на клик. 
//  Когда на стрелку кликают, вызывается функция shiftGalleryRight,
//   сдвигающая галерею вправо.

const arrowsLeft = document.querySelectorAll('.left');

const shiftGalleryLeft = ()=> {
    count--
gallery.style.transform = `translateX(-${count*100}vw)`
console.log(count)
}

[...arrowsLeft].forEach(el => el.addEventListener('click', () => {
    shiftGalleryLeft()
}))

