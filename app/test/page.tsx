"use client";
import React from "react";
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function () {
    const notify = () => toast.error('Hello');
    return(
        <div>
            <button onClick={notify}>Notification</button>
            <ToastContainer transition={Slide} theme="dark" autoClose={3000} />
        </div>
    )
}