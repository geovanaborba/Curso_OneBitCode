let lista = [];
let opcoes = '';

do {
    let pacientes = '';
    for (let i = 0; i < lista.length; i++) {
        pacientes += (i + 1) + 'º - ' + lista[i] + '\n';
    }

    opcoes = prompt(
        "Pacientes:\n" + pacientes +
        "\nEscolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
    );
    switch (opcoes) {
        case '1':
            const novoPaciente = prompt('Qual é o nome do(a) paciente?');
            lista.push(novoPaciente);
            break;
        case '2':
            const pacienteConsultado = lista.shift();
            if (!pacienteConsultado) {
                alert('Não há pacientes na fila!');
            } else {
                alert(pacienteConsultado + ' foi removido(a) da fila.');
            }
            break;
        case '3':
            alert('Encerrando...');
            break;
        default:
            alert('Opção inválida!');
            break;
    };
} while (opcoes !== '3');