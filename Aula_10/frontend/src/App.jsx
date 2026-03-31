import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import List from './pages/List'
import CadastroProduto from './pages/CadastroProduto'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/products' element={<CadastroProduto/>}></Route>
        <Route path='/list' element={<List/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
