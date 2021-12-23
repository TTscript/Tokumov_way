/*jshint esversion: 6 */

const slider = document.querySelector('.reviews__list'),
menuItem = document.querySelectorAll('.reviews__list-item');

let isDragging = false,
startPos = 0,
currentTranslate = 0,
prevTranslate = 0,
animationID = 0,
currentIndex = 0

console.log(slider);


document.querySelector('.reviews__img').addEventListener('dragstart', (e) => {
e.preventDefault();
})
menuItem.forEach((slide, index) => {

//Touch events
slide.addEventListener('touchstart', touchStart(index));
slide.addEventListener('touchend', touchEnd);
slide.addEventListener('touchmove', touchMove);


//Mouse events
slide.addEventListener('mousedown', touchStart(index));
slide.addEventListener('mouseup', touchEnd);
slide.addEventListener('mouseleave', touchEnd);
slide.addEventListener('mousemove', touchMove);
})

function touchStart(index) {
return function(event) {
  currentIndex = index;
  startPos = getPositionX(event);
  isDragging = true;
  animationID = requestAnimationFrame(animation);
}
}

function touchEnd() {
isDragging = false;
}

function touchMove(event) {
if (isDragging) {
    const currentPostiton = getPositionX(event);
    currentTranslate = prevTranslate + currentPostiton - startPos;
}
}

function getPositionX(event) {
return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation() {
setSliderPosition();
if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
slider.style.transform = `translateX(${currentTranslate}px)`;

}
