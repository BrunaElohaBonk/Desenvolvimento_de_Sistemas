import '../App'
import './Login'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Swal from 'sweetalert2'
import { useState } from 'react'

function UpdateProduto() {

  const navigate = useNavigate() 

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [category, setCategory] = useState("")

  const handleNavigateLogin = () => {
    navigate('/')
  }

  const update = async () => {
    try{
      await axios.put('http://localhost:8080/api/auth/product/update', { name, description, price, stock, category })
      setName("")
      setDescription("")
      setPrice("")
      setStock("")
      setCategory("")
      Swal.fire({
        title: "Sucesso!",
        text: "Produto atualizado com sucesso!",
        icon: "success"
      });
      return navigate('/list')
    }
    catch{
      Swal.fire({
        title: "Erro!",
        text: "Não foi possível alterar o produto",
        icon: "error"
      });
    }
  }

  return (
    <>
    <div style={{height: '100vh', width: '100vw', backgroundColor: 'Lavender', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{backgroundColor: 'white', height: '550px', width: '350px', borderRadius: '15px', padding: '20px'}}>
            <h1 style={{color: 'DarkMagenta', textAlign: 'center', marginTop: '30px'}}>Modificar Produto</h1><br></br>
            <div style={{marginTop: '20px'}}>
                <span style={{fontWeight: 'bold'}}>Nome: </span><br></br>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder=' Digite o nome:' style={{height: '30px', width: '350px', borderRadius: '5px', border: 0, backgroundColor: 'lavender'}}></input><br></br><br></br>
                <span style={{fontWeight: 'bold'}}>Descrição: </span><br></br>
                <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder=' Digite a descrição:' style={{height: '30px', width: '350px', borderRadius: '5px', border: 0, backgroundColor: 'lavender'}}></input><br></br><br></br>
                <span style={{fontWeight: 'bold'}}>Preço: </span><br></br>
                <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder=' Digite o preço em R$:' style={{height: '30px', width: '350px', borderRadius: '5px', border: 0, backgroundColor: 'lavender'}}></input><br></br><br></br>
                <span style={{fontWeight: 'bold'}}>Estoque: </span><br></br>
                <input value={stock} onChange={(e) => setStock(e.target.value)} placeholder=' Digite a quantidade em estoque:' style={{height: '30px', width: '350px', borderRadius: '5px', border: 0, backgroundColor: 'lavender'}}></input><br></br><br></br>
                <span style={{fontWeight: 'bold'}}>Categoria: </span><br></br>
                <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder=' Digite a categoria:' style={{height: '30px', width: '350px', borderRadius: '5px', border: 0, backgroundColor: 'lavender'}}></input><br></br><br></br>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '10px'}}>
              <button onClick={handleRegisterProduct} style={{height: '40px', width: '350px', backgroundColor: 'DarkMagenta', color: 'white', borderRadius: '10px', border: 0}}>Cadastrar produto</button>
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

export default UpdateProduto
