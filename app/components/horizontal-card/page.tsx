import React from "react";
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { getGamesBySearch } from "@/app/components/search/search-result";
import { Game } from "@/app/components/horizontal-card/interfaces";

export default async function HorizontalCard(query:any) {
  const games = await getGamesBySearch(query);

  if (games && games.length > 0) {
    return (
      <>
        {games.map((game, index) => (
          <Card
            key={index}
            isBlurred
            className="border-none"
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
                    src={`https://images.igdb.com/igdb/image/upload/t_thumb/${game.cover}.jpg`}
                    width="100%"
                  />
                </div>

                <div className="flex flex-col col-span-6 md:col-span-8">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-0">
                      <h1 className="text-large font-medium mt-2">{game.name}</h1>
                      <h3 className="font-semibold text-foreground/90">Released: {game.first_release_date}</h3>
                      <p className="text-small text-foreground/80">Publisher: {game.platforms}</p>
                    </div>
                  </div>

                  <div className="flex w-full">
                    {/* Place buttons or any other components you want for each game here */}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </>
    );
  } else {
    return <div>No games found</div>;
  }
}
