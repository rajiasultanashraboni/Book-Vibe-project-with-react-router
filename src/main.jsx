import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Component/Root';
import ErrorPage from './Component/ErrorPage';
import Home from './Component/Home';
import DashBoard from './Component/DashBoard';
import BookDetails from './Component/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/books/:bookId',
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('booksData.json')
      },
      {
        path:'/dashboard',
        element:<DashBoard></DashBoard>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
