import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './pages/dashboard/App.jsx'
import LandingPage from './pages/landing_page/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import { ThemeProvider } from "@material-tailwind/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
