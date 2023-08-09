const images = document.querySelectorAll('img');
let count = 0;
const dots = document.querySelectorAll('.dot');
// Auto carousel
setInterval(function () {
  images[count].className = 'hidden';
  dots[count].classList.replace('fa-solid', 'fa-regular');
  count++;
  if (count === 5) {
    count = 0;
  }
  images[count].className = '';
  dots[count].classList.replace('fa-regular', 'fa-solid');
}, 3000);

// Next img
const nextBtn = document.querySelector('.fa-chevron-right');
function handleNext(event) {
  images[count].className = 'hidden';
  count++;
  if (count === 5) {
    count = 0;
  }
  images[count].className = '';
}
nextBtn.addEventListener('click', handleNext);

// Previous img
const prevBtn = document.querySelector('.fa-chevron-left');
function handlePrev(event) {
  images[count].className = 'hidden';
  if (count === 0) {
    count = 5;
  }
  count--;
  images[count].className = '';
}
prevBtn.addEventListener('click', handlePrev);

// Dot progress bar
function handleDots(event) {
  // Having issue making dots functional
  if (!event.target.matches('.dot')) {
    return;
  }
  for (let i = 0; i < dots.length; i++) {
    if (dots[i] === event.target) {
      count += dots[i];
      images[count].className = '';
      dots[count].classList.replace('fa-regular', 'fa-solid');
    }
  }
}
dots.addEventListener('click', handleDots);
