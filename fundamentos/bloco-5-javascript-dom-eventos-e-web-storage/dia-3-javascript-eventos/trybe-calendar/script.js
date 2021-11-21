function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

/* 1. O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
- Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
- Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
- Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li> */
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let d of dezDaysList) {
    let dayElement = document.createElement("li");
    dayElement.innerText = d;
    dayElement.className = "day";
    if ([24, 25, 31].includes(d)) {
        dayElement.classList.add("holiday");
    }
    if ([4, 11, 18, 25].includes(d)) {
        dayElement.classList.add("friday");
    }
    days.appendChild(dayElement);
}

/* 2. Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
- Adicione a este botão a ID "btn-holiday" .
- Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */

function createButton(buttonName) {
    let button = document.createElement("button");
    button.id = "btn-holiday";
    button.innerText = buttonName;
    let buttonsContainer = document.querySelector(".buttons-container");
    buttonsContainer.appendChild(button);
}
createButton("Feriados");

/* 3. Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
- É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" . */

function clickEventHolidayBtn(newBackgroundColor) {
    let button = document.getElementById("btn-holiday");
    button.addEventListener("click", toggleColorHolidays);
    let oldBackgroundColor = "rgb(238, 238, 238)";
    function toggleColorHolidays(event) {
        let holidays = document.getElementsByClassName("holiday");
            for (let holiday of holidays) {
                if (holiday.style.backgroundColor === newBackgroundColor) {
                holiday.style.backgroundColor = oldBackgroundColor;
            } else {
                holiday.style.backgroundColor = newBackgroundColor;
            }
        }
    }
}
clickEventHolidayBtn("white");

/* 4. Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
- Adicione a este botão o ID "btn-friday" .
- Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */

function createButton2(buttonName) {
    let button = document.createElement("button");
    button.id = "btn-friday";
    button.innerText = buttonName;
    let buttonsContainer = document.querySelector(".buttons-container");
    buttonsContainer.appendChild(button);
}
createButton2("Sexta-feira");