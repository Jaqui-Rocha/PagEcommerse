export default function Carrinho({changeTela}){
    return(
        <>
        <h1>Carrinho</h1>
        <button onClick={()=> changeTela(0)} >Continuar Comprando</button>
        <button onClick={()=> changeTela(2)} >Finalizar Compra</button>
        </>
      
    )
  }
