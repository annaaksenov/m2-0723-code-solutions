// const images = [
//   'images/001.png',
//   'images/025.png',
//   'images/039.png',
//   'images/004.png',
//   'images/007.png',
// ];
// function slideShow() {
//   document.querySelector('img').setAttribute('src', images[i]);
//   if (i < images.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }
//  setTimeout(slideShow, 3000);
// }
// window.onload = slideShow();
//  const prevBtn = document.querySelector('.fa-chevron-left');

//  prevBtn.addEventListener('click', function() {
//    /* document.querySelector('img').setAttribute('src', images[i]); */;
//   console.log('clicked');
// });
const images = document.querySelectorAll('img');
let i = 1;

setInterval(() => {
  images.forEach((img, i) => {
    img.className = 'hidden';
  });
  if (i === images.length) {
    i = 0;
  }
  images[i].className = '';
  i++;
}, 3000);
