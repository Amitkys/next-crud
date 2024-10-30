"use server";
import prisma from '@/app/lib/prisma'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
// Define the User and Session types
interface User {
    id: string;
    name: string;
    email: string;
    image?: string;
}

interface Session {
    user: User;
}



export async function createTodo(formData: FormData) {
    const title = formData.get('title')as string;
    const description = formData.get('description') as string;
    // const userId = formData.get('userId') as string;

    const session = await getServerSession(authOptions);
    if(!session || !session.user){
        throw new Error('you must be logged in to view todos');
    }
    const userId = session.user.id;

    await prisma.todo.create({
        data: {
            userId,
            title,
            description
        }
    });
}

// Function to fetch all todos for the logged-in user
export async function fetchAllTodos() {
    const session = await getServerSession(authOptions);
    if(!session || !session.user){
        throw new Error('you must be logged in to view todos');
    }

    const userId = session.user.id;

    const todos = await prisma.todo.findMany({
        where: {
            userId: userId
        }
    });

    return todos;
}