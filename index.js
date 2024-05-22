const firstButton = document.querySelector('.btn-warning');
const header = document.querySelector('.header');

const secondButton = document.querySelector('.btn-success');
const main = document.querySelector('.main');
const secondBox = document.querySelector('.main__box_dashed');


const popupButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

// Функция для нажатия кнопки "Кнопка 1", чтобы скрывался блок с заголовком
function handleClickFirstButton() {
    header.classList.toggle('invisible');
};

// Функция для нажатия кнопки "Кнопка 2", чтобы средний блок во втором ряду менялся местами с левым блоком
function handleClickSecondButton() {
    secondBox.classList.toggle('order');
};

// Функция для закрытия попапа
function closePopup() {
    popup.classList.toggle('invisible');
};


// Слушатели событий для кнопок
firstButton.addEventListener('click', handleClickFirstButton);

secondButton.addEventListener('click', handleClickSecondButton);

popupButton.addEventListener('click', closePopup);