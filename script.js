let number = 2;

function changeImage() {
  console.log(number)
  const current = document.querySelector('.visible');
  const next = document.querySelector(`.image${number}`);

  if (number >= 5) {
    number = 0;
  }
  number+=1;
  next.classList.add('visible');
  current.classList.remove('visible');
}

setInterval(changeImage, 4000);
