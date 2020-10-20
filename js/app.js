const cloud = document.querySelector('.cloud');
const thunder = document.querySelector('.thunder')
const thunder1 = document.querySelector('.thunder1')
const button = document.querySelector('button');

button.addEventListener('click', function () {
  cloud.classList.toggle('open');
  thunder.classList.toggle('open');
  thunder1.classList.toggle('open');
});