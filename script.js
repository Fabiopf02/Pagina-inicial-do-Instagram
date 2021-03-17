let number = 3;

function changeImage() {
  const current = document.querySelector('.visible');
  const next = document.querySelector(`.image${number}`);

  if (number >= 5) {
    number = 0;
  }
  number+=1;
  const last = document.querySelector('.last')
  if (last)
    last.classList.remove('last');
  current.classList.add('last');
  next.classList.add('visible');
  current.classList.remove('visible');
}

setInterval(changeImage, 5000);
