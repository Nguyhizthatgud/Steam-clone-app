// API Configuration
export const optionsRestSimilarGame = {
    method: 'GET',
    headers: {
        'x-rapidapi-host': 'games-details.p.rapidapi.com',
        'x-rapidapi-key': '0e37fd68cdmsh15cd0b1117ff58ep1d57a0jsne84e1e019ce3'
    }
};

// You can add other shared configurations here
export const API_BASE_URL = 'https://games-details.p.rapidapi.com';

export const API_ENDPOINTS = {
    similarGames: (gameId) => `${API_BASE_URL}/similargame/${gameId}`,
    searchGames: (query) => `${API_BASE_URL}/search?sugg=${query}`,
    gameDetails: (gameId) => `${API_BASE_URL}/game/${gameId}`
};
