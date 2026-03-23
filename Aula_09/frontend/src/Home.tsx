import './App.css'
import { useNavigate } from "react-router-dom"


function CadastroUser() {

  const navigate = useNavigate() 

  const handleNavigateCadastro = () => {
    navigate('/CadastroUser')
  }

  const handleNavigateLogin = () => {
    navigate('/Login')
  }

  return (
    <>
    <div style={{height: '100vh', width: '100vw', backgroundColor: 'Lavender', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{backgroundColor: 'white', height: '450px', width: '350px', borderRadius: '15px', padding: '20px'}}>
            <h1 style={{color: 'DarkMagenta', textAlign: 'center', marginTop: '130px'}}>Olá. Seja bem-vindo!</h1><br></br>
            <h1 style={{color: 'black', textAlign: 'center', fontSize: '20px', marginTop: '60px'}}>O que deseja?</h1><br></br>

            <div style={{justifyContent: 'space-around', display: 'flex', marginTop: '20px'}}>
                <button onClick={handleNavigateLogin} style={{height: '50px', width: '100px', backgroundColor: 'DarkMagenta', color: 'white', borderRadius: '10px', border: 0}}>Fazer login</button>
                <button onClick={handleNavigateCadastro} style={{height: '50px', width: '100px', backgroundColor: 'DarkMagenta', color: 'white', borderRadius: '10px', border: 0}}>Cadastrar usuário</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default CadastroUser
