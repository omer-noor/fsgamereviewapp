'use server';
import { PrismaClient } from '@prisma/client'
import { use } from 'react';

const prisma = new PrismaClient()

export async function getUsers() {
    let allUsers = await prisma.user.findMany()
    return allUsers;
}

export async function getUserById(userId:number){
    const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      })
    return user;
}

