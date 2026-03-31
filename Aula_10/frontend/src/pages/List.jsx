import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function List() {

  const [produts, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:8080/api/auth/product/products')
    setProducts(response.data.response)
  }

  useEffect(() => {
    fetchProducts();
  },[])

  const navigate = useNavigate() 

  const handleNavigateHome = () => {
    navigate('/home')
  }

  return (
    <>
    <div style={{height: '100vh', width: '100vw', backgroundColor: 'Lavender', justifyContent: 'center', alignItems: 'center'}}>
        <button onClick={handleNavigateHome} style={{margin: '15px', height: '50px', width: '100px', backgroundColor: 'DarkMagenta', color: 'white', borderRadius: '10px', border: 0}}>Voltar</button>
        <div>
            <h1 style={{color: 'DarkMagenta', textAlign: 'center'}}>Lista de Produtos</h1>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '40px'}}>
            {
                produts.map((produt) => {
                return(
                    <div style={{backgroundColor: 'white', height: '220px', width: '300px', borderRadius: '10px', padding: '15px'}}>
                        <div key={produt._id}>
                            <span style={{fontWeight: 'bold', justifyContent: 'center', display: 'flex', fontSize: '20px'}}>{produt.name}</span><br></br><br></br>
                            <span style={{fontWeight: 'bold'}}>Descrição: </span><span>{produt.description}</span><br></br><br></br>
                            <span style={{fontWeight: 'bold'}}>Preço: </span><span>R${produt.price}</span><br></br><br></br>
                            <span style={{fontWeight: 'bold'}}>Categoria: </span><span>{produt.category}</span><br></br><br></br>
                            <span style={{fontWeight: 'bold'}}>Estoque: </span><span>{produt.stock}</span><br></br><br></br>
                        </div>
                    </div>
                )})
            }
        </div>
      </div>
    </>
  )
}

export default List
