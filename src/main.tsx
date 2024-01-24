import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'

const isProd = process.env.NODE_ENV === "production";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/about",
        element: <h1>About</h1>,
    },
    {
        path: "/users",
        element: <h1>Users</h1>,
    },
    {
        path: "*",
        element: <h1>Not Found</h1>,
    },
], {basename: isProd ? "/typescript-react" : undefined})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
