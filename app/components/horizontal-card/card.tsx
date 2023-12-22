import React from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import { HeartIcon } from "./heart-icon";
import { getGameByID } from "@/app/components/horizontal-card/page";
import { stringify } from "querystring";
import { deserialize } from "v8";
import { Game } from "@/app/components/horizontal-card/interfaces";



export default async function HorizontalCard() {
  const game = await getGameByID(1);
  if (game) {
    return (
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
                src={`https://images.igdb.com/igdb/image/upload/t_thumb/{hash}.jpg`}
                width="100%"
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                  <h1 className="text-large font-medium mt-2">{game.name}</h1>
                  <h3 className="font-semibold text-foreground/90">Released: 2022</h3>
                  <p className="text-small text-foreground/80">Publisher: Larian Studios</p>
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
    );
  }
  else{
    return(
      <>
      No games found
      </>
    )
  }
}
