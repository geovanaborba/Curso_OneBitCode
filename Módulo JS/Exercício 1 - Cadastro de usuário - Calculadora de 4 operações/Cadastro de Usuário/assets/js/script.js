
let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let campoEstudo = document.getElementById('campoEstudo').value;
    let nascimento = document.getElementById('nascimento').value;
    window.alert(
        "Recruta cadastrado com sucesso!\n" +
        "\nNome completo: " + nome + " " + sobrenome +
        "\nCampo de estudo: " + campoEstudo +
        "\nIdade: " + (2023 - nascimento)
    );
});

// Resolução do exercício conforme aula :
/*
let nome = prompt("Insira seu nome: ");
let sobrenome = prompt("Insira seu sobrenome: ");
let campoEstudo = window.prompt("Qual seu campo de estudo?");
let nascimento = window.prompt("Seu ano de nascimento");

alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + nome + " " + sobrenome +
    "\nCampo de estudo: " + campoEstudo +
    "\nIdade: " + (2023 - nascimento)
);
*/