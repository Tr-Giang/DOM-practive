const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const openNode = $('.open-modal');
const modalNode = $('.modal');
const btnClose = $('.modal__footer button');
const iconClose = $('.modal__header i');
const modalInner = $('.modal__inner');

function handleModalClick() {
    modalNode.classList.toggle('hide');
}

openNode.onclick = function () {
    handleModalClick();
};
btnClose.onclick = function () {
    handleModalClick();

};
iconClose.onclick = function () {
    handleModalClick();

};
modalNode.onclick = function (e) {
    if (e.target == modalNode) handleModalClick();
};
