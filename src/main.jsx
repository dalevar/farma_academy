import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ThemeProvider> */}
    {/* <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-auto'>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div> */}
    {/* </ThemeProvider> */}

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
