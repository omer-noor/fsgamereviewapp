import React from 'react'
import { PrismaClient, Prisma } from '@prisma/client'
import { NextRequest } from 'next/server';


export async function POST(request: NextRequest) {
    if (!request.body) {
        return new Response(JSON.stringify("No data in request body"), { status: 400 });
    }

    try {
        const userInfo = await request.json() as Prisma.UserCreateInput;
        console.log("Received user info:", userInfo);

        const prisma = new PrismaClient();
        const user = await prisma.user.create({
            data: {
                email: userInfo.email,
                name: userInfo.name,
                username: userInfo.username,
                authUID: userInfo.authUID,
            },
        });

        return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
        console.error("Error in user creation:", error);
        return new Response(JSON.stringify("Error in user creation"), { status: 500 });
    }
}