const balloon = document.querySelector('.balloon');

function inflateBalloon() {
  let fontSize = parseInt(getComputedStyle(balloon).fontSize);
  fontSize *= 1.1;
  balloon.style.fontSize = fontSize + 'px';

  if (fontSize >= 100) {
    balloon.textContent = '💥';
    window.removeEventListener('keydown', handleKeydown);
  }
}

function deflateBalloon() {
  let fontSize = parseInt(getComputedStyle(balloon).fontSize);
  fontSize *= 0.9;
  balloon.style.fontSize = fontSize + 'px';
}

function handleKeydown(event) {
  if (event.key === 'ArrowUp') {
    inflateBalloon();
  } else if (event.key === 'ArrowDown') {
    deflateBalloon();
  }
}

window.addEventListener('keydown', handleKeydown);
