let dinheiro = parseFloat(prompt('Qual a quantidade inicial de dinheiro disponível?'));

let opcoes = "";

do {
    opcoes = prompt(
        'Saldo disponível: R$ ' + dinheiro +
        '\n1 - Adicionar valor' +
        '\n2 - Remover valor' +
        '\n3 - Sair'
    );

    switch (opcoes) {
        case '1':
            dinheiro += parseFloat(prompt('Informe o valor a ser adicionado: '));
            break;
        case '2':
            dinheiro -= prompt('Informe o valor a ser removido: ');
            break;
        case '3':
            alert("Saindo da operação...");
            break;
        default:
            alert('Entrada Inválida');
            break;
    };
} while (opcoes !== '3');
