import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [products, setProducts] = useState<any[]>([]);
  const [view, setView] = useState<"cadastro" | "lista">("cadastro");

  // Campos do formulário
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");

  // URL da API
  const API_URL = "http://localhost:8080/api/product";

  // Listar produtos
  function getProducts() {
    axios.get(API_URL)
      .then(res => setProducts(res.data))
      .catch(err => console.error("Erro ao listar produtos:", err));
  }

  useEffect(() => {
    getProducts();
  }, []);

  // Adicionar produto
  function addProduct() {
    axios.post(API_URL, {
      name, description, price, stock, category
    })
    .then(() => {
      alert("Produto cadastrado com sucesso!");
      setName(""); setDescription(""); setPrice(""); setStock(""); setCategory("");
      getProducts();
    })
    .catch(err => {
      alert("Erro ao cadastrar produto!");
      console.error(err);
    });
  }

  // Deletar produto
  function deleteProduct(id: string) {
    axios.delete(`${API_URL}/${id}`)
      .then(() => getProducts())
      .catch(err => console.error("Erro ao deletar produto:", err));
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {view === "cadastro" && (
          <>
            <h1>Cadastro de Produtos</h1>

            <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} style={styles.input}/>
            <input placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} style={styles.input}/>
            <input placeholder="Preço" value={price} onChange={e => setPrice(e.target.value)} style={styles.input}/>
            <input placeholder="Estoque" value={stock} onChange={e => setStock(e.target.value)} style={styles.input}/>
            <input placeholder="Categoria" value={category} onChange={e => setCategory(e.target.value)} style={styles.input}/>

            <button onClick={addProduct} style={styles.button}>Cadastrar Produto</button>
            <button onClick={() => setView("lista")} style={{...styles.button, marginTop:"10px", backgroundColor:"#1e293b"}}>
              Listar Produtos
            </button>
          </>
        )}

        {view === "lista" && (
          <>
            <h1>Lista de Produtos</h1>

            {products.map(p => (
              <div key={p._id} style={styles.card}>
                <div>
                  <strong>{p.name}</strong><br/>
                  {p.description}<br/>
                  Preço: R$ {p.price}<br/>
                  Estoque: {p.stock}<br/>
                  Categoria: {p.category}
                </div>
                <button style={styles.deleteButton} onClick={() => deleteProduct(p._id)}>Excluir</button>
              </div>
            ))}

            <button onClick={() => setView("cadastro")} style={{...styles.button, marginTop:"20px", backgroundColor:"#1e293b"}}>
              Voltar ao Cadastro
            </button>
          </>
        )}

      </div>
    </div>
  );
}

const styles: any = {
  page: { backgroundColor: "#0f172a", width: "100vw", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "Arial" },
  container: { backgroundColor: "white", padding: "40px", borderRadius: "10px", width: "90%", maxWidth: "600px", display: "flex", flexDirection: "column", gap: "10px", textAlign: "center" },
  input: { padding: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "100%", boxSizing: "border-box" },
  button: { padding: "12px", backgroundColor: "#0f172a", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" },
  card: { backgroundColor: "#e2e8f0", padding: "10px", borderRadius: "5px", marginTop: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left" },
  deleteButton: { backgroundColor: "#1e293b", color: "white", border: "none", padding: "6px 10px", borderRadius: "5px", cursor: "pointer" }
};

export default App;