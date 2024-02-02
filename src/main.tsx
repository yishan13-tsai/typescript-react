import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/home';
import Login from './pages/login/login.tsx';
import Signup from './pages/signup.tsx';
import Order from './pages/order';
import OrderSuccess from './pages/orderSuccess';
import { ConfigProvider } from 'antd';
import locale from 'antd/locale/zh_TW';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-tw';
import updateLocale from "dayjs/plugin/updateLocale";
import { antdTheme } from './config/antdTheme.tsx';
import { store } from './store.ts';
import { Provider } from 'react-redux';
import Layout from './component/Layout.tsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rooms from './pages/room/index.tsx';
import Detail from './pages/detail/index.tsx';

 /* @ts-ignore */
const isProd = process.env.NODE_ENV === 'production'
dayjs.extend(updateLocale);
dayjs.updateLocale("zh-tw", {
  weekStart: 0
});

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
        { path: '/rooms/detail', element: <Detail /> }
      ]
    },
    { path: '*', element: <h1>Not Found</h1> }
  ],
  { basename: isProd ? '/typescript-react' : undefined }
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={antdTheme} locale={locale}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
)
