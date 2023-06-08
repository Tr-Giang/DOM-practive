const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() => {
    return {
        handleClick() {
            const navItems = $$('.navbar__item');
            const contentItems = $$('.content__item');
            const underLine = $('.under__line');

            navItems.forEach((navItem) => {

                //đặt giá trị ban đầu cho underline.
                if (navItem.classList.contains('active--nav')) underLine.style.width = `${navItem.clientWidth}px`;

                navItem.onclick = () => {
                    navItems.forEach((navItem) => {
                        if (navItem.classList.contains('active--nav')) navItem.classList.remove('active--nav');
                    });
                    navItem.classList.add('active--nav');
                    let id = navItem.dataset.id;

                    contentItems.forEach((contentItem) => {
                        if (contentItem.classList.contains('active--content')) contentItem.classList.remove('active--content');
                        if (contentItem.dataset.id === id) contentItem.classList.add('active--content');
                    });

                    underLine.style.width = `${navItem.clientWidth}px`;
                    underLine.style.left = `${navItem.offsetLeft}px`;
                };
            });

        },

        start() {
            this.handleClick();
        }
    };
})();

app.start();
