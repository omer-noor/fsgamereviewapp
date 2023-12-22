import { Cover, Game } from "@/app/components/horizontal-card/interfaces";
import apicalypse from "apicalypse";

export async function getGameByID(gameId: number): Promise<Game | null> {
    console.log("Here");
    try {
      const response = await apicalypse({
        queryMethod: 'body',
        method: 'POST',
        headers: {
          'Client-ID': 'a20m92r9tk7dnwapky9i2sq4n0dh7d',
          'Authorization': 'Bearer f11ukhz1requ4j037hq5k37xlexeug',
          'Accept': 'application/json',
        }
      })
        .fields('*') // Fetches all fields. You might want to specify only the fields you need.
        .where(`id=${gameId}`) // Use the dynamic gameId
        .request('https://api.igdb.com/v4/games'); // Execute the query and return a response object
      return await response.data[0] as Promise<Game | null>;
    } catch (error) {
      console.error('Error fetching game data:', error);
      throw error; // or return null, depending on how you want to handle errors
    }
  }

  export async function getCoverArtByGameID(ID: number): Promise<Cover | null> {
    console.log("Here");
  
    try {
      const response = await apicalypse({
        queryMethod: 'body',
        method: 'POST',
        headers: {
          'Client-ID': 'a20m92r9tk7dnwapky9i2sq4n0dh7d',
          'Authorization': 'Bearer f11ukhz1requ4j037hq5k37xlexeug',
          'Accept': 'application/json',
        }
      })
        .fields('*') // Fetches all fields. You might want to specify only the fields you need.
        .where(`game=${ID}`) // Use the dynamic gameId
        .request('https://api.igdb.com/v4/covers'); // Execute the query and return a response object
      return await response.data[0] as Promise<Cover | null>;
    } catch (error) {
      console.error('Error fetching game data:', error);
      throw error; // or return null, depending on how you want to handle errors
    }
  }