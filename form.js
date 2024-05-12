const submitButton = document.querySelector('button');
const formElement = document.querySelector('form');
const textElement = document.querySelector('p');

// Функция для ассинхронного отправления GET-запроса
function api() {
    return fetch(`/api/form`, {
        method: 'GET',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                return Promise.reject(`Ошибка: ${res.status}`)
            }
        })
        .then((res) => {
                alert(res)
        })
        .catch((err) => {
            alert(err)
        })
}

// Функция отправки данных формы
function submitForm(event) {
    event.preventDefault();

    const data = {
        list1: formElement.querySelector('[name="list-1"]').value,
        list2: formElement.querySelector('[name="list-2"]').value,
        list3: formElement.querySelector('[name="list-3"]').value,
        list4: formElement.querySelector('[name="list-4"]').value,
        list5: formElement.querySelector('[name="list-5"]').value,
        name: formElement.querySelector('[name="name"]').value,
        description: formElement.querySelector('[name="description"]').value
    };
    console.log(data);
    api();
    textElement.textContent = JSON.stringify(data);
}

// Слушатель события отправки данных формы
formElement.addEventListener('submit', submitForm)