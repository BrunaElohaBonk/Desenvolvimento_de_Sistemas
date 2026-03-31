import '../App'
import { useNavigate } from "react-router-dom"
import Register from './Register'
import Login from './Login'

function Home() {

  const navigate = useNavigate() 

  const handleNavigateCadastro = () => {
    navigate('/products')
  }

  const handleNavigateList = () => {
    navigate('/list')
  }

  return (
    <>
    <div style={{height: '100vh', width: '100vw', backgroundColor: 'Lavender', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{backgroundColor: 'white', height: '450px', width: '350px', borderRadius: '15px', padding: '20px'}}>
            <h1 style={{color: 'DarkMagenta', textAlign: 'center', marginTop: '130px'}}>Olá. Seja bem-vindo!</h1><br></br>
            <h1 style={{color: 'black', textAlign: 'center', fontSize: '20px', marginTop: '60px'}}>O que deseja?</h1><br></br>

            <div style={{justifyContent: 'space-around', display: 'flex', marginTop: '20px'}}>
                <button onClick={handleNavigateCadastro} style={{height: '50px', width: '100px', backgroundColor: 'DarkMagenta', color: 'white', borderRadius: '10px', border: 0}}>Cadastrar produto</button>
                <button onClick={handleNavigateList} style={{height: '50px', width: '100px', backgroundColor: 'DarkMagenta', color: 'white', borderRadius: '10px', border: 0}}>Listar produtos</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home
