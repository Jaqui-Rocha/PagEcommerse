import Layout from "./components/Paginas/Layout"
import Produtos from "./components/Paginas/pagProdutos"
import Carrinho from "./components/Paginas/pagCarrinho"
import Checkout from "./components/Paginas/pagCheckout"
import { useState } from "react"
//import  Array from "./components/Produtos"
export const TELAS = {
PAGPRODUTOS:0,
PAGCARRINHO:1,
PAGCHECKOUNT:2
}

  export default function App(){
const [tela,setTela]= useState(TELAS.PAGPRODUTOS)
const [p,setP]= useState(Array)
  return (
      
        <Layout>
         
          {tela===TELAS.PAGPRODUTOS &&<Produtos changeTela={setTela}/>}
          
          {tela===TELAS.PAGCARRINHO &&<Carrinho changeTela={setTela}/>}
          {tela===TELAS.PAGCHECKOUNT &&<Checkout changeTela={setTela}/>}
        </Layout>
        
      
  ) 
  }


