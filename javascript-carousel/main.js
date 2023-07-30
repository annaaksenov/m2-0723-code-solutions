// const images = [
//    'images/001.png',
//    'images/025.png',
//    'images/039.png',
//    'images/004.png',
//    'images/007.png',
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

// Auto carousel
setInterval(function carousel() {
  images.forEach((img, i) => {
    img.className = 'hidden';
  });
  if (i === images.length) {
    i = 0;
  }
  images[i].className = '';
  i++;
}, 3000);

// Next img
const nextBtn = document.querySelector('.fa-chevron-right');
function handleNext(event) {
  images.forEach((img, i) => {
    img.className = 'hidden';
  });
  if (i === images.length) {
    i = 0;
  }
  images[i].className = '';
  i++;
}
nextBtn.addEventListener('click', handleNext);

// Previous img
const prevBtn = document.querySelector('.fa-chevron-left');
function handlePrev(event) {
  images.forEach((img, i) => {
    img.className = 'hidden';
  });
  if (i === 0) {
    i = images.length - 1;
  }
  images[i].className = '';
  i--;
  console.log('prev');
}
prevBtn.addEventListener('click', handlePrev);

// Dot progress bar
const dots = document.querySelectorAll('.dot');
function handleDots(event) {
  dots.forEach((dot) => {
    dot.classList.replace('fa-regular', 'fa-solid');
  });
  console.log('clicked');
}
dots.addEventListener('click', handleDots);
