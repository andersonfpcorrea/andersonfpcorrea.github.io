// Requisito 5
const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const orderedList = document.getElementById('lista-tarefas');

button.addEventListener('click', () => {
  const task = document.createElement('li');
  task.textContent = input.value.trim();
  task.classList.add('list-item');
  orderedList.appendChild(task);
  input.value = '';
});
// =============================
// Requisitos 7 & 8
const listItems = document.getElementsByClassName('list-item');
orderedList.addEventListener('click', (click) => {
  if (!click.target.classList.contains('selected')) {
    for (item of listItems) {
      if (item.classList.contains('selected')) {
        item.classList.remove('selected');
      }
    }
    click.target.classList.add('selected');
  } else if (click.target.classList.contains('selected')) {
    click.target.classList.remove('selected');
  }
});
// =============================
// Requisito 9
orderedList.addEventListener('dblclick', (click) => {
  if (
    click.target.classList.contains('list-item') &&
    !click.target.classList.contains('completed')
  ) {
    click.target.classList.add('completed');
  } else if (
    click.target.classList.contains('list-item') &&
    click.target.classList.contains('completed')
  ) {
    click.target.classList.remove('completed');
  }
});
// =============================
// Requisito 10
const deleteButton = document.getElementById('apaga-tudo');
deleteButton.addEventListener('click', () => {
  orderedList.textContent = '';
});
// =============================
// Requisito 11
const removeCompletedBtn = document.getElementById('remover-finalizados');
removeCompletedBtn.addEventListener('click', () => {
  for (let i = orderedList.children.length - 1; i >= 0; i -= 1) {
    if (orderedList.children[i].classList.contains('completed')) {
      orderedList.removeChild(orderedList.children[i]);
    }
  }
});
// =============================
// Requisito 12
const saveTasks = document.getElementById('salvar-tarefas');
saveTasks.addEventListener('click', () => {
  // Salvando os textos da lista:
  const keyValueArray = [];
  for (let item = 0; item < orderedList.children.length; item += 1) {
    keyValueArray.push([item, orderedList.children[item].textContent]);
  }
  for ([order, task] of keyValueArray) {
    sessionStorage.setItem(`list${order}`, `${task}`);
  }
  // Salvando a classe 'completed' da lista:
  const classesArray = [];
  for (let i = 0; i < orderedList.children.length; i += 1) {
    if (orderedList.children[i].classList.contains('completed')) {
      classesArray.push([i, 'completed']);
    } else {
      classesArray.push([i, '']);
    }

    for ([order, classComp] of classesArray) {
      sessionStorage.setItem(`list${order}-class`, `${classComp}`);
    }
  }
});
// window.onload = () => {
// Carregando os itens da Session Storage:
const keyValueArrayReturn = [];
const classesArrayReturn = [];
for (let i = 0; i < sessionStorage.length; i += 1) {
  keyValueArrayReturn.push(sessionStorage.getItem(`list${i}`));
}
for (let i = 0; i < sessionStorage.length; i += 1) {
  classesArrayReturn.push(sessionStorage.getItem(`list${i}-class`));
}
console.log(keyValueArrayReturn);
console.log(classesArrayReturn);
// Reconstruindo a lista no DOM:
for (text of keyValueArrayReturn) {
  const savedListItem = document.createElement('li');
  savedListItem.textContent = `${text}`;
  if (text) {
    orderedList.appendChild(savedListItem);
  }
}
// Adicionando classes aos itens:
for (let i = 0; i < classesArrayReturn.length; i += 1) {
  if (classesArrayReturn[i] === 'completed') {
    orderedList.children[i].classList.add(
      `${classesArrayReturn[i]}`,
      'list-item'
    );
  } else if (classesArrayReturn[i] === '')
    orderedList.children[i].classList.add('list-item');
}
// };
// =============================
// Requisito 13
const moveUpBtn = document.getElementById('mover-cima');
const moveDownnBtn = document.getElementById('mover-baixo');

moveUpBtn.addEventListener('click', () => {
  for (let i = 1; i < orderedList.children.length; i += 1) {
    if (
      orderedList.children[i].classList.contains('selected') &&
      orderedList.children[i].classList.contains('completed') &&
      !orderedList.children[i - 1].classList.contains('completed')
    ) {
      orderedList.children[i - 1].classList.add('completed');
      orderedList.children[i].classList.remove('completed');
    }
    if (orderedList.children[i].classList.contains('selected')) {
      [
        orderedList.children[i - 1].textContent,
        orderedList.children[i].textContent,
      ] = [
        orderedList.children[i].textContent,
        orderedList.children[i - 1].textContent,
      ];
      orderedList.children[i - 1].classList.add('selected');
      orderedList.children[i].classList.remove('selected');
    }
  }
});

moveDownnBtn.addEventListener('click', () => {
  for (let i = orderedList.children.length - 2; i >= 0; i -= 1) {
    if (
      orderedList.children[i].classList.contains('selected') &&
      orderedList.children[i].classList.contains('completed')
    ) {
      if (!orderedList.children[i + 1].classList.contains('completed')) {
        orderedList.children[i + 1].classList.add('completed');
        orderedList.children[i].classList.remove('completed');
      }
    }
    if (orderedList.children[i].classList.contains('selected')) {
      [
        orderedList.children[i + 1].textContent,
        orderedList.children[i].textContent,
      ] = [
        orderedList.children[i].textContent,
        orderedList.children[i + 1].textContent,
      ];
      orderedList.children[i + 1].classList.add('selected');
      orderedList.children[i].classList.remove('selected');
    }
  }
});
// =============================
// Requisito 14
const removeSelectedBtn = document.getElementById('remover-selecionado');
removeSelectedBtn.addEventListener('click', () => {
  orderedList.removeChild(document.querySelector('.selected'));
});
