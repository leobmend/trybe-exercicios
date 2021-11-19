const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// Resposta: A primeira caixa, já do HTML raiz, está configurado com a classe 'tech'. Esta classe apresenta o seguinte estilo CSS 'transform: translateY(-20px)'. Com essa estilização, o elemento é deslocado 20 pixels para cima, resultando no efeito de desalinhamento em relação às outras caixas.

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
listElements = document.querySelectorAll("li");
for (let element of listElements) {
  element.addEventListener("click", onClick);
}
function onClick(event) {
  let clicked = event.target;
  if (clicked.className !== "tech") {
    for (let element of listElements) {
      if (element.className === "tech") {
        element.className = "";
      }
    }
    clicked.className = "tech";
  }
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener("keyup", onText);
function onText(event) {
  let text = event.target.value;
  liTarget = document.querySelector(".tech");
  liTarget.innerText = text;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
mySpotrybefy = document.getElementById("my-spotrybefy");
mySpotrybefy.addEventListener("dblclick", onDblclick);
function onDblclick(event) {
  window.open("https://leobmend.github.io/", 'noreferrer') // Ainda preciso compreender exatamente o que o 'noreferrer' realiza, mas sem este a página inicial congelava. Aparentemente, o argumento impede que a página inciial fique aguardando alguma resposta, o que a congela indefinidamente.
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
mySpotrybefy.addEventListener("mouseover", onMouseOver);
function onMouseOver(event) {
  elementTarget = event.target
  elementTarget.style.color = "gold"
}
mySpotrybefy.addEventListener("mouseout", onMouseOut);
function onMouseOut(event) {
  elementTarget = event.target
  elementTarget.style.color = "white"
}

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.