import styled from "styled-components";
import nome from "../Produtos/index"
import img from "../Produtos"
import valor from "../Produtos"
import id from "../Produtos"
import React, { useEffect, useState } from "react";
// import id from "../Produtos/index/battlefield"
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
  


function PagProdutos() {
  const [produtos, setProdutos] = useState([]);
useEffect(()=> {
  setProdutos([{nome},{img},{id},{valor}])
},[]);

   function renderizaDados() {
 
     return( 
     <div>
      {produtos.map((item,id) => (    
     <Ul key={id}>
          <Li>{item}</Li>          
       </Ul>
    ))
   }
   </div>
     )
   }
  return (
    <Conteiner>
      <Header>Produtos </Header>

      <Image src={id1}/>
      {/* {renderizaDados()} */}
    </Conteiner>
  );
}

export default PagProdutos;



  