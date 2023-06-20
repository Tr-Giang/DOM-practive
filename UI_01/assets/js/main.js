const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const productsNode = $('.products');
const inputNode = $('#filter');
const productAPI = 'https://fakestoreapi.com/products';


//Cach su dung fetch/then
// fetch(productAPI)
//     .then(responsive => responsive.json())
//     .then(products => {

//         let html = products.map(product => `<div class="product"><img src="${product.image}"><div><h4>${product.title}</h4><span>${product.price}</span></div></div>`);
//         productsNode.innerHTML = html.join('');

//     })
//     .catch(error => {
//         alert(error);
//     });


//Cach su dung async await:
async function renderProducts() {
    try {
        let prm = await fetch(productAPI);
        let products = await prm.json();

        let html = products.map(product => `<div class="product"><img src="${product.image}"><div><h4>${product.title}</h4><span>${product.price}</span></div></div>`);
        productsNode.innerHTML = html.join('');

        return products;
    }
    catch (err) {
        alert(err.message);
    }
}

renderProducts();



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

