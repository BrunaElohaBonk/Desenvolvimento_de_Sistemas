import '../App'
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import axios from 'axios'
import { useState } from 'react'

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

      return navigate('/')
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
                <input placeholder=' Digite o email:' style={{height: '30px', width: '350px', borderRadius: '5px', border: 0, backgroundColor: 'lavender'}}></input><br></br><br></br>
                <span style={{fontWeight: 'bold'}}>Senha: </span><br></br>
                <input placeholder=' Digite a senha' style={{height: '30px', width: '350px', borderRadius: '5px', border: 0, backgroundColor: 'lavender'}}></input><br></br><br></br>
            </div>
            
            <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '30px'}}>
              <button onClick={handleNavigateRegister} style={{height: '50px', width: '100px', backgroundColor: 'DarkMagenta', color: 'white', borderRadius: '10px', border: 0}}>Cadastrar</button>
              <button onClick={handleLogin} type='password' style={{height: '50px', width: '100px', backgroundColor: 'DarkMagenta', color: 'white', borderRadius: '10px', border: 0}}>Entrar</button>
            </div>
        </div>
        <br></br>
    </div>
    </>
  )
}

export default Login
