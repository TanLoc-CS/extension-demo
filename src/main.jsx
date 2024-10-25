import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Page1 from './pages/page-1.jsx'
import Page2 from './pages/page-2.jsx'
import Page3 from './pages/page-3.jsx'
import Page4 from './pages/page-4.jsx'

import './index.css'
const router = createBrowserRouter([
  {
    element: <App/>,
    path: '/'
  },
  {
    element: <Page1/>,
    path: 'page-1'
  },
  {
    element: <Page2/>,
    path: 'page-2'
  },
  {
    element: <Page3/>,
    path: 'page-3'
  },
  {
    element: <Page4/>,
    path: 'page-4'
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
