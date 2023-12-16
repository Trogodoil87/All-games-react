import * as request from "./utils/requester";

const baseUrl = "http://localhost:3030"

export const getAll = async () => {
    const result = request.get(`${baseUrl}/data/games`);

    return result;
}

export const getById = async (gameId) => {
    const result = request.get(`${baseUrl}/data/games/${gameId}`);

    return result;
}