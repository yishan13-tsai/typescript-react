import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import Home from "./pages/home";
import Login from "./pages/login.tsx";
import Signup from "./pages/signup.tsx";
import Order from './Order.tsx'
import { ConfigProvider } from "antd";
import Rooms from './pages/Room/Rooms.tsx'
import { antdTheme } from "./config/antdTheme.tsx";
import DetailPage from './pages/Detail/DetailPage.tsx'

const isProd = process.env.NODE_ENV === "production";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "/order",
    element: <Order />,
  },
  {
    path: "/rooms",
    element: <Rooms />,
  },
  {
    path: "/rooms/detail",
    element: <DetailPage />,
  },
  {
    path: "*",
    element: <h1>Not Found</h1>
  },
], { basename: isProd ? "/typescript-react" : undefined })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={antdTheme}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
)
