var navMain = document.querySelector('.nav');
var navToggle = document.querySelector('.nav__toggle');
var form = document.querySelector('.form-main');
var input = form.querySelector('.input__text');

navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
});

input.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!input.value) {
    evt.preventDefault();
    input.classList.add('input__text--error');
    console.log('Нужно заполнить все поля');
  }
})
