import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import Index from "./pages/home";
import Login from "./pages/login.tsx";
import Signup from "./pages/signup.tsx";

const isProd = process.env.NODE_ENV === "production";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <h1>Not Found</h1>
  },
], {basename: isProd ? "/typescript-react" : undefined})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
