const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('input');
const resultInput = document.getElementById('result');

// array para todos os caracteres que serão permitidos. Depois há uma verificação para funcionar apenas esses: 
const allowedKeys = ['(', ')', '/', '*', '-', '+', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.', '%', ' '];

//função para valor dos botões irem para input ao clicá-los
document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function () {
        const value = charKeyBtn.dataset.value;
        //dataset pega o atributo data do html 
        input.value += value;
    });
});

//botão de limpar
document.getElementById('clear').addEventListener('click', function () {
    input.value = '';
    input.focus();
});

//evento para teclas pressionadas
input.addEventListener('keydown', function (ev) {
    ev.preventDefault();
    if (allowedKeys.includes(ev.key)) {
        //ev.key é a tecla associada ao evento. Tecla que o usuário pressionou.
        input.value += ev.key;
        return;
    };
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1);
        //slice = cortar um caractere
    };
    if (ev.key === 'Enter') {
        calculate();
    };
});

document.getElementById('equal').addEventListener('click', calculate);

function calculate() {
    resultInput.value = 'ERROR';
    resultInput.classList.add('error');
    //o código sempre por padrão executará o valor de erro. Se o eval abaixo der resultado, então a classlist 'error' será removida:
    const result = eval(input.value);
    //eval = avaliar; Avalia o código JS e o executa. Obs:!Método perigoso!
    resultInput.value = result;
    resultInput.classList.remove('error');
};

//evento mudar tema 
document.getElementById('themeSwitcher').addEventListener('click', function () {
    if (main.dataset.theme === 'dark') {
        // tag main no html, contendo data-theme="dark"
        //se tema ser dark, ao clicar virará light
        root.style.setProperty('--bg-color', '#f1f5f9');
        root.style.setProperty('--border-color', '#aaa');
        root.style.setProperty('--font-color', '#212529');
        root.style.setProperty('--primary-color', '#26834a');
        main.dataset.theme = 'light';
    } else { 
        //senão, será dark
        root.style.setProperty('--bg-color', '#212529');
        root.style.setProperty('--border-color', '#666');
        root.style.setProperty('--font-color', '#f1f5f9');
        root.style.setProperty('--primary-color', '#4dff91');
        main.dataset.theme = 'dark';
    };
});

//evento para copiar conteúdo para área de transferência
document.getElementById('copyToClipboard').addEventListener('click', function (ev) {
    const button = ev.currentTarget; //botão que acionou o evento
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!';
        button.classList.add('success'); //nova classe irá pintar a borda e a fonte de verde
        navigator.clipboard.writeText(resultInput.value);
        // propriedade do window.navigator
    } else {
        button.innerText = 'Copy';
        button.classList.remove('success');
    };
});