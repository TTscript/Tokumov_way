/*jshint esversion: 6 */

const tel = document.querySelector('#tel');
const email = document.querySelector('#email');
const shape = document.querySelector('#shape');

console.log(shape);

shape.addEventListener('submit', (e) => {
  e.preventDefault();
});
