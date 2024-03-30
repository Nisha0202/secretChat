import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root';
import Entry from './pages/Entry';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import SecretSpace from './pages/SecretSpace';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Entry/>,
  },
  {
    path: "/space",
    element: <SecretSpace/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
