"use server";
import prisma from '@/app/lib/prisma'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
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

    redirect('/todos');
}

// Function to fetch all todos for the logged-in user
export async function fetchAllTodo() {
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

export async function markAsDone(todoId: string){
    await prisma.todo.update({
        where: {id: todoId},
        data: {isCompleted: true},
    });

    // show updated data
    revalidatePath("/todos");
}

export async function deleteTodo(todoId: string) {
    await prisma.todo.delete({
        where: {id: todoId}
    });

    // show updated data
    revalidatePath('/todos');
}