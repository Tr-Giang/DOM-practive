const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() => {
    const inputNode = $('#search');
    const btnNode = $('.btn');
    return {
        handleClick() {
            btnNode.onclick = (e) => {
                e.preventDefault();
                inputNode.classList.toggle('open');
                inputNode.focus();

            };

        }

        ,
        init() {
            this.handleClick();
        }
    };
})();

app.init();


