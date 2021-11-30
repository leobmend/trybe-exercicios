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
        statesSelection.appendChild(stateOption);
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
    let inputs = Object.values(document.querySelectorAll('input[type="text"'));
    inputs.push(document.querySelector('[name=resume'));
    inputs.push(document.querySelector('select'));
    inputs.push(document.querySelector('#house'));
    inputs.push(document.querySelector('#apartment'));

    for (let input of inputs) {
        input.className = '';
    }
}

function textFilledVerification() {
    let inputs = Object.values(document.querySelectorAll('input[type="text"'));
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

function optionPickedVerification() {
    let select = document.querySelector('select');
    let radio = document.getElementsByName('houseType');
    let resultDiv = document.createElement('div');

    if (select.value === '') {
        resultDiv.innerText = 'Por favor, selecione o estado em que você reside.';
        return resultDiv;
    }
    if (!radio[0].checked && !radio[1].checked) {
        resultDiv.innerText = 'Por favor, selecione um tipo de residência.';
        return resultDiv;
    }
    
}

function dateVerification() {
    let input = document.getElementsByName('starterDate')[0];
    let starterDate = input.value;
    let resultDiv = document.createElement('div');

    if (starterDate[2] === '/' || starterDate[5] === '/') {
        dateList = starterDate.split('/');
        maxNumber = [31, 12, Infinity];
        for (let i = 0; i <= 2; i += 1) {
            let number = parseInt(dateList[i]);
            if (number < 0 || number > maxNumber[i] || Number.isNaN(number)) {
                resultDiv.innerText = 'Por favor, insira a data com valores válidos para dia, mês e ano.';
                return resultDiv;
            }
        }
    } else {
        resultDiv.innerText = 'Por favor, insira a data com o formato indicado: dia/mês/ano.';
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

    resultDiv = textFilledVerification();
    if (resultDiv === undefined) {
        resultDiv = optionPickedVerification();
    }
    if (resultDiv === undefined) {
        resultDiv = dateVerification();
    }

    if (resultDiv === undefined) {
        resultDiv = document.createElement('div');
        let inputs = Object.values(document.querySelectorAll('input[type="text"'));
        inputs.splice(4, 0, document.querySelector('select'));
        inputs.splice(6, 0, document.querySelector('[name="houseType"]:checked'));
        inputs.splice(7, 0, document.querySelector('[name=resume]'));

        let infoList = ['Nome: ', 'E-mail: ', 'CPF: ', 'Cidade: ', 'Estado: ', 'Endereço: ', 'Tipo de redidência: ', 'Resumo profissional: ', 'Cargo: ', 'Descrição das atividades: ', 'Data de início: ']

        for (let i = 0; i < inputs.length; i += 1) {
            let p = document.createElement('p');
            p.innerText = infoList[i];
            if (inputs[i].value === 'house') {
                p.innerText += 'Casa'
            } else if (inputs[i].value === 'apartment') {
                p.innerText += 'Apartamento'
            } else {
                p.innerText += inputs[i].value;
            }
            resultDiv.appendChild(p);
        }
    }
    resultDiv.id = 'result';
    let form = document.getElementsByTagName('form')[0];
    document.body.insertBefore(resultDiv, form)
}

function clearInputs() {
    let inputs = Object.values(document.querySelectorAll('input[type="text"'));
    inputs.push(document.querySelector('[name=resume'));
    inputs.push(document.querySelector('select'));
    inputs = inputs.concat(Object.values(document.querySelectorAll('[type=radio]')));


    for (let input of inputs) {
        if (input.type === 'radio') {
            input.checked = false
        } else {
            input.className = '';
            input.value = '';
        }
    }
}

window.onload = function () {
    let submitBtn = document.querySelector('input[type=submit');
    submitBtn.addEventListener('click', submitHandler);

    let clearBtn = document.getElementById('clear-btn');
    clearBtn.addEventListener('click', clearInputs);

    addStatesOptions(states);
    largerInputs(['name','address','description']);
    narrowInputs(['cpf','state','starterDate']);
}

