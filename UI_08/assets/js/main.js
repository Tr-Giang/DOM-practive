const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$('#email').onsubmit = function (e) {
    e.preventDefault();
};

const app = (() => {
    const formNode = $('#signup');
    const inputNodes = $$('.form-control input');

    inputNodes.forEach((inputNode) => {
        inputNode.onfocus = () => {
            showError(inputNode);
        };
    });

    function isRequired(selector, callback, quantity) {
        let node = $(selector);
        if (node.value.trim() === '') {
            showError(node, `${node.placeholder} is required`);
        } else {
            showError(node);
            if (callback) {
                callback(selector, quantity);
            }
        }
    }

    function isUserName(selector, quantity) {
        let node = $(selector);
        if (node.value.trim().length < quantity) {
            showError(node, `${node.placeholder} must has at least ${quantity} characters`);
        }
        else {
            showError(node);
        }
    }

    function isEmail(selector) {
        let node = $(selector);
        let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (!node.value.trim().match(regex)) {
            showError(node, `${node.placeholder} is not valid`);
        }
        else {
            showError(node);
        }
    }

    function isPassword(selector, quantity) {
        let node = $(selector);
        let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{0,}$/g;
        if (!node.value.trim().match(regex)) {
            showError(node, `${node.placeholder} must has at least one 0-9, a-zA-Z`);
        }
        else if (node.value.trim().length < quantity) {
            showError(node, `${node.placeholder} must has at least ${quantity} characters`);
        }
        else {
            showError(node);
        }
    }

    function confirmPassword(selector) {
        let node = $(selector);

        if (node.value.trim() !== $('#password').value) {
            showError(node, `Passwords do not match`);
        }
        else {
            showError(node);
        }
    }

    function showError(node, message = '') {
        node.nextElementSibling.nextElementSibling.innerText = message;

        if (message === '') {
            node.parentNode.classList.add('success');
            if (node.parentNode.classList.contains('error')) node.parentNode.classList.remove('error');
        } else {
            node.parentNode.classList.add('error');
            if (node.parentNode.classList.contains('success')) node.parentNode.classList.remove('success');
        }
    }


    return {
        handleSubmit: function () {
            formNode.onsubmit = function (e) {
                e.preventDefault();
                isRequired('#username', isUserName, 3);
                isRequired('#email', isEmail);
                isRequired('#password', isPassword, 6);
                isRequired('#password2', confirmPassword);
            };

        },
        start: function () {
            this.handleSubmit();
        }
    };

})();

app.start();




