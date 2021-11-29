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
addStatesOptions(states);

function largerInputs(inputsList) {
    for (let input of inputsList) {
        let inputElement = document.getElementsByName(input)[0];
        inputElement.style.width = '1000px'
    }
}
largerInputs(['name','address','description']);

function narrowInputs(inputsList) {
    for (let input of inputsList) {
        let inputElement = document.getElementsByName(input)[0];
        inputElement.style.width = '300px'
    }
}
narrowInputs(['cpf','state','starterDate']);

function onClickDateVerification() {
    let starterDate = document.getElementsByName('starterDate')[0];
    if (starterDate[2] === '/' || starterDate[5] === '/') {
        dateList = starterDate.split('/');
        maxNumber = 31;
        for (let number of dateList) {
            number = parseInt(number);
            if (number < 0 || number > maxNumber) {
                alert("Por favor, insira a data com o formato indicado: dia/mês/ano");
                break;
            }
        }
    } else {
        alert("Por favor, insira a data com o formato indicado: dia/mês/ano");
    }
}

let submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener('click', onClickDateVerification);