import apicalypse from 'apicalypse';
import React from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import { deserialize } from "v8";
import { Cover, Game } from "@/app/components/horizontal-card/interfaces";
import { Prisma } from '@prisma/client';

export default async function page() {

    const getUsers = async () => {
        try {
            const users = await fetch(process.env.BASE_URL + '/api/users/getAllUsers', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            return users.json();
        }
        catch (error) {
            console.log(error)
            return JSON.stringify("Users not found")
        }
    }
    const users: Prisma.UserCreateInput[] = await getUsers()


    return (
        <>
            {users.map((user: Prisma.UserCreateInput, id: any) => (
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
                                        <h1 className="text-large font-medium mt-2">{user.name}</h1>
                                        <h3 className="font-semibold text-foreground/90">Released: {user.email}</h3>
                                        <p className="text-small text-foreground/80">{user.username}</p>
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
