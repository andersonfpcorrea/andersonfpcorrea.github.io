const genLetterBtn = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const paragraph = document.getElementById('carta-gerada');
// ========================================
// Função geradora de números inteiros aleatórios:
function randonInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}
// ========================================
// Objeto com as possíveis classes das spans (Requisito 16 em diante)
const classObj = {
  classes0: ['newspaper', 'magazine1', 'magazine2'],
  classes1: ['medium', 'big', 'reallybig'],
  classes2: ['rotateleft', 'rotateright'],
  classes3: ['skewleft', 'skewright'],
};
// ========================================
// Requisito 4 - Ações executadas ao se apertar o botão "Criar carta misteriosa"
genLetterBtn.addEventListener('click', () => {
  // Mensagem de erro (Requisito 5)
  if (!input.value.trim()) {
    paragraph.textContent = 'Por favor, digite o conteúdo da carta.';
  }
  // Gerador de spans
  if (input.value.trim()) {
    paragraph.textContent = '';
    const letterWords = input.value.split(' ');
    for (word of letterWords) {
      const span = document.createElement('span');
      span.textContent = word;
      paragraph.appendChild(span);
    }
  }
  // Gerador de styles (Requisito 16)
  // Loop para adicionar classes aleatórias às spans (Requisito 16)
  for (span of paragraph.children) {
    span.classList.add(
      `${classObj.classes0[randonInt(0, 2)]}`,
      `${classObj.classes1[randonInt(0, 2)]}`,
      `${classObj.classes2[randonInt(0, 1)]}`,
      `${classObj.classes3[randonInt(0, 1)]}`
    );
  }
  // Requisito 18: contador de palavras
  const counterParagraph = document.getElementById('carta-contador');
  counterParagraph.textContent = `${input.value.split(' ').length}`;
});
// ========================================
// Requisito 17
paragraph.addEventListener('click', (clickEvent) => {
  clickEvent.target.classList.value = '';
  clickEvent.target.classList.add(
    `${classObj.classes0[randonInt(0, 2)]}`,
    `${classObj.classes1[randonInt(0, 2)]}`,
    `${classObj.classes2[randonInt(0, 1)]}`,
    `${classObj.classes3[randonInt(0, 1)]}`
  );
});
