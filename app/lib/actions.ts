"use server";
export async function createTodo(formData: FormData) {
    const title = formData.get('title');
    console.log(title);
}
