//Ожидаем нажатие клавиш и запускаем запрос данных
searchInput.addEventListener("keyup", debounce(searchRepository, 500));

//функция для очистки списка репо
clearRepo = () => {
  repositoryListSearch.innerHTML = "";
};

//Получаем данные от сервера
async function searchRepository() {
  clearRepo();
  if (searchInput.value) {
    let response = await fetch(`https://api.github.com/search/repositories?q=${searchInput.value}&per_page=5`)
    let data = await response.json()
    return data.items.forEach((i) => createRepository(i));      
  } else {
    clearRepo();
  }
}

//функция задержка получения данных с сервера
function debounce(func, ms, immediate) {
  let timeout;
  return function executedFunction() {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, ms);
    if (callNow) func.apply(context, args);
  };
}
