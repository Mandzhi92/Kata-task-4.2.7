let app = document.querySelector(".app");
let searchInput = app.querySelector(".search-input");
let repositoryWrapper = document.querySelector(".repository-wrapper");
let repositoryListSearch = repositoryWrapper.querySelector(".repositoryList");

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

  const repositoryElementClick = document.createElement("li");
  repositoryElementClick.classList.add("saveContainer__element");
  repositoryElementClick.innerHTML = el;
  const divBtn = document.createElement("div");
  divBtn.classList.add("saveContainer__element_card-btn");
  const btn = document.createElement("button");
  btn.classList.add("btn");
  divBtn.append(btn);
  repositoryElementClick.append(divBtn);

  // добавляем элементы при клике на страницу
  repositoryElement.addEventListener("click", () => {
    repositoryListSave.append(repositoryElementClick);
  });

  //удаляем при нажатии на кнопку
  btn.addEventListener("click", () => {
    repositoryElementClick.remove();
  });
}
