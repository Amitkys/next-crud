"use server";
import prisma from '@/app/lib/prisma'
import { todo } from 'node:test';

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
    const userId = formData.get('userId') as string;

    await prisma.todo.create({
        data: {
            userId,
            title,
            description
        }
    });
}

// Function to fetch all todos for the logged-in user
export async function fetchAllTodo() {
    const todos = await prisma.todo.findMany({
        where: {
            userId: '3c91e03b-b859-45db-9f64-cedf21ba49ea'
        }
        /// userId = 3c91e03b-b859-45db-9f64-cedf21ba49ea
    });
    console.log('data fetched');
    return todos;
}
