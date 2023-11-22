import * as libRequest from '../lib/request';

const baseUrl = 'http://localhost:4000/data/games';

export const getAll = async () => {
  const result = await libRequest.get(baseUrl);
  return result;

}

export const createGame = async (gameData) => {

  const result = await libRequest.post(baseUrl, gameData)

  return result;
}

export const getGameDetails = async(gameId) =>{
  const result = await libRequest.get(`${baseUrl}/${gameId}`)
  return result;
}