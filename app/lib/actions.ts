"use server";
import prisma from '@/app/lib/prisma'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod'
// define a zod schema

const formSchema = z.object({
    title: z
        .string()
        .min(3, {message: "Title is too short"})
        .max(50, {message: "Titile is too long"}),
    description: z.string(),
})
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
    const {title, description} = formSchema.parse({
        title: formData.get('title'),
        description: formData.get('description'),
    })

    const session = await getServerSession(authOptions);
    if(!session || !session.user){
        throw new Error('you must be logged in to view todos');
    }
    const userId = session.user.id;

    // atrificail 5 second delay

    // const dealy = (ms: number) => new Promise(resolve=> setTimeout(resolve, ms));
    // await dealy(5000);

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