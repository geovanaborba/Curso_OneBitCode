//Funções Auxiliares
function createLabel(text, htmlFor) { //parâmetro é 'htmlFor', porque apenas 'for' já é uma palavra reservada do JS.
    const label = document.createElement('label');
    label.htmlFor = htmlFor;
    label.innerText = text;
    return label;
};

function createInput(id, value, name, type = 'text', placeholder = '') {
    const input = document.createElement('input');
    input.id = id;
    input.value = value;
    input.name = name;
    input.type = type;
    input.placeholder = placeholder;
    return input;
};

//Variáveis Globais
const addTechBtn = document.getElementById('addTechBtn');
const form = document.getElementById('devForm');
const developers = [];
let inputRows = 0;

//evento do botão que adiciona os novos campos no formulário
addTechBtn.addEventListener('click', function (ev) {
    const stackInputs = document.getElementById('stackInputs');

    const newRow = document.createElement('li');
    const rowIndex = inputRows;
    inputRows++;
    newRow.id = 'inputRow-' + rowIndex;
    newRow.className = 'inputRow';

    const techNameLabel = createLabel('Nome tecnologia: ', 'techName-' + rowIndex); //função createLabel(text, htmlFor)
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName'); //função createInput (id, value e name)

    const expLabel = createLabel('Experiência de: ');
    expLabel.className = 'expLabel';

    const id1 = 'expRadio-' + rowIndex + '.1';
    const expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio'); //(id, value, name, type)
    const expLabel1 = createLabel('0-2 anos ', id1);

    const id2 = 'expRadio-' + rowIndex + '.2';
    const expRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio');
    const expLabel2 = createLabel('3-4 anos ', id2);

    const id3 = 'expRadio-' + rowIndex + '.3';
    const expRadio3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio');
    const expLabel3 = createLabel('5+ anos ', id3);

    const removeRowBtn = document.createElement('button');
    removeRowBtn.type = 'button';
    removeRowBtn.innerText = 'Remover';
    removeRowBtn.className = 'btnRemove';
    removeRowBtn.addEventListener('click', function () {
        stackInputs.removeChild(newRow);
    });

    newRow.append( //append acrescenta nós filho ao newRow
        techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn
    );
    stackInputs.appendChild(newRow);
});

// Evento de submissão do formulário
form.addEventListener('submit', function (event) {
    event.preventDefault(); //para não atualizar a página

    const fullnameInput = document.getElementById('fullname');
    const inputRows = document.querySelectorAll('.inputRow');

    let technologies = [];
    inputRows.forEach(function (row) {
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value;
        //querySelector está pegando uma linha (#rowId) e dentro desse row, está pegando um input que tem o [name="techName"]
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value;
        technologies.push({ name: techName, exp: techExp });
        //technologies dando push em um objeto com as propriedades nome e exp)
    });

    const newDev = { fullname: fullnameInput.value, technologies: technologies }; //variável para criar objeto de cada dev cadastrado
    developers.push(newDev);
    alert('Dev cadastrado com sucesso!');

    fullnameInput.value = ''; //limpa o formulário após cadastro
    inputRows.forEach(function (row) {
        row.remove();
    });

    console.log(developers);
});