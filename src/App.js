import React from 'react'
import Main from './Components/Main'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Menu from './Pages/Menu'
import Bolalar from './Pages/Bolalar'
import Filiallar from './Pages/Filiallar'
import Error404 from './Pages/Error404'
import Home from './Pages/Home'
import { CartProvider } from "react-use-cart"
import Headers from './Components/Headers'
import HeaderMain from './Components/HeaderMain'
import Korzina from './Pages/Korzina'

function App() {
  return (
    <>
    {/* <Home/> */}
<CartProvider>
      <Headers/>
      <Routes>

        <Route path='/' element={<Home/>}/>
  
        <Route path='menu' element={<Menu/>}/>
        <Route path='bolalar' element={<Bolalar/>}/>
        <Route path='filiallar' element={<Filiallar/>}/>
        <Route path='korzina' element={<Korzina/>}/>
        <Route path='*' element={<Error404/>}/>
  
      </Routes>
</CartProvider>

    </>
  )
}

export default App