let i = 0;
const images = [
  'images/001.png',
  'images/025.png',
  'images/039.png',
  'images/004.png',
  'images/007.png',
];

const intervalID = setInterval(myCallback, 3000, images);

function myCallback(images) {
  document.querySelector('img').setAttribute('src', images[i]);
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
}

console.log(intervalID);
