import './App.css'
import AllProducts from './components/AllProducts'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductsCart from './components/ProductsCart'
import State from './components/State'

function App() {

  return (
    <>
      
        <Navbar></Navbar>
        <Hero></Hero>
        <State></State>
        <AllProducts></AllProducts>
        <ProductsCart></ProductsCart>


    </>
  )
}

export default App
