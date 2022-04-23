// Requisito 4
const pixelBoard = document.getElementById('pixel-board');
pixelBoard.style.gridTemplateColumns = 'repeat(5, 1fr)';
let actualPaletteLength = 0;

// Estas funções checa o tamanho do quadro atual, e, caso o tamanho passado como argumento seja
// maior que o atual, então a função adiciona as caixas faltantes para completar o número 'palleteChoiceSqr'
// Caso o número 'palleteChoiceSrq' seja menor que o tamanho atual da paleta, então são apagadas as caixas
// excessivas. Caso os valores sejam iguais, a função não faz nenhuma alteração na grid.

function pixelBoxesGenPart1(paletteChoice) {
  if (paletteChoice ** 2 > actualPaletteLength) {
    for (let i = 1; i <= paletteChoice ** 2 - actualPaletteLength; i += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelBoard.appendChild(pixel);
    }
    actualPaletteLength = paletteChoice ** 2;
  }
}

function pixelBoxesGenPart2(paletteChoice) {
  if (paletteChoice ** 2 < actualPaletteLength) {
    for (let i = actualPaletteLength - 1; i > paletteChoice ** 2 - 1; i -= 1) {
      pixelBoard.removeChild(document.getElementsByClassName('pixel')[i]);
    }
    actualPaletteLength = paletteChoice ** 2;
  }
}
pixelBoxesGenPart1(5);
pixelBoxesGenPart2(5);

// Requisito 7
// 1. Adiciona um event listener a toda a página:
document.addEventListener('click', (clickEvent) => {
  const color = clickEvent.target.classList;
  // 1.1 Especifica que a função é acionada apenas se o clique (clickEventTarget)
  // ocorrer num elemento que possua a classe 'color' e não possua a classe 'selected'.
  if (color.contains('color') && !color.contains('selected')) {
    // 1.2. Caso a condição for verdadeira, remove a classe 'selected' da paleta através
    // do seguinte loop:
    const colorPalette = document.getElementById('color-palette').children;
    for (let i = 0; i < colorPalette.length; i += 1) {
      colorPalette[i].classList.remove('selected');
    }
    // 1.3 Adiciona a classe 'seleceted' à cor selecionado pelo clique:
    color.add('selected');
  }
});

// Requisito 8
// 1. Adiciona um event listener a toda a página:
document.addEventListener('click', (clickEvent) => {
  const pixelBox = clickEvent.target.classList;
  // 1.1 Especifica que a função é acionada apenas se o clique (clickEventTarget)
  // ocorrer num elemento que possua a classe 'pixel':
  if (pixelBox.contains('pixel')) {
    // 1.2 Caso a condição seja verdadeira, altera o background color da caixa para a
    // cor do elemento da paleta que possua a classe 'selected':
    const selected = clickEvent;
    selected.target.style.backgroundColor = `${window
      .getComputedStyle(document.querySelector('.selected'))
      .getPropertyValue('background-color')}`;
  }
});

// Requisito 9
// 1.0 Adiciona um event listener ao botão de ID 'clear-board'
document.getElementById('clear-board').addEventListener('click', () => {
  // 1.1 Clicado o botão, um loop altera o background color de todos os elementos
  // que possuam a classe 'pixel':
  const pixelClear = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelClear.length; i += 1) {
    pixelClear[i].style.backgroundColor = 'white';
  }
});

// Requisito 10
// 1. Adiciona um event listener no botão (id='generate-board')
document.getElementById('generate-board').addEventListener('click', () => {
  const inputValue = parseInt(document.getElementById('board-size').value, 10);
  const boxes = document.getElementsByClassName('pixel');
  // 1.1 Se o input estiver vazio, retorna uma alert:
  if (!inputValue) alert('Board inválido!');
  // 1.2 Se o imput contiver um truthy value (ou seja, algum número):
  else if (inputValue >= 5 && inputValue <= 50) {
    // 1.2.1 Reestrutura a grid com base no input do usuário, usando
    // a funcção criada no requisito 4.
    pixelBoard.style.gridTemplateColumns = `repeat(${inputValue}, 1fr)`;
    pixelBoxesGenPart1(inputValue);
    pixelBoxesGenPart2(inputValue);
    // 1.2.2 Recolore de branco todas as caixas
    for (let i = 0; i < boxes.length; i += 1) {
      boxes[i].style.backgroundColor = 'white';
    }
  }
});

// Requisito 11
document.getElementById('generate-board').addEventListener('click', () => {
  const inputValue = parseInt(document.getElementById('board-size').value, 10);
  if (inputValue < 5) {
    // Se o valor do input for menor que 5, ativa a função do requisito 4 com o parâmetro
    // igual a 5, e ajusta o tamanho da grid.
    pixelBoxesGenPart1(5);
    pixelBoxesGenPart2(5);
    pixelBoard.style.gridTemplateColumns = 'repeat(5, 1fr)';
  }
  if (inputValue > 50) {
    // Se o valor do input for maior que 50, ativa a função do requisito 4 com o parâmetro
    // igual a 50, e ajusta o tamanho da grid.
    pixelBoxesGenPart1(50);
    pixelBoxesGenPart2(50);
    pixelBoard.style.gridTemplateColumns = 'repeat(50, 1fr)';
  }
});

// Requisito 12
const randonColors = document.getElementsByClassName('color__randon');
for (let i = 0; i < randonColors.length; i += 1) {
  randonColors[i].style.backgroundColor = `#${Math.floor(
    Math.random() * 255 + 1
  )}`;
}
// OBS: another way of generating random colors (hexadecimal):
// function randonColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
