const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const ulNode = $('.content');
const inputNode = $('.content input');
const clearAll = $('.btn-removeAll');
let data = ['react', 'vue.js'];

//render ra view
function render(data) {
    data.forEach((item, id) => {
        const liNode = document.createElement('li');
        liNode.innerHTML = `<span>${item}</span> <i class="fa-solid fa-xmark"></i>`;
        ulNode.appendChild(liNode);
    });

}
render(data);


// Submit bang Enter
inputNode.onkeydown = function (e) {
    if (e.key == 'Enter') {
        data.push(e.target.value);
        render([e.target.value]);
        e.target.value = '';
    }
};


//Xóa hết tất cả.
clearAll.onclick = function () {
    let liNodes = $$('.content li');
    liNodes.forEach(liNode => {
        liNode.remove();
    });
    data = [];
    render(data);
};


//Xóa từng Item
ulNode.onclick = (e) => {
    if (e.target.classList.contains('fa-xmark')) {

        let id = data.indexOf(e.target.parentNode.querySelector('span').innerText);

        data.splice(id, 1);
        e.target.parentNode.remove();
        console.log(data);
    }
};



