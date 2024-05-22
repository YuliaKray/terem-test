const submitButton = document.querySelector('button');
const formElement = document.querySelector('form');
const textElement = document.querySelector('p');


// Функция для ассинхронного отправления GET-запроса
function api() {
    return fetch(`/api/form`, {
        method: 'GET',
        headers: {
            'Content-Type': 'text/plain'
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
        .then((res) => {
            alert(res);
        })
        .catch((err) => {
            alert(err);
        })
};

// Функция отправки данных формы
function submitForm(event) {
    event.preventDefault();

    const data = new FormData(formElement);
    const values = Object.fromEntries(data.entries());

    api();
    textElement.textContent = JSON.stringify(values); 
};

// Слушатель события отправки данных формы
formElement.addEventListener('submit', submitForm);