//função da média simples
const average = (...numbers) => {
// média =  rest param com (spread e parâmetros) arrow function {
    const sum = numbers.reduce((accum, num) => accum + num, 0);
    //em parênteses são os parâmetros -> accum = acumulador e num para número atual
    return sum / numbers.length;
};
console.log(`Média Aritmética Simples: ${average(3, 6, 10, 9)}`); //template literals para string e dólar+chaves para passar função

//função da média ponderada
const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0);
    //variável soma = entradas.reduce((acumulador, chaves para quebrar objetos/objeto desestruturado)). ?? indica que se o valor de weight for undefined, o valor considerado deve ser 1. Já o 0 no final é para inicializar em 0.
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0);
    return sum / weightSum;
};
console.log(`Média Ponderada: ${weightedAverage(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1 },
)}`);

//função da mediana
const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a, b) => a - b); //criada variável para que a array numbers não seja modificada por conta do .sort / Usando os colchetes, clonamos o spread e a array 'numbers'
    const middle = Math.floor(orderedNumbers.length / 2);
    if (orderedNumbers.length % 2 !== 0) { //se comprimento do número for um valor par (resto do valor)
        return orderedNumbers[middle]; //retorna número que estará no meio
    };
    const firstMedian = orderedNumbers[middle - 1]; //tira um elemento para a divisão ser exata, visto que a contagem começa em 0. Ex.: Em uma lista com 4 números de 1 a 4, dividindo por 2, o elemento do meio seria o 3, visto que o 1 seria elemento 0. Subtraindo 1 número do meio, a contagem será correta.
    const secondMedian = orderedNumbers[middle];
    return average(firstMedian, secondMedian);
};
console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`);
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`);

//função da moda
const mode = (...numbers) => {
    // array bidimensional [ [nº, qtd], [nº, qtd], [nº, qtd] ]
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ]);
    quantities.sort((a, b) => b[1] - a[1]); //quantities é ordenado na ordem decrescente
    return quantities[0][0];
};
console.log(`Moda: ${mode(1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`);