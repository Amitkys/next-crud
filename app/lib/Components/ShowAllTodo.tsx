"use client"
export  function ShowAllTodo({ data }: {data: any[]}) {
    return (
        <div>
            {data.map((todo) => (
                <div key={todo.id}>
                    <h1>Title: {todo.title}</h1>
                    <p>Description: <strong> {todo.description}</strong> </p>
                    <hr />
                </div>
            ))}
        </div>
    )
}