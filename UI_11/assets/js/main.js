const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const successBtn = $('.success');
const warningBtn = $('.warning');
const errorBtn = $('.error');
const buttons = $$('.control button');
const toasts = $('#toasts');
const icons = {
    success: 'fa-circle-check',
    warning: 'fa-circle-exclamation',
    error: 'fa-triangle-exclamation'
};

buttons.forEach(button => {
    button.onclick = () => {
        let type;
        if (button.classList.contains('success')) type = 'success';
        else if (button.classList.contains('warning')) type = 'warning';
        else if (button.classList.contains('error')) type = 'error';
        let toast = document.createElement('div');

        createElement(type, toast);

        setTimeout(() => {
            toast.style.animation = 'hide_slide 1s ease forwards';
            setTimeout(() => {
                toast.remove();
            }, 1500);
        }, 4500);
    };
});


function createElement(type, toast) {
    toast.classList.add('toast', type);
    let html = `<i class="fa-solid ${icons[type]}"></i> <span class="msg">This is a ${type} message</span> <span class="countdown"></span>`;
    toast.innerHTML = html;
    toasts.appendChild(toast);
}
