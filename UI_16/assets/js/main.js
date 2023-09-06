const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const banner = $('.banner');
const title = $('.title');
const person = $('.person');
const heading = $('.heading');
banner.firstElementChild.classList.add('show-slider');
setTimeout(() => {
    banner.lastElementChild.classList.add('show-slider');
}, 300);

window.onscroll = () => {

    let locationBanner = banner.offsetTop - window.pageYOffset;
    let locationTitle = title.offsetTop - window.pageYOffset;
    let locationPerson = person.offsetTop - window.pageYOffset;
    let heightWindow = window.innerHeight;

    if (locationBanner > -heightWindow / 2 && locationBanner < heightWindow / 2) {
        if (!banner.firstElementChild.classList.contains('show-slider')) {
            banner.firstElementChild.classList.add('show-slider');
            setTimeout(() => {
                banner.lastElementChild.classList.add('show-slider');
            }, 300);
        }
    }
    else {
        banner.firstElementChild.classList.remove('show-slider');
        banner.lastElementChild.classList.remove('show-slider');
    }
    if (locationTitle > -heightWindow / 2 && locationTitle < heightWindow / 2) {
        title.firstElementChild.classList.add('show-slider');
        title.lastElementChild.classList.add('show-slider');
    }
    else {
        title.firstElementChild.classList.remove('show-slider');
        title.lastElementChild.classList.remove('show-slider');
    }

    if (locationPerson > -heightWindow / 2 && locationPerson < heightWindow / 2) {
        $$('.person__item').forEach(element => {
            element.classList.add('show-scale');
        });
    }
    else {
        $$('.person__item').forEach(element => {
            element.classList.remove('show-scale');
        });
    }
};
