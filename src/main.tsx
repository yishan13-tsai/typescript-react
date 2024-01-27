import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import Home from "./pages/home";
import Login from "./pages/login.tsx";
import Signup from "./pages/signup.tsx";
import Order from './Order.tsx'
import {ConfigProvider} from "antd";
import Rooms from './component/Room/Rooms.tsx'
import {antdTheme} from "./config/antdTheme.tsx";
import DetailPage from './component/Detail/DetailPage.tsx'
import Layout from "./component/layout.tsx";

const isProd = process.env.NODE_ENV === "production";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Not Found</h1>,
    children: [
      {path: '/', element: <Home />},
      {path: 'order', element: <Order />},
      {path: 'rooms', element: <Rooms />},
      {path: "/login", element: <Login />},
      {path: "/signup", element: <Signup />},
      {path: "/order", element: <Order />},
      {path: "/rooms", element: <Rooms />},
      {path: "/rooms/detail", element: <DetailPage />},
    ]
  },
  {path: "*", element: <h1>Not Found</h1>},
], {basename: isProd ? "/typescript-react" : undefined})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={antdTheme}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
)
