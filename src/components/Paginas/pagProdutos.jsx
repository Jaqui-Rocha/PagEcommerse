import styled from "styled-components";
import React, {useState } from "react";
import Array from "../Produtos/index"

const Conteiner= styled.div`
font-family: 'Poppins', sans-serif;
`
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
`
const Column = styled.div`
  max-width: 33.3333%;
  flex: 0 0 33.3333%;
  padding: 0 0.5rem;
  margin-bottom: 1rem;
`
const Product = styled.div`
  position: relative;
`
const Image= styled.img`
 object-fit: contain;
  max-width: 100%;
`
const H1 = styled.div`
font-size: 40px;
font-weight: bold;
font-family: poppins;
display: flex;
flex: space-between;

> span {
   background: #6950A1;
   color: white;
}
`
// const Ul= styled.div`
// text-decoration: none;
// `
// const Li= styled.div`
// list-style-type: none;
// `
const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1rem;
  right: 1rem;
  background: #6a50a1ac;
  color: #fff;
  border: 0;
`
const Botao = styled.button`
background: #6950A1 ;
border-radius: 5px;
border:0;
font-size:16 px;
color: white;
padding:5px;

`
const Price = styled.div`
  font-size: 1rem;
  color: #313131;
  font-weight: bold;
`



export default function Produtos({changeTela, item = [],Count,addCarrinho}){
  const [p,setP]= useState(Array)
  
  return(
    <Conteiner>
      <H1>Produtos <span>{Count}</span></H1>
      <Row>
        {p.map(item => (
          <Column key={item.id}>
            <Product>
              <Image src={item.img} alt={item.nome} />
              <Button onClick={() => addCarrinho(p)}>Adicionar</Button>
              <Price>
                Valor: {item.valor}
              </Price>
            </Product>
          </Column>
        ))}
      </Row>
     
  
      <Botao onClick={()=> changeTela(1)} >Ir para Carrinho</Botao>
    </Conteiner>
    
  )
}


  