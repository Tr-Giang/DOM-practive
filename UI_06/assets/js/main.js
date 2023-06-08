const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const message = $('.message');
const listNode = $('.list');
const keyNode = $('.key');
const locationNode = $('.location');
const whichNode = $('.which');
const codeNode = $('.code');
console.log(message.classList);

window.onkeydown = (e) => {
    console.log(message.classList.contains('show__key__code'));
    if (!message.classList.contains('show__key__code')) {
        message.classList.add('show__key__code');
        listNode.classList.add('show');
    }
    console.log(e);
    message.innerText = e.keyCode;
    keyNode.innerText = e.key;
    locationNode.innerText = e.location;
    whichNode.innerText = e.which;
    codeNode.innerText = e.code;
};
