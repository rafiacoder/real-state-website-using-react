import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import './index.css'
import Layout from './layout'
import RealEstate from './components/realestate/realstate'
import Property from './components/property/property'
import Page from './components/pages/page'
import Contactus from './components/home/contactus'
import Homelayout from './components/home/homelayout'
import Blog from './components/blog/blog'
import Gallery from './components/gallery/gallery'

const router=createBrowserRouter([ 
  {
    path: '/',
    element: <Layout />,
   children: [
     {path: '/', element: <Homelayout />},
    {path: '/real-estate', element: <RealEstate />},
    {path: '/property', element: <Property />},
     {path: '/pages', element: <Page />},
      {path: '/contact', element: <Contactus />},
      {path: '/blog', element: <Blog />},
      {path: '/gallery', element: <Gallery />},
    
    

    ]
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
