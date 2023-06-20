const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const app = (() => {
    const inputNode = $('.input-search');


    const city = $('.city');
    const country = $('.country');
    const time = $('.time');
    const temperature = $('.temperature .value');
    const weather = $('.short-desc');
    const visibility = $('.visibility span');
    const wind = $('.wind span');
    const cloud = $('.cloud span');
    let input;
    let date = new Date();


    async function renderView(input = 'Hà Nội') {
        if (input === '') input = 'Hà Nội';
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;

        try {
            let response = await fetch(API);
            let data = await response.json();

            city.innerHTML = data.name || input;
            country.innerHTML = data.sys.country;
            time.innerHTML = date.toLocaleString();
            temperature.innerHTML = Math.round(data.main.temp);
            weather.innerHTML = data.weather[0].main;
            visibility.innerHTML = `${data.visibility} (m)`;
            wind.innerHTML = `${data.wind.speed} (m/s)`;
            cloud.innerHTML = `${data.clouds.all} (%)`;

            if (data.main.temp >= 18) {
                $('body').classList.add('hot');
                $('body').classList.remove('cold');

            }
            else {
                $('body').classList.remove('hot');
                $('body').classList.add('cold');
            }
        } catch (err) {
            alert('Error: ' + err.message);
        }
    }
    renderView();

    inputNode.onchange = (e) => {
        input = inputNode.value;
        renderView(input);
    };



})();
