import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Homepage from './pages/Homepage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'
import NotFound from './pages/NotFound'
import SingoloProdotto from './pages/SingoloProdotto'

function App() {
  const [count, setCount] = useState(0)

  // http://localhost:5173/prodotti => /prodotti/2

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/chi-siamo' element={<ChiSiamo/>}/>
            <Route path='/prodotti' element={<Prodotti/>}/>
            <Route path='/prodotti/:samuel' element={<SingoloProdotto/>}/>
            <Route path='*' element={<NotFound/>}/>

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
