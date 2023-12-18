const numberOne = document.querySelector('#numberOne');
const numberTwo = document.querySelector('#numberTwo');
const result = document.querySelector('span');

function add() {
  result.innerHTML = parseFloat(numberOne.value) + parseFloat(numberTwo.value);
}

function subtract() {
  result.innerHTML = parseFloat(numberOne.value) - parseFloat(numberTwo.value);
}

function multiply() {
  result.innerHTML = parseFloat(numberOne.value) * parseFloat(numberTwo.value);
}

function divide() {
  result.innerHTML = parseFloat(numberOne.value) / parseFloat(numberTwo.value);
}

//Solução sugerida em aula usando prompt e alert: 

// const entrada1 = prompt("Informe o primeiro número:");
// const entrada2 = prompt("Informe o segundo número:");

// const x = parseFloat(entrada1);
// const y = parseFloat(entrada2);

// const soma = x + y;
// const subtracao = x - y;
// const multiplicacao = x * y;
// const divisao = x / y;

// alert(
//     "Resultados:\n" +
//     "\nSoma: " + soma +
//     "\nSubtração: " + subtracao +
//     "\nMultiplicação: " + multiplicacao +
//     "\nDivisão: " + divisao
//   );