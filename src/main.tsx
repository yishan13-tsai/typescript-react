import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import { ConfigProvider } from "antd";
import Rooms from './component/Rooms.tsx'

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
    path: "/rooms",
    element: <Rooms />,
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
], { basename: isProd ? "/typescript-react" : undefined })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 可以來這個網站調整設定 https://ant.design/theme-editor#Style */}
    <ConfigProvider
      theme={{
        "token": {
          "colorPrimary": "#bf9d7d",
          "colorInfo": "#bf9d7d",
          "colorPrimaryHover": "#7b6651",
          "colorPrimaryBorder": "#bf9d7d"
        },
        // "components": {
        //   "Button": {
        //     "defaultBorderColor": "rgb(191, 157, 125)",
        //     "defaultColor": "rgb(191, 157, 125)",
        //     "borderColorDisabled": "rgb(144, 144, 144)",
        //     "colorTextDisabled": "rgb(144, 144, 144)",
        //     "colorBgContainerDisabled": "rgb(255, 255, 255)"
        //   }
        // }
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
)
