import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

function List() {

  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:8080/api/auth/product/products')
    setProducts(response.data.response)
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  const handleNavigateLogin = () => {
    navigate('/')
  }

  const handleNavigateCadastrar = () => {
    navigate('/products')
  }

  const deleteProduct = async (id) => {
    Swal.fire({
      title: "Deseja realmente deletar?",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try{
          await axios.delete(`http://localhost:8080/api/auth/product/delete/${id}`)
          Swal.fire("Deletado com sucesso!", "", "success");
          fetchProducts()
        }
        catch {
          Swal.fire("Erro!", "", "error");
        }
      }
    });
  }

  const updateProduct = (id) => {
    navigate(`/update/${id}`)
  }

  return (
    <div style={{ backgroundColor: 'lavender', minHeight: '100vh', padding: '20px' }}>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button 
          onClick={handleNavigateLogin} 
          style={{ backgroundColor: 'DarkMagenta', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Voltar
        </button>
        <button 
          onClick={handleNavigateCadastrar} 
          style={{ backgroundColor: 'DarkMagenta', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Novo Produto
        </button>
      </div>

      <h1 style={{ textAlign: 'center', color: 'DarkMagenta' }}>Lista de Produtos</h1><br></br>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <table style={{ borderCollapse: 'collapse', width: '90%', backgroundColor: 'white', overflow: 'hidden', borderRadius: '10px' }}>
          <thead>
            <tr style={{ backgroundColor: 'DarkMagenta', color: 'white' }}>
              <th style={{ padding: '10px' }}>Nome</th>
              <th>Preço</th>
              <th>Estoque</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {
              products.map((product) => {
                return (
                  <tr key={product._id} style={{ textAlign: 'center', borderBottom: '1px solid #ccc' }}>
                    <td style={{ padding: '10px' }}>{product.name}</td>
                    <td>R${product.price}</td>
                    <td>{product.stock}</td>
                    <td>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                        <img
                          onClick={() => updateProduct(product._id)}
                          style={{ backgroundColor: 'DarkMagenta', borderRadius: '5px', height: '25px', padding: '5px', cursor: 'pointer' }}
                          src='https://img.icons8.com/ios7/512/FFFFFF/edit--v2.png'
                          alt="Editar"
                        />
                        <img
                          onClick={() => deleteProduct(product._id)}
                          style={{ backgroundColor: 'DarkMagenta', borderRadius: '5px', height: '25px', padding: '5px', cursor: 'pointer' }}
                          src='https://img.icons8.com/ios11/512/FFFFFF/filled-trash.png'
                          alt="Excluir"
                        />
                      </div>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default List