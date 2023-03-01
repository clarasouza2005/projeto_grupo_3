import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';


import Home from './routes/Home';
import Planos from './routes/Planos';
import Login from './routes/Login'
import Cadastro from './routes/Cadastro'
import Produtos from './routes/Produtos/Produtos'


const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        //Vira a URL padrao 
        path: "*",
        element: <Home />
      },
      {
        path: "/planos",
        element: <Planos />
      },
      {
        path:"/produtos",
        element:<Produtos/>
      },
      {
        path: "/login",
        element:<Login />
      },
      {
        path: "/cadastro",
        element:<Cadastro/>
      },
      // {
      //   path: "/delete",
      //   element: <Delete />
      // }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
