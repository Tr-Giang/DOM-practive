const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const formNode = $('.form');
const inputNode = $('input[type="text"]');
const todosNode = $('.todos');
const data = localStorage.data !== undefined ? JSON.parse(localStorage.data) : [];

render(data);

function render(data) {
    todosNode.innerHTML = '';
    for (const id in data) {
        let todoNode = document.createElement('li');
        todoNode.dataset.id = id;
        todoNode.innerHTML = `<span>${data[id]}</span> <i class="fas fa-trash"></i>`;
        todosNode.appendChild(todoNode);
    }
}

function updateData(data) {
    localStorage.setItem('data', JSON.stringify(data));
}

formNode.onsubmit = function (e) {
    e.preventDefault();
    if (inputNode.value !== '') {
        data.push(inputNode.value);
        updateData(data);
        render(JSON.parse(localStorage.data));
        inputNode.value = '';
    }
};

todosNode.onclick = function (e) {
    if (e.target.classList.contains('fa-trash')) {
        data.splice(e.target.parentNode.dataset.id, 1);
        updateData(data);
        render(JSON.parse(localStorage.data));
    } else {
        e.target.classList.toggle('completed');
    }
}



