import * as libRequest from '../lib/request';

const baseUrl = 'http://localhost:4000/data/comments';

export const createComment = async (gameId, username, text) => {
    const result = await libRequest.post(baseUrl, { gameId, username, text });
    return result;

}

export const getCommentsPerGame = async (gameId) => {
    const query = new URLSearchParams({ where: `gameId="${gameId}"` });

    const result = await libRequest.get(`${baseUrl}?${query}`);

    //The problem here is over-fetching. It is temp solution until migration to collections service 
    //return Object.values(result).filter(x => x.gameId === gameId);
    return result;
}