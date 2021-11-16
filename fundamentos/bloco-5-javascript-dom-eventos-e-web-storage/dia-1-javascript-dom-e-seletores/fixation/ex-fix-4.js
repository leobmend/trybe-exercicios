/* Vamos consolidar a manipulação dos elementos HTML , colocando a cor do Administrador de Tempo da Trybe como na imagem ex-fix-4.png presente na atual pasta.
Você vai precisar usar o que aprendeu sobre getElementBy e querySelector para colocar em prática. */

const header = document.getElementById("header-container");
header.style.backgroundColor = "#00B069";

const urgentSubtitles = document.querySelectorAll(".emergency-tasks h3");
for (let urgentSubtitle of urgentSubtitles) {
    urgentSubtitle.style.backgroundColor = "#A500F3";
}

const urgentSection = document.querySelector(".emergency-tasks");
urgentSection.style.backgroundColor = "#FD9B87"

const noUrgentSubtitles = document.querySelectorAll(".no-emergency-tasks h3");
for (let noUrgentSubtitle of noUrgentSubtitles) {
    noUrgentSubtitle.style.backgroundColor = "#565033";
}

const noUrgentSection = document.querySelector(".no-emergency-tasks");
noUrgentSection.style.backgroundColor = "#F9DB5E"

console.log("asdaasd")

console.log("asdaasd")


