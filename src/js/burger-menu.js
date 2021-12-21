/*jshint esversion: 6 */

const burgerClosed = document.querySelector('.burger-closed');
const burgerOpen = document.querySelector('.burger-open');
const burgerOpenMenu = document.querySelector('.burger-open__menu');

burgerOpen.classList.add('burger-open__action');

burgerClosed.addEventListener('click', () => {
  burgerOpen.classList.remove('burger-open__action');
});

burgerOpenMenu.addEventListener('click', () => {
  burgerOpen.classList.add('burger-open__action');
});
