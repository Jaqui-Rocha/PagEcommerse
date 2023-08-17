import Layout from "./components/Paginas/Layout"
import Produtos from "./components/Paginas/pagProdutos"
import Carrinho from "./components/Paginas/pagCarrinho"
import Checkout from "./components/Paginas/pagCheckout"
import { useState } from "react"
import p from "../src/components/Produtos"

export const TELAS = {
PAGPRODUTOS:0,
PAGCARRINHO:1,
PAGCHECKOUNT:2
}

  export default function App(){
const [tela,setTela]= useState(TELAS.PAGPRODUTOS)
const [products, setProducts] = useState(p)
const [cart, setCart] = useState([])
const excluirDoCarrinho = (identificador) => {
  setProducts(products.filter(item => item.id !== identificador))
}

const addCarrinho = (products) => {
  const productExists = cart.find(item => item.id === products.id)

  if (productExists) return

  setCart([...cart, {
    ...products,
    qtd: 1
  }]);
}

  return (
      
        <Layout>
         
          {tela===TELAS.PAGPRODUTOS &&(
        <Produtos
          products={products}
          qtdProductsCart={cart.length}
          addCarrinho={addCarrinho}
          changeTela={setTela}
        />
      )}
          
          {tela===TELAS.PAGCARRINHO &&
          (<Carrinho 
          changeTela={setTela}
          cart={cart}/>)}
          {tela===TELAS.PAGCHECKOUNT &&(
          <Checkout 
          changeTela={setTela}
          cart={cart}
          />
          )}
        </Layout>
        
      
  ) 
  }


