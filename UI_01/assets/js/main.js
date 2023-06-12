const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const productsNode = $('.products');
const inputNode = $('#filter');
const productAPI = 'https://fakestoreapi.com/products';

fetch(productAPI)
    .then(responsive => responsive.json())
    .then(products => {

        let html = products.map(product => `<div class="product"><img src="${product.image}"><div><h4>${product.title}</h4><span>${product.price}</span></div></div>`);
        productsNode.innerHTML = html.join('');

        // inputNode.oninput = (e) => {
        //     let inputValue = e.target.value;

        //     let newProducts = products.filter(product => product.title.toLowerCase().includes(inputValue));
        //     let html = newProducts.map(product => `<div class="product"><img src="${product.image}"><div><h4>${product.title}</h4><span>${product.price}</span></div></div>`);
        //     productsNode.innerHTML = html.join('');
        // };


    })
    .catch(error => {
        alert(error);
    });

inputNode.oninput = (e) => {
    let inputValue = e.target.value;

    const productArr = $$('.product');
    productArr.forEach(product => {
        if (!product.querySelector('h4').innerText.toLowerCase().includes(inputValue)) {
            product.classList.add('hide');
        }
        else {
            if (product.classList.contains('hide')) product.classList.remove('hide');
        }
    });
};

