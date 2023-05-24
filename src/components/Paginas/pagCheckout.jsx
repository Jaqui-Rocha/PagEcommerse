import styled from "styled-components"
const Botao = styled.button`
background: #6950A1 ;
border-radius: 5px;
border:0;
font-size:16 px;
color: white;
padding:5px;
`
export default function Checkout({changeTela}){
    return(
<>
<h1>Checkout</h1>
      <Botao onClick={()=> changeTela(0)} >Comprar</Botao>
</>
      
    )
  }
