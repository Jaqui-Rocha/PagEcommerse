
import  { useState } from "react";
import Produtos from "../Produtos/index";
import {Column,Conteiner, Botao, H1, Row, Price, Product,Image,No, Button } from "../../styledGlobal/styledPag";


export default function listaProdutos({ changeTela}) {
  const [p, setP] = useState([Produtos]);
  const [count, setCount] = useState(0);

  function addCarrinho() {
    setCount(count + 1);
  
  }
  return (
    <Conteiner>
      <H1>
        Produtos <No>{count}</No>
      </H1>
      <Row >
        {p.map((item) => {
          return (
            <Column key={item.id}>
              <Product>
                <Image src={item?.image} alt={item.name} />
                <Button onClick={addCarrinho}>Adicionar</Button>
                <Price>Valor: R$ {item.value}</Price>
              </Product>
            </Column>
          );
        })}
      </Row>

      <Botao onClick={() => changeTela(1)}>Ir para Carrinho</Botao>
      
    </Conteiner>
  
  );
}
