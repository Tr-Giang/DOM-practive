const facebook = 3300;
const youtube = 1000;
const tiktok = 9900;

const faceElement = document.querySelector(".face h2");
const youtubeElement = document.querySelector(".youtube h2");
const tiktokElement = document.querySelector(".tiktok h2");

function counterUp(element, number) {
  const speed = 200;
  let from = 0;
  const step = number / speed;

  const counter = setInterval(() => {
    from += step;
    if (from >= number) {
      clearInterval(counter);
      element.innerHTML = number;
    } else {
      element.innerHTML = Math.ceil(from);
    }
  }, 1);
}

counterUp(faceElement, facebook);
counterUp(youtubeElement, youtube);
counterUp(tiktokElement, tiktok);
