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
          }
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
)
