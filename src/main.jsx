import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import { App, Home , News , About, Shop, Product  , Bookings} from './Utils/ImportExport'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='/News' element={<News/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Shop' element={<Shop/>}></Route>
      <Route path='/Product' element={<Product/>}></Route>
      <Route path='/Bookings' element={<Bookings/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
  </React.StrictMode>,
)
