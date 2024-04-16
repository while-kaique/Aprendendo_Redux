import React from 'react'
import ReactDOM from 'react-dom/client'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import App from './App.jsx'

import CreateAccount from '../src/pages/CreateAccount.jsx'
import Products from '../src/pages/Products.jsx'
import Product from '../src/pages/Product.jsx'
import Login from './pages/Login.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path="/" element={<Products />}/>
          <Route path="/product/:id" element={<Product />}/>
        </Route> 
        <Route>
          <Route path="/register" element={<CreateAccount />}/>
          <Route path="/login" element={<Login />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
