import './App.css'
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import CadastroUser from './CadastroUser'
import Login from './Login'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/CadastroUser' element={<CadastroUser />} />
      <Route path='/Login' element={<Login />}></Route>
    </Routes>
    </>
  )
}

export default App
