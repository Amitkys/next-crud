"use client";
export async function ShowAllTodo({ data }: {data: any[]}) {
    return (
        <div>
            {data.map((todo) => (
                <div key={todo.id}>
                    <h1>{todo.title}</h1>
                </div>
            ))}
        </div>
    )
}