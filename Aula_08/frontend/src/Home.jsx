import './App.css'
import './List'
import { useNavigate } from "react-router-dom"


function App() {

  const navigate = useNavigate() 

  const handleNavigateList = () => {
    navigate('/List')
  }

  return (
    <>
    <div style={{height: '100vh', width: '100vw', backgroundColor: 'Lavender', justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={{color: 'DarkMagenta'}}>Mercadinho</h1>
        <div style={{backgroundColor: 'white', height: '450px', width: '350px', borderRadius: '15px', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{color: 'DarkMagenta'}}>Cadastro de Produtos</h1>
            <span style={{fontWeight: 'bold'}}>Nome: </span><br></br>
            <input placeholder='Digite o nome:' style={{height: '30px', width: '300px', borderRadius: '5px', border: 0, backgroundColor: 'lavender'}}></input><br></br><br></br>
            <span style={{fontWeight: 'bold'}}>Descrição: </span><br></br>
            <input placeholder='Digite a descrição:' style={{height: '30px', width: '300px', borderRadius: '5px', border: 0, backgroundColor: 'lavender'}}></input><br></br><br></br>
            <span style={{fontWeight: 'bold'}}>Preço: </span><br></br>
            <input placeholder='Digite o preço em reais:' style={{height: '30px', width: '300px', borderRadius: '5px', border: 0, backgroundColor: 'lavender'}}></input><br></br><br></br>
            <span style={{fontWeight: 'bold'}}>Estoque: </span><br></br>
            <input placeholder='Digite a quantidade em estoque:' style={{height: '30px', width: '300px', borderRadius: '5px', border: 0, backgroundColor: 'lavender'}}></input><br></br><br></br>
            <span style={{fontWeight: 'bold'}}>Categoria: </span><br></br>
            <input placeholder='Digite a categoria:' style={{height: '30px', width: '300px', borderRadius: '5px', border: 0, backgroundColor: 'lavender'}}></input><br></br><br></br>
        </div>
        <br></br>
        <button onClick={handleNavigateList} style={{height: '50px', width: '100px', backgroundColor: 'DarkMagenta', color: 'white', borderRadius: '10px', border: 0}}>Cadastrar produto</button>
        <button onClick={handleNavigateList} style={{height: '50px', width: '100px', backgroundColor: 'DarkMagenta', color: 'white', borderRadius: '10px', border: 0}}>Listar produtos</button>
    </div>
    </>
  )
}

export default App
