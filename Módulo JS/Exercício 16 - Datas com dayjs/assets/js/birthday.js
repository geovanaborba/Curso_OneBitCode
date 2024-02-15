const dayjs = require('dayjs');

function birthday(date) {
    const birthday = dayjs(date); //cria objeto dayjs
    const today = dayjs(); //valor padrão quando não colocado nada entre parenteses é a data atual do sistema

    const ageInYears = today.diff(birthday, 'year'); //método diff conforme documentação, indica a diferença entre duas datas e horas na unidade especificada. Teremos a diferença da data atual até a unidade definida em birthday. Essa diferença será exibida em anos, como definido entre as aspas simples. (https://day.js.org/docs/en/display/difference)

    const nextBirthday = birthday.add(ageInYears + 1, 'year'); //método add soma com outra unidade definida. Nesse caso, pegaremos o valor da variável de idade e somaremos com mais 1 ano, para definir a data do próximo aniversário (https://day.js.org/docs/en/manipulate/add)

    const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1; //mostrará diferença em dias da data atual até o próximo aniversário.

    console.log(`Idade: ${ageInYears}`);
    console.log(`Próximo aniversário: ${nextBirthday.format('ddd, DD MMMM YYYY')}`); //método format muda o formato de data exibida (https://day.js.org/docs/en/display/format)
    console.log(`Faltam ${daysToNextBirthday} dias para completar ${ageInYears + 1} anos.`);
    //Obs.: caso falte horas para o próximo aniversário, (por exemplo, se o aniversário é amanhã) no terminal seria indicado que faltam 0 dias para o aniversário.Faz-se necessário corrigir isso utilizando a quantidade 1 para incluir o dia de hoje na contagem. Esse mais 1, deve ser incluído na variável daysToNextBirthday
};

birthday('1994-12-19'); //ano precisa estar em formato americano