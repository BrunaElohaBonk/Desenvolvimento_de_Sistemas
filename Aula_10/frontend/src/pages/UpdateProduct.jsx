import { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2';

export const UpdateProduct = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [stock, setStock] = useState(0)
  const [price, setPrice] = useState(0)
  const navigate = useNavigate();
  const { id } = useParams()

  const getProductData = async (id) => {
    try{
    const response = await axios.get(`http://localhost:8080/api/auth/product/product/${id}`)
      setName(response.data.name)
      setCategory(response.data.category)
      setPrice(response.data.price)
      setStock(response.data.stock)
      setDescription(response.data.description)
    }
    catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    getProductData(id)
  }, [])

  const handleNavigateList = () => {
    navigate('/list')
  }

  const update = async () => {
    Swal.fire({
      title: "Deseja realmente atualizar?",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.put(`http://localhost:8080/api/auth/product/update/${id}`,
            {
              name: name,
              description: description,
              price: price,
              stock: stock,
              category: category
            }
          )
          Swal.fire("Atualizado com sucesso!", "", "success");
          navigate('/list')
        }
        catch(e) {
          Swal.fire("Erro!", "", "error");
        }
      }
    });
  }

  return (
    <div style={{height: '100vh', width: '100vw', backgroundColor: 'Lavender', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{backgroundColor: 'white', height: '550px', width: '350px', borderRadius: '15px', padding: '20px'}}>
            <h1 style={{color: 'DarkMagenta', textAlign: 'center', marginTop: '20px'}}>Atualizar Produto</h1><br></br>
            <div style={{marginTop: '30px'}}>
                <span style={{fontWeight: 'bold'}}>Nome: </span><br></br>
                <input value={name} onChange={(e) => setName(e.target.value)} style={{height: '30px', width: '350px', borderRadius: '5px', border: 0, backgroundColor: 'lavender'}}></input><br></br><br></br>
                <span style={{fontWeight: 'bold'}}>Descrição: </span><br></br>
                <input value={description} onChange={(e) => setDescription(e.target.value)} style={{height: '30px', width: '350px', borderRadius: '5px', border: 0, backgroundColor: 'lavender'}}></input><br></br><br></br>
                <span style={{fontWeight: 'bold'}}>Categoria: </span><br></br>
                <input value={category} onChange={(e) => setCategory(e.target.value)} style={{height: '30px', width: '350px', borderRadius: '5px', border: 0, backgroundColor: 'lavender'}}></input><br></br><br></br>
                <span style={{fontWeight: 'bold'}}>Estoque: </span><br></br>
                <input value={stock} onChange={(e) => setStock(e.target.value)} style={{height: '30px', width: '350px', borderRadius: '5px', border: 0, backgroundColor: 'lavender'}}></input><br></br><br></br>
                <span style={{fontWeight: 'bold'}}>Preço: </span><br></br>
                <input value={price} onChange={(e) => setPrice(e.target.value)} style={{height: '30px', width: '350px', borderRadius: '5px', border: 0, backgroundColor: 'lavender'}}></input><br></br><br></br>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '15px'}}>
              <button onClick={update} style={{height: '40px', width: '350px', backgroundColor: 'DarkMagenta', color: 'white', borderRadius: '10px', border: 0}}>Atualizar</button>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '10px'}}>
              <button onClick={handleNavigateList} style={{height: '40px', width: '350px', backgroundColor: 'DarkMagenta', color: 'white', borderRadius: '10px', border: 0}}>Voltar</button>
            </div>
        </div>
        <br></br>
    </div>
  )
}