const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() => {
    const rangeNode = $('.range');
    const processNode = $('.process');
    const appNode = $('#app');
    return {
        handleHover() {


            processNode.onmousemove = function (e) {
                let widthRange = e.clientX - processNode.offsetLeft;
                let widthProcess = processNode.offsetWidth;
                let processValue = Math.round((widthRange / widthProcess) * 100);
                let bgcColor = 255 - Math.round(255 * (processValue / 100));

                rangeNode.style.width = `${widthRange}px`;
                rangeNode.innerText = `${processValue}%`;
                appNode.style.backgroundColor = `rgb(${bgcColor}, ${bgcColor}, ${bgcColor} )`;
            };
        }

        ,
        init() {
            this.handleHover();
        }
    };
})();

app.init();


