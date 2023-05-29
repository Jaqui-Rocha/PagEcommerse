import styled from "styled-components";
import React, { useState } from "react";
import Produtos from "../Produtos/index";

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
`;
const Column = styled.div`
  max-width: 33.3333%;
  flex: 0 0 33.3333%;
  padding: 0 0.5rem;
  margin-bottom: 1rem;
`;
const Product = styled.div`
  position: relative;
`;
const Image = styled.img`
  object-fit: contain;
  max-width: 100%;
`;
const H1 = styled.div`
  font-size: 40px;
  font-weight: bold;
  font-family: poppins;
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;
const No = styled.div`
  background: #6950a1;
  color: white;
  border: 0;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  right: 15px;
`;
const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1rem;
  right: 1rem;
  background: #6a50a1ac;
  color: #fff;
  border: 0;
`;
const Botao = styled.button`
  background: #6950a1;
  border-radius: 5px;
  border: 0;
  font-size: 16px;
  color: white;
  padding: 5px;
  width: 200px;
`;

const Price = styled.div`
  font-size: 1rem;
  color: #313131;
  font-weight: bold;
  margin-top: 10px;
`;

export default function listaProdutos({ changeTela, produtos = [] }) {
  const [p, setP] = useState(Produtos);
  const [count, setCount] = useState(0);

  function addCarrinho() {
    setCount(count + 1);
  }
 
  
  return (
    <Conteiner>
      <H1>
        Produtos <No>{count}</No>
      </H1>
      <Row>
        {p.map((item) => {
          return (
            <Column key={item.id}>
              <Product>
                <Image src={item?.image} alt={item.title} />
                <Button onClick={addCarrinho}>Adicionar</Button>
                <Price>Valor: ${item.price}</Price>
              </Product>
            </Column>
          );
        })}
      </Row>

      <Botao onClick={() => changeTela(1)}>Ir para Carrinho</Botao>
    </Conteiner>
  );
}
