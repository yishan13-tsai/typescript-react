import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/home'
import Login from './pages/login.tsx'
import Signup from './pages/signup.tsx'
import Order from './pages/order'
import OrderSuccess from './pages/orderSuccess'
import { ConfigProvider } from 'antd'
import zhTw from 'antd/locale/zh_TW'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-tw'
import Layout from './component/layout.tsx'
import { antdTheme } from './config/antdTheme.tsx'
import Rooms from './pages/room/index.tsx'
import DetailPage from './pages/detail/index.tsx'

const isProd = process.env.NODE_ENV === 'production'
dayjs.locale('zh-tw')

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <h1>Not Found</h1>,
      children: [
        { path: '/', element: <Home /> },
        { path: '/order', element: <Order /> },
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <Signup /> },
        { path: '/order', element: <Order /> },
        { path: '/orderSuccess', element: <OrderSuccess /> },
        { path: '/rooms', element: <Rooms /> },
        { path: '/rooms/detail', element: <DetailPage /> },
      ],
    },
    { path: '*', element: <h1>Not Found</h1> },
  ],
  { basename: isProd ? '/typescript-react' : undefined },
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={antdTheme} locale={zhTw}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
)
