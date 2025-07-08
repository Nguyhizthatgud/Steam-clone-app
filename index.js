import gameTags from './tagapi.js';
import { optionsRestSimilarGame, API_ENDPOINTS } from './api-config.js';

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

        // Add click event listener to carousel item
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = `game-details.html?id=${game.id}&name=${encodeURIComponent(game.name)}`;
        });

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


const similarGame = async (gameTag = null) => {
    try {
        let response;
        if (gameTag) {
            // Search for games by tag/category
            response = await fetch(`https://games-details.p.rapidapi.com/search?sugg=${gameTag}`, optionsRestSimilarGame);
        } else {
            // Default: fetch similar games to Counter-Strike (ID: 730)
            response = await fetch("https://games-details.p.rapidapi.com/similargame/730", optionsRestSimilarGame);
        }

        const dataGames = await response.json();

        if (gameTag && dataGames && dataGames.data && Array.isArray(dataGames.data.search)) {
            // If searching by tag, use search results
            allGames = dataGames.data.search;
        } else if (!gameTag && dataGames && dataGames.data && Array.isArray(dataGames.data.similar_games)) {
            // If getting similar games, use similar_games array
            allGames = dataGames.data.similar_games;
        } else {
            allGames = [];
        }

        console.log('Fetched games for tag:', gameTag || 'similar games', allGames);
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

        if (searchList && searchList.data && Array.isArray(searchList.data.search)) {
            searchList.data.search.forEach((game, idx) => {
                const li = document.createElement('li');
                li.className = 'search-result-item';
                li.innerHTML = `<div class="search-result-content">
                    <img class="search-result-image" src="${game.image}" alt="${game.name}" />
                    <div class="search-result-info">
                        <div class="search-result-name">${game.name}</div>
                        <div class="search-result-price">${game.price}</div>
                    </div>
                </div>`;

                // Add click event listener BEFORE appending
                li.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = `game-details.html?id=${game.id}&name=${encodeURIComponent(game.name)}`;
                });

                ul.appendChild(li);
            });
        } else {
            console.log('No search results found or invalid data structure');
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
// // hide dropdown when clicking outside
// document.addEventListener('click', (e) => {
//     const dropdown = document.querySelector('.search-results-list');
//     if (dropdown && !e.target.closest('.search-container') && !e.target.closest('.search-result-item')) {
//         dropdown.classList.remove('wow');
//     }
// });
// Add event listeners for category dropdown items
document.addEventListener('DOMContentLoaded', () => {
    const dropdownItems = document.querySelectorAll('.dropdown-item a');
    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const categoryName = e.target.textContent.trim();
            console.log('Selected category:', categoryName);

            // Update carousel title or add visual feedback
            const carouselSection = document.querySelector('.carousel').parentElement;
            let titleElement = carouselSection.querySelector('.category-title');
            if (!titleElement) {
                titleElement = document.createElement('h2');
                titleElement.className = 'category-title';
                titleElement.style.color = '#66c0f4';
                titleElement.style.marginBottom = '20px';
                carouselSection.insertBefore(titleElement, document.querySelector('.carousel'));
            }
            titleElement.textContent = `${categoryName} Games`;

            // Fetch games for the selected category
            similarGame(categoryName);
        });
    });
});

document.querySelector('.dropdown-item').addEventListener('click', (e) => {
    const searchInput = document.querySelector('.search-input');
});

// Function to reset carousel to default similar games
const resetCarousel = () => {
    const titleElement = document.querySelector('.category-title');
    if (titleElement) {
        titleElement.textContent = 'Featured Games';
    }
    similarGame(); // Fetch default similar games
};

similarGame();
