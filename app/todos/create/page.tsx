
import { createTodo } from "@/app/lib/actions"
export default function () {
    return (
        <div>
        <form action={createTodo}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" /> <br />
            <label htmlFor="description">Description</label>
            <input type="text" name="description" /> <br />
            <label htmlFor="id">Id</label>
            <input type="text" name="id" /><br />
            <button type="submit">CreateTodo</button>
        </form>
        </div>
    )
}