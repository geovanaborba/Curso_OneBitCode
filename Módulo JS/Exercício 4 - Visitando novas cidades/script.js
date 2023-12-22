const nomeTurista = prompt('Olá, turista!\nPor favor, digite o seu nome: ');
let pergunta = prompt('Você já visitou alguma cidade? (Sim/Não)');
let cidades = '';
let contagem = 0;

while (pergunta === 'Sim') {
    let cidade = prompt('Qual cidade você já visitou?');
    cidades += ' - ' + cidade + '\n';
    contagem++;
    pergunta = prompt('Você visitou outras cidades? (Sim/Não)');
};

alert (
    'Nome: ' + nomeTurista +
    '\nQuantidade de cidades visitadas: ' + contagem +
    '\nCidades Visitadas: \n' + cidades
);