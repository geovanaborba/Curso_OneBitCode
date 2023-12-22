const numero = parseFloat(prompt(
    'Olá! eu sou o Robô da Tabuada!\n' +
    'De qual número você deseja calcular a tabuada?'));

let resultado = '';

for (let fator = 1; fator <= 20; fator++) {
    resultado += numero + ' x ' + fator + ' = ' + (numero * fator) + '\n'
};

alert('Resultado da Tabuada do ' + numero + ':\n\n' + resultado);