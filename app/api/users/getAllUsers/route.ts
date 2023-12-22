import { Prisma, PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';


export async function GET() {    
    try {
        const prisma = new PrismaClient();
        const users = await prisma.user.findMany() as Prisma.UserCreateInput[]
        return new Response(JSON.stringify(users), { status: 200 });
    } catch (error) {
        console.error("Error in fetching all users:", error);
        return new Response(JSON.stringify("Error in fetching users"), { status: 500 });
    }
}