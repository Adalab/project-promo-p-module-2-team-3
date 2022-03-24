'use strict';

//DESIGN DROP-DOWN
//Constants
const designBox = document.querySelector('.js-designBox');
const colourDropDown = document.querySelector('.js-colour');

//Functions
designBox.addEventListener('click', () => {
  console.log('mierda');
  colourDropDown.classList.toggle('collapsed');
});

const designArrow = document.querySelector('.js-designArrow');

designArrow.addEventListener('click', () => {
  console.log('vale');
  designArrow.classList.toogle('rotate');
});

//FILL IN DROP-DOWN
console.log('>> Ready :)');

const fillTitle = document.querySelector('.js-fill-title');
const fillSection = document.querySelector('.js-fill-container');

fillTitle.addEventListener('click', () => {
  console.log('funciona?');
  fillSection.classList.toggle('collapsed');
});

const arrow = document.querySelector('.js-arrow');

arrow.addEventListener('click', () => {
  console.log('funciona:D');
  arrow.classList.toggle('rotate');
});
