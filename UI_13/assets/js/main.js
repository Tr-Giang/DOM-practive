const uploadNode = document.querySelector('#upload');
const formNode = document.querySelector('form');
const imgBox = document.querySelector('.img');

uploadNode.onchange = function (e) {
    const file = e.target.files[0];
    let imgNode = document.createElement('img');
    imgBox.appendChild(imgNode);

    if (file) {
        imgNode.src = URL.createObjectURL(file);


        // c2: sử dụng đối tượng FileReader()
        // const reader = new FileReader();
        // reader.onload = function (e) {
        //     const imageUrl = e.target.result;
        //     imgBox.src = imageUrl;
        // };
        // reader.readAsDataURL(file);
    }
};
