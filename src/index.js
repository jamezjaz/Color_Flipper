/* eslint-disable no-unused-vars, no-use-before-define, arrow-body-style */

import nav from './nav';

const colors = ['red', 'blue', 'green', 'purple', 'yellow',
  '#F15025', 'indigo', 'rgba(255, 133, 200)', 'rgb(255,215,0)',
  'rgb(255,165,0)', '#808000', '#000000', '#FFFFFF', '#FF00FF'];

const main = (() => {
  const button = document.getElementById('btn');
  const color = document.querySelector('.color');
  button.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
  });
})();

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};

nav();