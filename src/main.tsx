import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import Home from "./pages/home";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
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
      { path: 'detail', element: <DetailPage /> },
    ]
  },
  {
    path: "/detail",
    element: <DetailPage />,
  },
  {
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
    path: "*",
    element: <h1>Not Found</h1>
  },
], { basename: isProd ? "/typescript-react" : undefined })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        "token": {
          "colorPrimary": "#bf9d7d",
          "colorInfo": "#bf9d7d",
          "colorPrimaryHover": "#7b6651",
          "colorPrimaryBorder": "#bf9d7d",
          "fontSize": 16,
          "borderRadius": 8,
          "colorError": "#da3e51",
          "colorSuccess": "#52dd7e"
        },
        "components": {
          "Button": {
            "defaultBorderColor": "rgb(191, 157, 125)",
            "defaultColor": "rgb(191, 157, 125)",
            "borderColorDisabled": "rgb(144, 144, 144)",
            "colorTextDisabled": "rgb(144, 144, 144)",
            "colorBgContainerDisabled": "rgb(255, 255, 255)"
          },
          "Input": {
            "inputFontSize": 16,
            "paddingBlock": 16,
            "paddingInline": 16,
            "fontSize": 16,
            "lineWidth": 1,
            "colorText": "rgb(75, 75, 75)",
            "colorTextPlaceholder": "rgb(144, 144, 144)",
            "colorError": "rgb(218, 62, 81)",
            "colorErrorText": "rgb(218, 62, 81)",
            "colorBorder": "rgba(217, 217, 217, 0)",
            "colorPrimaryActive": "rgb(191, 157, 112)",
            "colorPrimaryHover": "rgb(191, 157, 112)",
            "colorBgContainer": "#FFFFFF"
          },
          "Steps": {
            "colorText": "#FFFFFF"
          }
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
)
