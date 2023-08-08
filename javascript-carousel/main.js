/* const images = [
    'images/001.png',
    'images/025.png',
    'images/039.png',
    'images/004.png',
    'images/007.png',
 ];
 */
const images = document.querySelectorAll('img');
let i = 1;
// Auto carousel
const id = setInterval(function carousel() {
  images.forEach((img) => {
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
  clearInterval(id);
  images.forEach((img) => {
    img.className = 'hidden';
  });
  if (i === images.length) {
    i = 0;
  }
  images[i].className = '';
  i++;
  // setInterval(carousel()) states carousel is undefined.
  setInterval(id); // does not trigger it to start.
}
nextBtn.addEventListener('click', handleNext);

// Previous img
const prevBtn = document.querySelector('.fa-chevron-left');
function handlePrev(event) {
  images.forEach((img) => {
    // Jumps around between imgs but unsure why.
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
    dot.className = 'fa-regular';
  });
  if (i === dots.length) {
    i = 0;
  }
  dots[i].className = 'fa-solid';
  console.log('clicked');
}
dots.addEventListener('click', handleDots);
