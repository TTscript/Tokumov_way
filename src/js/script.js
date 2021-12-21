/*jshint esversion: 6 */

import { tabsActive } from './tabs.js';
import './burger-menu.js';
import './validation.js';

tabsActive();

const greeceWhiteButton = document.querySelector('.places__white-button-greece');
const albaniaWhiteButton = document.querySelector('.places__white-button-albania');

const macedoniaWhiteButton = document.querySelector('.places__white-button-macedonia');

const montenegroWhiteButton = document.querySelector('.places__white-button-montenegro');

const croatiaWhiteButton = document.querySelector('.places__white-button-croatia');


const greeceListItem = document.querySelector('.reviews__list-item-greece');
const albaniaListItem = document.querySelector('.reviews__list-item-albania');
const macedoniaListItem = document.querySelector('.reviews__list-item-macedonia');
const montenegroListItem = document.querySelector('.reviews__list-item-montenegro');
const croatiaListItem = document.querySelector('.reviews__list-item-croatia');

greeceWhiteButton.addEventListener('click', () => {
  greeceListItem.click();
});

albaniaWhiteButton.addEventListener('click', () => {
  albaniaListItem.click();
});

macedoniaWhiteButton.addEventListener('click', () => {
  macedoniaListItem.click();
});

montenegroWhiteButton.addEventListener('click', () => {
 montenegroListItem.click();
});

croatiaWhiteButton.addEventListener('click', () => {
  croatiaListItem.click();
});
