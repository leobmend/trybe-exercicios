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

let nameInput = document.getElementsByName('name')[0]
nameInput.style.width = '600px'

let addressInput = document.getElementsByName('address')[0]
addressInput.style.width = '600px'


