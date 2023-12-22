const palavra = prompt('Digite uma palavra:');
let palavraInvertida = '';

// (inicialização ; condição ; finalização)
for (let i = palavra.length - 1; i>= 0; i--) {
    palavraInvertida += palavra[i];
};

if (palavra === palavraInvertida) {
    alert(palavra + ' é um palíndromo!');
} else {
    alert(palavra + ' não é um palíndromo! \n\n' + palavra + ' !== ' + palavraInvertida);
};

/*
Inicialização: queremos que o for comece executando da última posição da palavra. O 'palavra.length' fará com que as letras da palavra digitada sejam contadas. O -1 fará com que a palavra comece da última posição/letra dessa palavra. 

Condição: Até quando vai executar: até o i chegar na posição 0.

Finalização: Diminuir 1 desse índice 
*/