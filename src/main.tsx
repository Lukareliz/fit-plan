import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Workouts from './routes/Workouts/Index'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Workouts />
  },
  {
    path:"/exercises",
    element: <Workouts /> //teste
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
