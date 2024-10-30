"use client"
import { markAsDone } from "@/app/lib/actions";
export  function ShowAllTodo({ data }: {data: any[]}) {

    const handleMarkAsDone = async (id: string) => {
        await markAsDone(id);
    }

    return (
        <div>
            {data.map((todo) => (
                <div key={todo.id}>
                    <h1>Title: {todo.title}</h1>
                    <p>Description: <strong> {todo.description}</strong> </p>
                    <button onClick={() => handleMarkAsDone(todo.id)}>Mark as Done</button>
                    <hr />
                </div>
            ))}
        </div>
    )
}