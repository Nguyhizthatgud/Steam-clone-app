//file: game-details.js
import { optionsRestSimilarGame, API_ENDPOINTS } from './api-config.js';

console.log('Game details script loaded');

const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get("id");
const gameName = urlParams.get("name");

console.log('URL params:', { gameId, gameName });

//first load
window.addEventListener("DOMContentLoaded", () => {
    console.log('DOM loaded, calling loadGameDetails');
    loadGameDetails();
});



async function fetchGameDetails(gameId) {
    try {
        const response = await fetch(`https://games-details.p.rapidapi.com/gameinfo/single_game/${gameId}`, optionsRestSimilarGame);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const gameData = await response.json();
        displayGameDetails(gameData);
    } catch (error) {
        console.error("Error fetching game details:", error);
        showPlaceholderContent();
    }
}

function showPlaceholderContent() {
    document.getElementById("gameImage").src = "${gameData.media.screenshot}";
    document.getElementById("gamePrice").textContent = "$29.99";
    document.getElementById("gameDescription").innerHTML = `
                <p>This is a placeholder description for the selected game. In a real implementation, 
                this would contain detailed information about the game, including its storyline, 
                gameplay mechanics, features, and more.</p>
            `;
}

function loadGameDetails() {
    if (gameId) {
        console.log('game ID:', gameId);
        fetchGameDetails(gameId);
    } else {
        showPlaceholderContent();
    }
}

function displayGameDetails(gameData) {
    console.log('gem data received:', gameData);
    const gameImage = document.getElementById("gameImage");
    const gamePrice = document.getElementById("gamePrice");
    const gameDescription = document.getElementById("gameDescription");
    const gameName = document.getElementById("gameTitle");
    const gameDev = document.querySelector(".gameDev");
    const gamePub = document.querySelector(".gamePub");
    const gameRelease = document.querySelector(".gameRelease");
    const gameGenre = document.querySelector(".gameGenre");
    const gameSys = document.querySelector(".gameSys");


    if (gameImage) {
        gameImage.src = gameData.data.media.screenshot[0] || "https://via.placeholder.com/400x225/2a2d36/66c0f4?text=Game+Image";
        gamePrice.textContent = gameData.data.pricing[0].discountPrice || "$29.99";
        gameDescription.innerHTML = `<p>${gameData.data.desc || gameData.data.about_game}</p>`;
        gameName.textContent = gameData.data.name || 'Game Name Not Available';
        gameDev.textContent = gameData.data.dev_details.developer_name[0] || 'Not available';
        gamePub.textContent = gameData.data.dev_details.publisher[0] || 'Not available';
        gameRelease.textContent = gameData.data.release_date || 'Not available';
        gameGenre.textContent = gameData.data.tags || 'Not available';
        gameSys.textContent = gameData.data.sys_req?.window?.min || 'System requirements not available';
    }
}
