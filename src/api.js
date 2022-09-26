searchInput.addEventListener("keyup", debounce(searchRepository, 250));

async function searchRepository() {
  clearRepo();
  if (searchInput.value) {
    return await fetch(
      `https://api.github.com/search/repositories?q=${searchInput.value}&per_page=5`
    )
      .then((res) => res.json())
      .then((res) => {
        res.items.forEach((i) => createRepository(i));
      });
  } else {
    clearRepo();
  }
}

clearRepo = () => {
  repositoryListSearch.innerHTML = "";
};

function debounce(func, ms, immediate) {
  let timeout;
  return function executedFunction() {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, ms);

    if (callNow) {
      func.apply(context, args);
    }
  };
}
