import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import Home from "./pages/home";
import Login from "./pages/login.tsx";
import Signup from "./pages/signup.tsx";
import Order from './pages/order'
import OrderSuccess from './pages/orderSuccess'
import { ConfigProvider } from "antd";

import Layout from "./component/layout.tsx";
import { antdTheme } from "./config/antdTheme.tsx";
import Rooms from './pages/room/index.tsx';
import DetailPage from './pages/detail/index.tsx';
import zhTW from 'antd/locale/zh_TW';


const isProd = process.env.NODE_ENV === "production";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Not Found</h1>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/order', element: <Order /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/order", element: <Order /> },
      { path: "/orderSuccess", element: <OrderSuccess /> },
      { path: "/rooms", element: <Rooms /> },
      { path: "/rooms/detail", element: <DetailPage /> }]
  },
  { path: "*", element: <h1>Not Found</h1> },
], { basename: isProd ? "/typescript-react" : undefined })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={antdTheme} locale={zhTW}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
)
