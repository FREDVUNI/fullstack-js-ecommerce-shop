import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import CheckOut from '../pages/CheckOut'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Product from '../pages/Product'
import Shop from '../pages/Shop'
import NotFound from '../pages/NotFound'

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="*" element={<NotFound title="Oops, Page Not Found."/>}/>
    </Routes>
  )
}

export default Routers