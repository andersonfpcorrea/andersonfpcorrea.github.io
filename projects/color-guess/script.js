// Requisito 7
// O placar inicial é zero.
let scoreCounterVar = 0;
document.getElementById('score').textContent = `${scoreCounterVar}`;
// Esta função foi colocada aqui porque será chamada quando o jogador acertar a cor.
// 'scoreGenerator' incrementa o contador 'scoreCounterVar' e atualiza a informação no
// elemento 'score':
function scoreGenerator() {
  scoreCounterVar += 3;
  document.getElementById('score').textContent = `${scoreCounterVar}`;
}

// Requisito 2
function randonIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Cria uma cor RGB aleatória
function colorGenerator() {
  const a = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const c = Math.floor(Math.random() * 256);
  return `(${a}, ${b}, ${c})`;
}
// Adiciona o código RBG ao elemento com ID = 'rgb-color'
document.getElementById('rgb-color').textContent = `${colorGenerator()}`;

// Requisito 3 e 4
const balls = document.getElementsByClassName('ball');
// Gera cores automaticamente para preencher as divs 'balls':
// Loop para colorir as bolas
function divColoring() {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = `rgb${colorGenerator()}`;
  }
}
divColoring();

// Requisito 5
// Iguala a cor de uma das bolas à cor do ID = 'rgb-color':
function createTheAnswer() {
  balls[randonIntInclusive(0, 5)].style.backgroundColor = `rgb${
    document.getElementById('rgb-color').textContent
  }`;
}
createTheAnswer();

// Adiciona a class 'answer' à bola cuja cor é a resposta correta:
function toggleAnswerClass() {
  for (let i = 0; i < balls.length; i += 1) {
    if (
      balls[i].style.backgroundColor ===
      `rgb${document.getElementById('rgb-color').innerText}`
    ) {
      balls[i].classList.add('answer');
    } else if (
      balls[i].classList.contains('answer') &&
      balls[i].style.backgroundColor !==
        `rgb${document.getElementById('rgb-color').innerText}`
    ) {
      balls[i].classList.remove('answer');
    }
  }
}
toggleAnswerClass();

// Mensagem inicial:
const message = document.getElementById('answer');
message.textContent = 'Escolha uma cor';
// Lógica para a escolha das cores e mensagens:
document
  .querySelector('.ball-container')
  .addEventListener('click', (clickEvent) => {
    if (clickEvent.target.classList.contains('answer')) {
      message.textContent = 'Acertou!';
      scoreGenerator();
    } else if (!clickEvent.target.classList.contains('answer')) {
      message.textContent = 'Errou! Tente novamente!';
    }
  });

// Requisito 6
document.getElementById('reset-game').addEventListener('click', () => {
  // Generate a random rgb color
  document.getElementById('rgb-color').textContent = `${colorGenerator()}`;
  // Update the message:
  message.textContent = 'Escolha uma cor';
  // Reset the game logic:
  divColoring();
  createTheAnswer();
  toggleAnswerClass();
});
