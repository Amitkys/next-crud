
// app/todos/create/page.tsx
"use client";
import React, { useState } from "react"
import { createTodo } from "@/app/lib/actions"
//toast
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function () {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        // create a FormData object to pass to the action
        const formData = new FormData(event.target as HTMLFormElement);

        try {
            await createTodo(formData); // action function
            toast.success('Todo list is added');
        } catch (error: any) {
            toast.error('Something went wrong!');
        } finally {
            setLoading(false); // Re-enable the button after request
        }
    }
    return (
        <div>
        <form onSubmit={handleSubmit} method="POST">
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
