"use server";
import prisma from '@/app/lib/prisma'
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

export async function fetchAllTodo(){
    return (

    )
}
