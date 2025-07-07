import gameTags from './tagapi.js';

const optionsRestSimilarGame = {
    method: 'GET',
    headers: {
        'x-rapidapi-host': 'games-details.p.rapidapi.com',
        'x-rapidapi-key': '0e37fd68cdmsh15cd0b1117ff58ep1d57a0jsne84e1e019ce3'
    }
};


let allGames = [];
let currentPage = 1;
const itemsPerPage = 4;

const renderCarouselPage = () => {
    const track = document.querySelector('.carousel');
    track.innerHTML = '';
    if (!allGames || allGames.length === 0) {
        const item = document.createElement('div');
        item.className = 'carousel-item placeholder';
        item.innerHTML = `<span>No similar games found.</span>`;
        track.appendChild(item);
        let pag = document.querySelector('.carousel-pagination');
        if (pag) pag.innerHTML = '';
        return;
    }
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const gamesToShow = allGames.slice(startIdx, endIdx);
    gamesToShow.forEach((game) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
          <img src="${game.image}" alt="${game.name}" />
          <h3>${game.name}</h3>
          <div class="carousel-prices">${game.price}</div>
        `;
        track.appendChild(item);
    });
    renderPaginationControls();
}

const renderPaginationControls = () => {
    let pagination = document.querySelector('.carousel-pagination');
    if (!pagination) {
        pagination = document.createElement('div');
        pagination.className = 'carousel-pagination';
        document.querySelector('.carousel').after(pagination);
    }
    pagination.innerHTML = '';
    const totalPages = Math.ceil(allGames.length / itemsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = 'carousel-page-btn' + (i === currentPage ? ' active' : '');
        btn.addEventListener('click', () => {
            currentPage = i;
            renderCarouselPage();
        });
        pagination.appendChild(btn);
    }
}


const similarGame = async () => {
    try {
        const response = await fetch("https://games-details.p.rapidapi.com/similargame/730", optionsRestSimilarGame);
        const dataSimilarGames = await response.json();
        if (dataSimilarGames && dataSimilarGames.data && Array.isArray(dataSimilarGames.data.similar_games)) {
            allGames = dataSimilarGames.data.similar_games;
            console.log(allGames);
        } else {
            allGames = [];
        }
        currentPage = 1;
        renderCarouselPage();
    } catch (error) {
        console.error('Error fetching game data:', error);
        allGames = [];
        renderCarouselPage();
    }
};
const searchGame = async (gameName) => {
    try {
        const response = await fetch(`https://games-details.p.rapidapi.com/search?sugg=${gameName}`, optionsRestSimilarGame);
        const dataSearchGames = await response.json();
        return dataSearchGames;
    } catch (error) {
        console.error('Error fetching game data:', error);
        return null;
    }
};
// document.querySelector('.search-button').addEventListener('click', () => {
//     const searchInput = document.querySelector('.search-input').value;
//     if (searchInput) {
//         renderSearchDropdw(searchInput);
//     }
// });

const renderSearchDropdown = async (gameName) => {
    try {
        const ul = document.querySelector('.search-results-list');
        ul.innerHTML = '';
        const searchList = await searchGame(gameName);
        console.log(searchList);
        if (searchList && searchList.data && Array.isArray(searchList.data.search)) {
            searchList.data.search.forEach((game, idx) => {
                const li = document.createElement('li');
                li.className = 'search-result-item';
                li.innerHTML = `
                    <img class="search-result-image" src="${game.image}" alt="${game.name}" />
                    <div class="search-result-info">
                        <div class="search-result-name">${game.name}</div>
                        <div class="search-result-price">${game.price}</div>
                    </div>`;

                ul.appendChild(li);
            });
        }
    } catch (error) {
        console.error('Error fetching game data:', error);
    }
};

document.querySelector('.search-input').addEventListener('input', async (e) => {
    const searchValue = e.target.value;
    const dropdown = document.querySelector('.search-results-list');
    if (searchValue.length > 0) {
        renderSearchDropdown(searchValue);
        dropdown.classList.add('wow');
    } else {
        dropdown.classList.remove('wow');
    }
});

// hide dropdown when clicking outside
document.addEventListener('click', (e) => {
    const dropdown = document.querySelector('.search-results-list');
    if (dropdown && !e.target.closest('.search-container')) {
        dropdown.classList.remove('wow');
    }
});
document.querySelector('.dropdown-item').addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = document.querySelector('.search-input');
});
similarGame();
