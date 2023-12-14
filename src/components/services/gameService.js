const baseUrl = "http://localhost:3030"

export const getAll = async () => {
    const response = await fetch(`${baseUrl}/data/games`);
    const result = await response.json();

    return result;
}

export const getById = async (gameId) => {
    const response = await fetch(`${baseUrl}/data/games/${gameId}`);
    const result = await response.json();

    return result;
}