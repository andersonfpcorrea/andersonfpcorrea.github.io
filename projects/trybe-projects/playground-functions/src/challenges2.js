// Desafio 11
function generatePhoneNumber(array) {
  let condition = false;

  // 1st condition to break the execution:
  if (array.length !== 11) {
    condition = true;
    return `Array com tamanho incorreto.`;
  }

  // 2nd condition to break the execution
  for (let key in array) {
    if (array[key] < 0 || array[key] > 9) {
      condition = true;
      break;
    }
  }
  if (condition)
    return `não é possível gerar um número de telefone com esses valores`;

  // 3rd condition to break the execution:
  for (let key in array) {
    let counter = 0;
    for (let i in array) {
      if (array[key] === array[i]) counter += 1;
    }

    if (counter >= 3) {
      condition = true;
      // console.log(`At 3nd condition the variable is: ${condition}`);
      break;
    }
  }
  if (condition)
    return `não é possível gerar um número de telefone com esses valores`;

  // NORMAL USE
  if (!condition)
    return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (
    lineA < lineB + lineC &&
    lineA > Math.abs(lineB - lineC) &&
    lineB < lineA + lineC &&
    lineB > Math.abs(lineA - lineC) &&
    lineC < lineA + lineB &&
    lineC > Math.abs(lineA - lineB)
  )
    return true;
  else return false;
}

// Desafio 13
function hydrate(string) {
  const a = string.match(/\d/g);
  let counter = 0;
  for (let key in a) {
    counter += Number(a[key]);
  }
  return counter === 1 ? `1 copo de água` : `${counter} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
