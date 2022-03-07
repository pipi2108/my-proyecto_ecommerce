import {useState} from "react"

const ItemCount = (props)=> {
    const [contador, setContador] = useState(props.inicial)
     
    const sumar =()=> {
        if(contador < props.stock) {
            setContador(contador + 1)
        }else{
            console.log("No hay stock")
        }
     }

    const restar =()=> {
        if(contador > 0 ){
            setContador(contador - 1)
        }  
    }
    return (
        <div id="contador">
            <div className="prod">
                <h4>Producto 1</h4>
                <p>Descripcion del producto</p>
                <p>$500</p>
            </div>
            <div className="count">
                <button onClick={restar}> - </button>
                <p>{contador.toString()}</p>
                <button onClick={sumar}> + </button>
            </div>
            <div className="btn-card">
                <button onClick={props.onAdd} className="boton" >Agregar a carrito</button>
            </div>
        </div>
    )
    
}

export default ItemCount