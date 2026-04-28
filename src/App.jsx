import { useState } from 'react'
import './App.css'
import AllProducts from './components/AllProducts'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductsCart from './components/ProductsCart'
import State from './components/State'
import { ToastContainer } from 'react-toastify'
import Cart from './components/Cart'

function App() {

  const [carts, setCarts] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(false)

  return (
    <>

      <Navbar carts={carts}></Navbar>
      <Hero></Hero>
      <State></State>
      <AllProducts carts={carts} toggleBtn={toggleBtn} setToggleBtn={setToggleBtn}></AllProducts>
      <div className={`${toggleBtn && 'hidden'}`}>
        <ProductsCart carts={carts} setCarts={setCarts} ></ProductsCart>
      </div>

      <div className={`${toggleBtn?'':'hidden'}`}>
        <Cart carts={carts}></Cart>
      </div>


      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
