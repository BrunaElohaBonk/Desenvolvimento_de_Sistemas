import '../App'
import './Login'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Swal from 'sweetalert2'
import { useState } from 'react'

function Register() {

  const navigate = useNavigate() 

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleNavigateLogin = () => {
    navigate('/')
  }

  const handleRegister = async () => {
    try{
      await axios.post('http://localhost:8080/api/auth/register', { name, email, password })
      setName("")
      setEmail("")
      setPassword("")
      Swal.fire({
        title: "Sucesso!",
        text: "Usuário cadastrado com sucesso!",
        icon: "success"
      });
      return navigate('/')
    }
    catch{
      Swal.fire({
        title: "Erro!",
        text: "Não foi possível registrar o usuário",
        icon: "error"
      });
    }
  }

  return (
    <>
    <div style={{height: '100vh', width: '100vw', backgroundColor: 'Lavender', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{backgroundColor: 'white', height: '470px', width: '350px', borderRadius: '15px', padding: '20px'}}>
            <h1 style={{color: 'DarkMagenta', textAlign: 'center', marginTop: '50px'}}>Cadastro de Usuários</h1><br></br>
            <div style={{marginTop: '30px'}}>
                <span style={{fontWeight: 'bold'}}>Nome: </span><br></br>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder=' Digite o nome:' style={{height: '30px', width: '350px', borderRadius: '5px', border: 0, backgroundColor: 'lavender'}}></input><br></br><br></br>
                <span style={{fontWeight: 'bold'}}>Email: </span><br></br>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder=' Digite o email:' style={{height: '30px', width: '350px', borderRadius: '5px', border: 0, backgroundColor: 'lavender'}}></input><br></br><br></br>
                <span style={{fontWeight: 'bold'}}>Senha: </span><br></br>
                <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder=' Digite a senha' style={{height: '30px', width: '350px', borderRadius: '5px', border: 0, backgroundColor: 'lavender'}}></input><br></br><br></br>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '30px'}}>
              <button onClick={handleRegister} style={{height: '40px', width: '350px', backgroundColor: 'DarkMagenta', color: 'white', borderRadius: '10px', border: 0}}>Cadastrar</button>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '10px'}}>
              <button onClick={handleNavigateLogin} style={{height: '40px', width: '350px', backgroundColor: 'DarkMagenta', color: 'white', borderRadius: '10px', border: 0}}>Voltar</button>
            </div>
        </div>
        <br></br>
    </div>
    </>
  )
}

export default Register
