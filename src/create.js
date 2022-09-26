//общий контейнер
let app = document.querySelector(".app");
let searchInput = document.querySelector(".search-input");
let repositoryWrapper = document.querySelector(".repository-wrapper");
let repositoryListSearch = repositoryWrapper.querySelector(".repositoryListSearch");

let saveContainer = document.querySelector(".saveContainer");
let repositoryListSave = saveContainer.querySelector("ul");


function createRepository(repositoryData) {
  //Элементы li при выводе при поиске
  const repositoryElement = document.createElement("li");
  repositoryElement.classList.add("repositoryList__element");
  repositoryElement.innerHTML = `<div class="repositoryList__element_textSearch">${repositoryData.name}</div>`;
  repositoryListSearch.append(repositoryElement);

  //Элементы li для клика
  let el = `
   <div class="saveContainer__element_card-text">
   Name: ${repositoryData.name}<br>
   Owner: ${repositoryData.owner.login}<br>
   Stars: ${repositoryData.stargazers_count}</div>`;

  saveElement(el, repositoryElement)
}


function saveElement(el, repositoryElement){
  //создаем контейнер для добавления репо
  const repositoryElementClick = document.createElement("li");
  repositoryElementClick.classList.add("saveContainer__element");
   repositoryElementClick.innerHTML = el;

  // добавляем элементы при клике на страницу
  repositoryElement.addEventListener("click", () => {
    repositoryListSave.append(repositoryElementClick);
    clearWrapAndInput()
    createButton(repositoryElementClick)
  });
}

function createButton(repositoryElementClick){
  //создаем кнопку 'удалить'
  const divBtn = document.createElement("div");
  divBtn.classList.add("saveContainer__element_card-btn");
  const btn = document.createElement("button");
  btn.classList.add("btn");
  divBtn.append(btn);
  repositoryElementClick.append(divBtn);

  //удаляем при клике
  btn.addEventListener("click", () => {
    repositoryElementClick.remove();
  });
}

  //удаляем значение автокомплита и инпута
function clearWrapAndInput(){
  searchInput.value = "";
  repositoryListSearch.innerHTML = "";
}