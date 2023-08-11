const images = document.querySelectorAll('img');
let count = 0;
const dots = document.querySelectorAll('.fa-circle');
const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot2');
const dot3 = document.querySelector('.dot3');
const dot4 = document.querySelector('.dot4');
const dot5 = document.querySelector('.dot5');

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

// Dot progress bar
dot1.addEventListener('click', function (event) {
  if (!event.target.matches('.dot1')) {
    return;
  }
  images[count].className = 'hidden';
  dots[count].classList.replace('fa-solid', 'fa-regular');
  if (dot1 === event.target) {
    count = 0;
  }
  images[count].className = '';
  dots[count].classList.replace('fa-regular', 'fa-solid');
});

dot2.addEventListener('click', function (event) {
  if (!event.target.matches('.dot2')) {
    return;
  }
  images[count].className = 'hidden';
  dots[count].classList.replace('fa-solid', 'fa-regular');
  if (dot2 === event.target) {
    count = 1;
  }
  images[count].className = '';
  dots[count].classList.replace('fa-regular', 'fa-solid');
});

dot3.addEventListener('click', function (event) {
  if (!event.target.matches('.dot3')) {
    return;
  }
  images[count].className = 'hidden';
  dots[count].classList.replace('fa-solid', 'fa-regular');
  if (dot3 === event.target) {
    count = 2;
  }
  images[count].className = '';
  dots[count].classList.replace('fa-regular', 'fa-solid');
});

dot4.addEventListener('click', function (event) {
  if (!event.target.matches('.dot4')) {
    return;
  }
  images[count].className = 'hidden';
  dots[count].classList.replace('fa-solid', 'fa-regular');
  if (dot4 === event.target) {
    count = 3;
  }
  images[count].className = '';
  dots[count].classList.replace('fa-regular', 'fa-solid');
});

dot5.addEventListener('click', function (event) {
  if (!event.target.matches('.dot5')) {
    return;
  }
  images[count].className = 'hidden';
  dots[count].classList.replace('fa-solid', 'fa-regular');
  if (dot5 === event.target) {
    count = 4;
  }
  images[count].className = '';
  dots[count].classList.replace('fa-regular', 'fa-solid');
});

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
