let inserter = document.getElementById("inserter");
let readBtn = document.getElementById("read-btn");
let configsBtn = document.getElementById("configs-btn");
let readerContainer = document.getElementById("reader-container")

//window.onload = applyConfigs();

function applyConfigs(reader) {
    if (localStorage.userConfigs !== undefined) {
        userConfigs = JSON.parse(localStorage.userConfigs);
        reader.style.backgroundColor = userConfigs.backgroundColor;
        reader.style.color = userConfigs.color;
        reader.style.fontSize = userConfigs.fontSize;
        reader.style.lineHeight = userConfigs.lineHeight;
        reader.style.fontFamily = userConfigs.fontFamily;
    }
}

function addEventConfigs() {
    inserter.addEventListener("keydown", onKeyEnterOrClickEnterRead);
    readBtn.addEventListener("click", onKeyEnterOrClickEnterRead)
    function onKeyEnterOrClickEnterRead(event) {
        let checking = Object.values(readerContainer.children).includes(inserter);
        if ((event.key === "Enter" || event.type === "click") && checking) {
            let textToRead = inserter.value;
            inserter.parentNode.removeChild(inserter);
            let reader = document.createElement("p");
            reader.id = "reader";
            reader.textContent = textToRead;
            readerContainer.appendChild(reader);
        } 
    }
}

addEventConfigs()