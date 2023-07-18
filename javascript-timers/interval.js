const header = document.querySelector('.countdown-display');
let interval = 4;

const id = setInterval(() => {
  if (interval !== 1) {
    interval--;
    header.textContent--;
  } else {
    header.textContent = '~Earth Below Us~';
    clearInterval(id);
  }
}, 1000);
