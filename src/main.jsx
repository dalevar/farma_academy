import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'


import Header from './components/layouts/Header.jsx'
import Footer from './components/layouts/Footer.jsx'

import Dashboard from './pages/dashboard/App.jsx'
import LandingPage from './pages/landing_page/App.jsx'

// import { ThemeProvider } from "@material-tailwind/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ThemeProvider> */}
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-auto'>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
    {/* </ThemeProvider> */}
  </React.StrictMode>,
)
