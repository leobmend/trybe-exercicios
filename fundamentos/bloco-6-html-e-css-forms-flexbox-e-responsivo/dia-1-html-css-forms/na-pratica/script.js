// A lista a seguir foi obtida originalmente no repositório público do link abaixo, mantido pelo usuário do GitHub kavalcanta (João Cavalcante), e após isto modificada para as necessidades do código.
// https://gist.github.com/kavalcante/16106796c430c1711a71c5ba1213cee5
let states = {
    'AC': 'Acre',
    'AL': 'Alagoas',
    'AP': 'Amapá',
    'AM': 'Amazonas',
    'BA': 'Bahia',
    'CE': 'Ceará',
    'DF': 'Distrito Federal',
    'ES': 'Espírito Santo',
    'GO': 'Goías',
    'MA': 'Maranhão',
    'MT': 'Mato Grosso',
    'MS': 'Mato Grosso do Sul',
    'MG': 'Minas Gerais',
    'PA': 'Pará',
    'PB': 'Paraíba',
    'PR': 'Paraná',
    'PE': 'Pernambuco',
    'PI': 'Piauí',
    'RJ': 'Rio de Janeiro',
    'RN': 'Rio Grande do Norte',
    'RS': 'Rio Grande do Sul',
    'RO': 'Rondônia',
    'RR': 'Roraíma',
    'SC': 'Santa Catarina',
    'SP': 'São Paulo',
    'SE': 'Sergipe',
    'TO': 'Tocantins',
}

function addStatesOptions(states) {
    let statesSelection = document.getElementById('state');
    for (let state in states) {
        let stateOption = document.createElement('option');
        stateOption.value = state;
        stateOption.innerText = states[state];
        statesSelection.appendChild(stateOption)
    }
}

function largerInputs(inputsList) {
    for (let input of inputsList) {
        let inputElement = document.getElementsByName(input)[0];
        inputElement.style.width = '1000px'
    }
}

function narrowInputs(inputsList) {
    for (let input of inputsList) {
        let inputElement = document.getElementsByName(input)[0];
        inputElement.style.width = '300px';
    }
}

function borderPainter() {
    let inputs = Object.values(document.querySelectorAll("input[type='text'"));
    inputs.push(document.querySelector('[name=resume'));
    inputs.push(document.querySelector('select'));
    inputs.push(document.querySelector('#house'));
    inputs.push(document.querySelector('#apartment'));

    for (let input of inputs) {
        input.className = ''
    }
}

function textFilledVerification() {
    let inputs = Object.values(document.querySelectorAll("input[type='text'"));
    inputs.splice(5, 0, document.querySelector('[name=resume'));
    let resultDiv = document.createElement('div');

    for (let input of inputs) {
        if (input.value === '') {
            resultDiv.innerText = 'Por favor, preencha o campo em destaque vermelho para prosseguir.';
            input.className = 'red-alert';
            return resultDiv;
        }
    }
}

function dateVerification() {
    let starterDate = document.getElementsByName('starterDate')[0].value;
    let resultDiv = document.createElement('div');

    if (starterDate[2] === '/' || starterDate[5] === '/') {
        dateList = starterDate.split('/');
        maxNumber = [31, 12, Infinity];
        for (let i = 0; i <= 2; i += 1) {
            let number = parseInt(dateList[i]);
            if (number < 0 || number > maxNumber[i] || Number.isNaN(number)) {
                resultDiv.innerText = "Por favor, insira a data com valores válidos para dia, mês e ano.";
                return resultDiv;
            }
        }
    } else {
        resultDiv.innerText = "Por favor, insira a data com o formato indicado: dia/mês/ano.";
        return resultDiv;
    }
}

function submitHandler(event) {
    event.preventDefault();
    
    let previousResultDiv = document.getElementById('result');
    if (previousResultDiv !== null) {
        previousResultDiv.remove();
    }
    
    let resultDiv;

    borderPainter();


    resultDiv = dateVerification();
    resultDiv = textFilledVerification();
    


    resultDiv.id = 'result';

    let form = document.getElementsByTagName('form')[0];
    document.body.insertBefore(resultDiv, form)
}

window.onload = function () {
    let submitBtn = document.getElementById('submit-button');
    addStatesOptions(states);
    largerInputs(['name','address','description']);
    narrowInputs(['cpf','state','starterDate']);

    submitBtn.addEventListener('click', submitHandler);
}
