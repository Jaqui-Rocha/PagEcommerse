import styled from "styled-components";
import nome from "../Produtos/index"
import img from "../Produtos"
import valor from "../Produtos"
import id from "../Produtos"
import React, { useEffect, useState } from "react";

import id1 from "../Imagens/imagens/BATTLEFIELD.svg"
const Conteiner= styled.div`
font-family: 'Poppins', sans-serif;
`

const Image= styled.img``
const Header = styled.div`
font-size: 40px;
font-weight: bold;
font-family: poppins;
`
const Ul= styled.div`
text-decoration: none;
`
const Li= styled.div`
list-style-type: none;
`
  



export default function Produtos({changeTela}){
  return(
    <Conteiner>
      <h1>Produtos</h1>
      <button onClick={()=> changeTela(1)} >Ir para Carrinho</button>
    </Conteiner>
    
  )
}


  