import * as libRequest from '../lib/request';

const baseUrl = 'http://localhost:3900/data/comments';

export const createComment = async (gameId, text) => {
    const result = await libRequest.post(baseUrl, { gameId, text });
    return result;

}

export const getCommentsPerGame = async (gameId) => {
    const query = new URLSearchParams({ 
        where: `gameId="${gameId}"`,
        load: `owner=_ownerId:users`
    });

    const result = await libRequest.get(`${baseUrl}?${query}`);

    //The problem here is over-fetching. It is temp solution until migration to collections service 
    //return Object.values(result).filter(x => x.gameId === gameId);
    return result;
}