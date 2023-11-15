import * as libRequest from '../lib/request';

const baseUrl = 'http://localhost:4000/jsonstore/games';

export const getAll = async () => {
  const result = await libRequest.get(baseUrl);
  return Object.values(result);

}

export const createGame = async (gameData) => {

  const result = await libRequest.post(baseUrl, gameData)

  return result;
}