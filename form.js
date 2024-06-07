const submitButton = document.querySelector('button');
const formElement = document.querySelector('form');
const textElement = document.querySelector('p');


// Функция для ассинхронного отправления GET-запроса
function api(data) {

    let url = ''; // переменная для url запроса
    for (const key of Object.keys(data)) {
        url = url + `${key}=${data[key]}&`;
    };

    url = url.slice(0, url.length-1); // для удаление последнего & в строке 

    return fetch(`?${url}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'text/plain'
        },
    })
        .then((res) => {
            if (res.ok) {
                return res;
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
        .then((res) => {
            alert('Данные отправились');
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

    api(values);
    textElement.textContent = JSON.stringify(values); 
};

// Слушатель события отправки данных формы
formElement.addEventListener('submit', submitForm);