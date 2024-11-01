"use client"
import { markAsDone } from "@/app/lib/actions";
import {deleteTodo} from '@/app/lib/actions';

export  function ShowAllTodo({ data }: {data: any[]}) {

    const handleMarkAsDone = async (id: string) => {
        await markAsDone(id);
    }
    const handleDeleteTodo = async (id: string) => {
        await deleteTodo(id);
    }

    if(data.length == 0) {
        return (
            <p>Todo list is empty</p>
        )
    }

    return (
        <div>
            {data.map((todo) => (
                <div key={todo.id}>
                    {todo.isCompleted? (
                        <div>
                            <h1>Title: <s>{todo.title}</s></h1>
                            <p>Description: <s>{todo.description}</s></p>
                        </div>
                    ): (
                            <div>
                                <h1>Title: {todo.title}</h1>
                                <p>Description: {todo.description}</p>
                                <button onClick={() => handleMarkAsDone(todo.id)}>Mark as Done</button>
                            </div>
                    )}
                    <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    <hr />
                </div>
            ))}
        </div>
    )
}