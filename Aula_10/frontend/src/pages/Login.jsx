import '../App'
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Register from './Register'

function Login() {

  const navigate = useNavigate() 

  const handleNavigateRegister = () => {
    navigate('/register')
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    try{
      const response = await axios.post('http://localhost:8080/api/auth/login', { email, password })
      
      sessionStorage.getItem('token', response.data.token)

      setEmail("")
      setPassword("")
      Swal.fire({
        title: "Sucesso!",
        text: "Login efetuado com sucesso!",
        icon: "success"
      });

      return navigate('/list')
    }
    catch(e){
      console.log(e)
      Swal.fire({
        title: "Erro!",
        text: "Não foi possível encontrar o usuário",
        icon: "error"
      });
    }
  }

  return (
    <>
    <div style={{height: '100vh', width: '100vw', backgroundColor: 'Lavender', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{backgroundColor: 'white', height: '450px', width: '350px', borderRadius: '15px', padding: '20px'}}>
            <h1 style={{color: 'DarkMagenta', textAlign: 'center', marginTop: '50px'}}>Login</h1><br></br>
            <div style={{marginTop: '30px'}}>
                <span style={{fontWeight: 'bold'}}>Email: </span><br></br>
                <input onChange={(e) => setEmail(e.target.value)} placeholder=' Digite o email:' style={{height: '30px', width: '350px', borderRadius: '5px', border: 0, backgroundColor: 'lavender'}}></input><br></br><br></br>
                <span style={{fontWeight: 'bold'}}>Senha: </span><br></br>
                <input onChange={(e) => setPassword(e.target.value)} placeholder=' Digite a senha' style={{height: '30px', width: '350px', borderRadius: '5px', border: 0, backgroundColor: 'lavender'}}></input><br></br><br></br>
            </div>
            
            <div style={{marginTop: '15px'}}>
              <button onClick={handleLogin} type='password' style={{height: '40px', width: '350px', backgroundColor: 'DarkMagenta', color: 'white', borderRadius: '10px', border: 0}}>Entrar</button>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', marginTop: '40px', alignItems: 'center', justifyContent: 'center'}}>
              <p style={{fontWeight: 'bold'}}>
                Não tem cadastro?
              </p>
              <button onClick={handleNavigateRegister} style={{marginTop: '10px', height: '40px', width: '350px', backgroundColor: 'DarkMagenta', color: 'white', borderRadius: '10px', border: 0}}>Cadastre-se aqui</button>
            </div>
        </div>
        <br></br>
    </div>
    </>
  )
}

export default Login
