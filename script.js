
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const historyList = document.getElementById('historyList');
const clearHistoryButton = document.getElementById('clearHistoryButton');


let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];


function updateSearchHistory() {
    historyList.innerHTML = ''; 
    searchHistory.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}


searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
     
        searchHistory.push(query);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

        
        searchInput.value = '';

      
        updateSearchHistory();
    }
});


clearHistoryButton.addEventListener('click', () => {
    searchHistory = [];
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    updateSearchHistory();
});


updateSearchHistory();
