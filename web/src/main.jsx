import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

//pages
 import Home from './routes/Home'
 import NewTask from './routes/NewTask'

const router = createBrowserRouter([
  {
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "new",
        element: <NewTask/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
