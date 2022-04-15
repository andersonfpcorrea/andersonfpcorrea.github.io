// Desafio 1
function compareTrue(a, b) {
  if (a && b) return true;
  else return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = array[0];
  let counter = 0;
  for (let key in array) {
    if (highestNumber < array[key]) highestNumber = array[key];
  }
  for (let key in array) {
    if (highestNumber === array[key]) counter += 1;
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) return 'cat1';
  else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) return 'cat2';
  else if (Math.abs(mouse - cat2) === Math.abs(mouse - cat1))
    return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  const outputArray = [];
  for (let key in array) {
    if (array[key] % 15 === 0) {
      outputArray.push('fizzBuzz');
      continue;
    }
    if (array[key] % 3 === 0) {
      outputArray.push('fizz');
      continue;
    }
    if (array[key] % 5 === 0) {
      outputArray.push('buzz');
      continue;
    } else outputArray.push('bug!');
    continue;
  }
  return outputArray;
}

// Desafio 9
function encode(string) {
  let newString;
  newString = string.replaceAll('a', '1');
  newString = newString.replaceAll('e', '2');
  newString = newString.replaceAll('i', '3');
  newString = newString.replaceAll('o', '4');
  newString = newString.replaceAll('u', '5');
  return newString;
}

function decode(string) {
  let newString;
  newString = string.replaceAll('1', 'a');
  newString = newString.replaceAll('2', 'e');
  newString = newString.replaceAll('3', 'i');
  newString = newString.replaceAll('4', 'o');
  newString = newString.replaceAll('5', 'u');
  return newString;
}

// Desafio 10
function techList(array, name) {
  const allTech = [];
  if (array.length === 0) return `Vazio!`;
  else
    for (let key in array) {
      let iteratorObj = {
        tech: `${array[key]}`,
        name: name,
      };
      allTech.push(iteratorObj);
    }
  return allTech.sort(function (a, b) {
    const techA = a.tech.toUpperCase();
    const techB = b.tech.toUpperCase();
    if (techA < techB) {
      return -1;
    }
    if (techA > techB) {
      return 1;
    }
    return 0;
  });
}
techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas');

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
