"use client";
import { useState } from "react"
import { createTodo } from "@/app/lib/actions"
export default function () {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setLoading(true);

        // create a FormData object to pass to the action
        const formData = new FormData(event.target);

        try {
            await createTodo(formData); // action function
        } catch (error) {
            console.error("Error creating todo:", error);
        } finally {
            setLoading(false); // Re-enable the button after request
        }
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" /> <br />
            <label htmlFor="description">Description</label>
            <input type="text" name="description" /> <br />
            <button type="submit" disabled={loading}>
                {loading ? "processing..." : "Create Todo"}
            </button>
        </form>
        </div>
    )
}