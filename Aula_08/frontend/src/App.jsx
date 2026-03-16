import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [produts, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:8080/api/product/products')
    setProducts(response.data.response)
  }

  useEffect(() => {
    fetchProducts();
  },[])

  return (
    <>
    {
      produts.map((produt) => {
        return(
        <div key={produt._id}>
          <span>{produt.name}</span><br></br>
          <span>{produt.price}</span>
        </div>
      )})
    }
    </>
  )
}

export default App
