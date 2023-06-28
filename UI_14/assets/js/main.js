const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const imgList = $$('.img-item img');
let imgSrcs = [];
const imgShow = $('.img-show');
const btnClose = $('.btn--close');
const btnNext = $('.btn--next');
const btnBack = $('.btn--back');

imgList.forEach((imgItem) => {
    imgItem.onclick = (e) => {
        if (!imgShow.classList.contains('show')) {
            imgShow.classList.add('show');
            imgShow.classList.remove('hidden');
            imgShow.classList.remove('hiddenImg');
        }
        imgShow.firstElementChild.src = e.target.src;
    };
    imgSrcs.push(imgItem.src);
});



btnClose.onclick = () => {
    if (imgShow.classList.contains('show')) {
        imgShow.classList.add('hiddenImg');
        imgShow.classList.remove('show');

        setTimeout(() => {
            imgShow.classList.add('hidden');
        }, 300);
    }
};


btnNext.onclick = () => {
    let id = imgSrcs.indexOf(imgShow.firstElementChild.src);
    if (id >= 7) id = 0;
    else id += 1;

    imgShow.firstElementChild.src = imgSrcs[id];
};
btnBack.onclick = () => {
    let id = imgSrcs.indexOf(imgShow.firstElementChild.src);
    if (id <= 0) id = 7;
    else id -= 1;

    imgShow.firstElementChild.src = imgSrcs[id];
};

