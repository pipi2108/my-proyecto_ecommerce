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