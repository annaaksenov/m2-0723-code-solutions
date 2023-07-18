const header = document.querySelector('.countdown-display');
let interval = 4;

const id = setInterval(() => {
  if (interval === 4) {
    interval--;
    header.textContent = 3;
  } else if (interval === 3) {
    interval--;
    header.textContent = 2;
  } else if (interval === 2) {
    interval--;
    header.textContent = 1;
  } else if (interval === 1) {
    header.textContent = '~Earth Beeelooww Us~';
    clearInterval(id);
  }
}, 1000);
