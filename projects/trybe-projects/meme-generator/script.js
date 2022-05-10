// Requisito 1
const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
textInput.addEventListener('keyup', () => {
  memeText.textContent = `${textInput.value}`;
});

// Requisito 2
const chooseFile = document.getElementById('meme-insert');
const img = document.getElementById('meme-image');
chooseFile.addEventListener('input', () => {
  img.src = `imgs/${chooseFile.value.slice(12)}`;
  console.log(img.src);
});

// Requisito 6
const container = document.getElementById('meme-image-container');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');

document.addEventListener('click', (click) => {
  if (click.target.id === 'fire') {
    container.style.border = '3px dashed red';
  }
  if (click.target.id === 'water') {
    container.style.border = '5px double blue';
  }
  if (click.target.id === 'earth') {
    container.style.border = '6px groove green';
  }
});

// Requisito 7
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');
document.querySelector('.four-memes').addEventListener('click', (click) => {
  if (click.target.id === 'meme-1') {
    img.src = 'imgs/meme1.png';
  }
  if (click.target.id === 'meme-2') {
    img.src = 'imgs/meme2.png';
  }
  if (click.target.id === 'meme-3') {
    img.src = 'imgs/meme3.png';
  }
  if (click.target.id === 'meme-4') {
    img.src = 'imgs/meme4.png';
  }
});
