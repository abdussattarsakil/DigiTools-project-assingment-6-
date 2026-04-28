import { useState } from 'react'
import './App.css'
import AllProducts from './components/AllProducts'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductsCart from './components/ProductsCart'
import State from './components/State'
import { ToastContainer } from 'react-toastify'

function App() {

  const [carts,setCarts]=useState([]);

  return (
    <>
      
        <Navbar carts={carts}></Navbar>
        <Hero></Hero>
        <State></State>
        <AllProducts carts={carts}></AllProducts>
        <ProductsCart carts={carts} setCarts={setCarts}></ProductsCart>

        <ToastContainer></ToastContainer>
    </>
  )
}

export default App
