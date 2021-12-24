/*jshint esversion: 6 */

const burgerClosed = document.querySelector('.burger-closed');
const burgerOpen = document.querySelector('.burger-open');
const burgerOpenMenu = document.querySelector('.burger-open__menu');
const burgerLines = Array.from(document.querySelectorAll('.burger-closed__line'));
const burgerTop = document.querySelector('.burger-closed__top-line');
const burgerBottom = document.querySelector('.burger-closed__bottom-line');
const burgerMiddle = document.querySelector('.burger-closed__middle-line');

burgerOpen.classList.add('burger-open__action');

burgerClosed.addEventListener('click', () => {
  burgerOpen.classList.remove('burger-open__action');
  burgerTop.classList.add('burger-closed__top-line--transform');
  burgerBottom.classList.add('burger-closed__bottom-line--transform');
  burgerMiddle.classList.add('visually-hidden');
});

burgerOpenMenu.addEventListener('click', () => {
  burgerOpen.classList.add('burger-open__action');
  burgerTop.classList.remove('burger-closed__top-line--transform');
  burgerBottom.classList.remove('burger-closed__bottom-line--transform');
  burgerMiddle.classList.remove('visually-hidden');
});
