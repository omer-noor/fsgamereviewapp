import { AuthContext } from '@/app/auth/authContext';
import { Prisma, PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {      
    if (!request.body) {
        return new Response(JSON.stringify("No data in request body"), { status: 400 });
    }    
    try {
        const userInfo : string = await request.json()
        const prisma = new PrismaClient();
        const user = await prisma.user.findFirst(
            {
                where:{
                    authUID: `${userInfo}`
                },
            }
        ) as Prisma.UserCreateInput
        return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
        console.error("Error in fetching user by UID:", error);
        return new Response(JSON.stringify("Error in fetching user by UID"), { status: 500 });
    }
}