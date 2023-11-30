import * as libRequest from '../lib/request';

const baseUrl = 'http://localhost:3900/data/games';

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

export const editGameById = async (gameId, gameData) =>{
  const result = await libRequest.put(`${baseUrl}/${gameId}`, gameData);
  return result;
}

export const getLatest = async () =>{
//   const query = new URLSearchParams({
//     // sortBy: `_createdOn desc`,
//     offset: 0,
//     pageSize: 3,
// });
  const result = await libRequest.get(`${baseUrl}?sortBy=_createdOn desc&offset=0&pageSize=3`);
  return result;
}

export const deleteGameById = async (gameId) => await libRequest.remove(`${baseUrl}/${gameId}`);