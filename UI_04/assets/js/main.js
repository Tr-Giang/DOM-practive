const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const controlPrev = $('.prev');
const controlNext = $('.next');
const imageMain = $('.img-wrap img');
const boxImgs = $$('.list-img div');
const imgs = $$('.list-img img');

function checkImage(id) {
    let imgSelect = Array.from(imgs).find((img) => img.dataset.id == id);
    imageMain.src = imgSelect.src;
    imgs.forEach(img => {
        if (img.dataset.id !== id) {
            if (img.parentNode.classList.contains('active')) img.parentNode.classList.remove('active');
        }
    });
    imgSelect.parentNode.classList.add('active');
}

let id = Number(imageMain.dataset.id);

checkImage(id);
controlNext.onclick = function nextImg() {
    id += 1;
    if (id > 9) id = 1;
    checkImage(id);
};

controlPrev.onclick = function () {
    id -= 1;
    if (id < 1) id = 9;
    checkImage(id);
};

setInterval(() => {
    controlNext.click();
}, 2000);
