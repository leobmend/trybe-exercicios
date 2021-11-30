const main = document.querySelector('main');

// Declaração de funções dos escutadores de evento:

function onClickSelect(event) {
  const task = event.target;
  const priorSelected = document.querySelector('.selecionado');

  if (priorSelected === null) {
    task.classList.add('selecionado');
  } else if (priorSelected !== task) {
    task.classList.add('selecionado');
    priorSelected.classList.remove('selecionado');
  }
}

function onDblClickRisk(event) {
  const task = event.target;

  if (!Object.values(task.classList).includes('completed')) {
    task.classList.add('completed');
  } else {
    task.classList.remove('completed');
  }
}

function onClickNewTask() {
  const newTask = document.createElement('li');
  const inputItem = document.getElementById('texto-tarefa');
  const taskList = document.getElementById('lista-tarefas');

  newTask.className = 'item-lista list-group-item';
  newTask.innerText = inputItem.value;
  taskList.appendChild(newTask);

  inputItem.value = '';

  newTask.addEventListener('click', onClickSelect);
  newTask.addEventListener('dblclick', onDblClickRisk);
}

function onClickClearAll() {
  const tasks = document.getElementById('lista-tarefas').children;

  for (let i = tasks.length - 1; i >= 0; i -= 1) {
    tasks[i].remove();
  }
}

function onClickRemoveCompleted() {
  const completedItens = document.querySelectorAll('.completed');
  for (let i = 0; i < completedItens.length; i += 1) {
    console.log(completedItens[i].value);
    completedItens[i].remove();
  }
}

function onClickMoveUp() {
  const selectedItem = document.querySelector('.selecionado');
  const taskList = document.getElementById('lista-tarefas');
  const itemIndex = [...taskList.children].indexOf(selectedItem);
  const taskListLength = taskList.children.length;

  if (selectedItem !== null && itemIndex !== 0 && taskListLength > 1) {
    const priorItem = selectedItem.previousElementSibling;
    selectedItem.remove();
    taskList.insertBefore(selectedItem, priorItem);
  }
}

function onClickMoveDown() {
  const selectedItem = document.querySelector('.selecionado');
  const taskList = document.getElementById('lista-tarefas');
  const itemIndex = [...taskList.children].indexOf(selectedItem);
  const taskListLength = taskList.children.length;

  if (selectedItem !== null && itemIndex !== taskListLength - 1 && taskListLength > 1) {
    const nextNextItem = selectedItem.nextElementSibling.nextElementSibling;
    if (nextNextItem === null) {
      selectedItem.remove();
      taskList.appendChild(selectedItem);
    } else {
      taskList.insertBefore(selectedItem, nextNextItem);
    }
  }
}

function onClickSave() {
  const taskList = document.getElementById('lista-tarefas');
  const selectedItem = document.querySelector('.selecionado');
  if (selectedItem !== null) {
    selectedItem.classList.remove('selecionado');
    localStorage.setItem('savedList', taskList.innerHTML);
    selectedItem.classList.add('selecionado');
  } else {
    localStorage.setItem('savedList', taskList.innerHTML);
  }
}

function onOpenLoadSavedList() {
  const { savedList } = localStorage;
  const taskList = document.getElementById('lista-tarefas');

  if (savedList !== undefined) {
    taskList.innerHTML = savedList;
    for (let i = 0; i < taskList.children.length; i += 1) {
      taskList.children[i].addEventListener('click', onClickSelect);
      taskList.children[i].addEventListener('dblclick', onDblClickRisk);
    }
  }
}

function onClickRemoveSelected() {
  const selectedItem = document.querySelector('.selecionado');

  if (selectedItem !== null) {
    selectedItem.remove();
  }
}

// Declaração de funções de adição dos elementos HTML:

function addHeader(text) {
  const headerH1 = document.createElement('h1');
  const header = document.getElementsByTagName('header')[0];
  
  headerH1.innerText = text;
  headerH1.className = 'display-1'
  header.appendChild(headerH1);
}

function addHowTo(text) {
  const howTo = document.createElement('p');
  const header = document.querySelector('header');

  howTo.id = 'funcionamento';
  howTo.innerText = text;
  header.appendChild(howTo);
}

function addInputDiv() {
  const inputDiv = document.createElement('div');

  inputDiv.id = 'add-container';
  inputDiv.className = 'container-md d-flex align-items-center'
  main.appendChild(inputDiv);
}

function addInput(text) {
  const inputItem = document.createElement('input');
  const inputDiv = document.getElementById('add-container');

  inputItem.id = 'texto-tarefa';
  inputItem.placeholder = text;
  inputDiv.appendChild(inputItem);
}

function addTaskList() {
  const taskList = document.createElement('ol');

  taskList.id = 'lista-tarefas';
  taskList.className = 'list-group list-group-numbered'
  main.appendChild(taskList);
}

function addNewTaskBtn(text) {
  const newTaskBtn = document.createElement('button');
  const inputDiv = document.getElementById('add-container');

  newTaskBtn.id = 'criar-tarefa';
  newTaskBtn.className = 'btn btn-outline-secondary';
  newTaskBtn.innerText = text;
  inputDiv.appendChild(newTaskBtn);

  newTaskBtn.addEventListener('click', onClickNewTask);
}

function addMenuDiv() {
  const menuDiv = document.createElement('div');

  menuDiv.id = 'menu-container';
  menuDiv.className = 'btn-group'
  main.appendChild(menuDiv);
}

function addClearAllBtn(text) {
  const clearAllBtn = document.createElement('button');
  const menuDiv = document.getElementById('menu-container');

  clearAllBtn.id = 'apaga-tudo';
  clearAllBtn.className = 'btn btn-outline-secondary'
  clearAllBtn.innerText = text;
  menuDiv.appendChild(clearAllBtn);

  clearAllBtn.addEventListener('click', onClickClearAll);
}

function addRemoveCompletedBtn(text) {
  const removeCompletedBtn = document.createElement('button');
  const menuDiv = document.getElementById('menu-container');

  removeCompletedBtn.id = 'remover-finalizados';
  removeCompletedBtn.className = 'btn btn-outline-secondary'
  removeCompletedBtn.innerText = text;
  menuDiv.appendChild(removeCompletedBtn);

  removeCompletedBtn.addEventListener('click', onClickRemoveCompleted);
}

function addSaveBtn(text) {
  const saveBtn = document.createElement('button');
  const menuDiv = document.getElementById('menu-container');

  saveBtn.id = 'salvar-tarefas';
  saveBtn.innerText = text;
  saveBtn.className = 'btn btn-outline-secondary';
  menuDiv.appendChild(saveBtn);

  saveBtn.addEventListener('click', onClickSave);
}

function addMoveBtns(textUp, textDown) {
  const moveUpBtn = document.createElement('button');
  const moveDownBtn = document.createElement('button');
  const menuDiv = document.getElementById('menu-container');

  moveUpBtn.id = 'mover-cima';
  moveUpBtn.innerText = textUp;
  moveUpBtn.className = 'btn btn-outline-secondary';
  moveDownBtn.id = 'mover-baixo';
  moveDownBtn.innerText = textDown;
  moveDownBtn.className = 'btn btn-outline-secondary';
  menuDiv.appendChild(moveUpBtn);
  menuDiv.appendChild(moveDownBtn);

  moveUpBtn.addEventListener('click', onClickMoveUp);
  moveDownBtn.addEventListener('click', onClickMoveDown);
}

function addRemoveSelectedBtn(text) {
  const removeSelectedBtn = document.createElement('button');
  const menuDiv = document.getElementById('menu-container');

  removeSelectedBtn.id = 'remover-selecionado';
  removeSelectedBtn.innerText = text;
  removeSelectedBtn.className = 'btn btn-outline-secondary';
  menuDiv.appendChild(removeSelectedBtn);

  removeSelectedBtn.addEventListener('click', onClickRemoveSelected);
}

// Chamada das funções:

addHeader('Minha Lista de Tarefas');
addHowTo('Clique duas vezes em um item para marcá-lo como completo');
addInputDiv();
addInput('Insira uma nova tarefa...');
addNewTaskBtn('Adicionar tarefa');
addTaskList();
addMenuDiv();
addClearAllBtn('Limpar lista');
addRemoveCompletedBtn('Limpar finalizados');
addSaveBtn('Salvar lista');
addMoveBtns('Mover para cima', 'Mover para baixo');
addRemoveSelectedBtn('Remover item');
window.onload = onOpenLoadSavedList;

// As funções addNewTaskBtn e onClickNewTaskBtn foram discutidas e desenvolvidas em conjunto ao colega de Tribo XP, Patrick Bastos.
