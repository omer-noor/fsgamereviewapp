import apicalypse from 'apicalypse';
import React from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import { HeartIcon } from "../horizontal-card/heart-icon";
import { deserialize } from "v8";
import { Cover, Game } from "@/app/components/horizontal-card/interfaces";

export async function getGamesBySearch(searchTerm: string): Promise<Game[] | null> {
  try {
    console.log(searchTerm)
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
      .search(`${searchTerm}`) 
      .limit(10)// Use the search term
      .request('https://api.igdb.com/v4/games'); // Execute the query and return a response object
    return await response.data as Promise<Array<Game> | null>;
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
    return await JSON.parse(response.data[0]) as Promise<Cover | null>;
  } catch (error) {
    console.error('Error fetching game data:', error);
    throw error; // or return null, depending on how you want to handle errors
  }
}

export default async function HorizontalCard({
  query,
  }: {
  query: string; 
}) {
  console.log(query)
  const game = await getGamesBySearch(query);  
  if (game != undefined && game.length > 0) {
    const gamesArray: Array<Game> = game || [];
    return (
      <>
        {gamesArray.map((game: Game, id: any) => (
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-slate-500"
            shadow="sm"
          >
            <CardBody>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                <div className="relative col-span-6 md:col-span-4">
                  <Image
                    alt="Album cover"
                    className="object-cover"
                    height={200}
                    shadow="md"
                    src={`https://images.igdb.com/igdb/image/upload/t_cover_big.jpg`}
                    width="100%"
                  />
                </div>

                <div className="flex flex-col col-span-6 md:col-span-8">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-0">
                      <h1 className="text-large font-medium mt-2">{game.name}</h1>
                      <h3 className="font-semibold text-foreground/90">Released: {new Date(game.first_release_date * 1000).toLocaleDateString("en-US")}</h3>
                      <p className="text-small text-foreground/80">{game.category}</p>
                    </div>
                  </div>

                  <div className="flex w-full">
                    <Button
                      isIconOnly
                      className="data-[hover]:bg-foreground/10"
                      radius="full"
                      variant="light"
                    >
                      Hello
                    </Button>
                    <Button
                      isIconOnly
                      className="data-[hover]:bg-foreground/10"
                      radius="full"
                      variant="light"
                    >
                      Hello
                    </Button>
                    <Button
                      isIconOnly
                      className="data-[hover]:bg-foreground/10"
                      radius="full"
                      variant="light"
                    >
                      Hello
                    </Button>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </>)
  }
}
