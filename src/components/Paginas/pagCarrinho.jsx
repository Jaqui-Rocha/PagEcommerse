import styled from "styled-components"
const Botao = styled.button`
background: #6950A1 ;
border-radius: 5px;
border:0;
font-size:16 px;
color: white;
padding:5px;
`
export default function Carrinho({changeTela}){
    return(
        <>
        <h1>Carrinho</h1>
        <Botao onClick={()=> changeTela(0)} >Continuar Comprando</Botao>
        <Botao onClick={()=> changeTela(2)} >Finalizar Compra</Botao>
        </>
      
    )
  }
