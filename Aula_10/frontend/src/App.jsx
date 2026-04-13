import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import List from './pages/List'
import CadastroProduto from './pages/CadastroProduto'
import { UpdateProduct } from './pages/UpdateProduct' 

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/products' element={<CadastroProduto/>}></Route>
        <Route path='/update/:id' element={<UpdateProduct/>}></Route>
        <Route path='/list' element={<List/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
