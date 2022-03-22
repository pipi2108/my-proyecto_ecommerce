import {useState} from "react"

const ItemCount = ({stock,inicial,onAdd})=> {
    const [contador, setContador] = useState(inicial)
    
     
    const sumar =()=> {
        if(contador < stock) {
            setContador(contador + 1)
        }else{
            console.log("No hay stock")
        }
     }
    const restar =()=> {
        if(contador > inicial ){
            setContador(contador - 1)
        }  
    }
    const confirmar = () => {
        onAdd(contador)
    }
    return (
        <div id="contador">
            <div className="count">
                <button onClick={restar}> - </button>
                <p>{contador.toString()}</p>
                <button onClick={sumar}> + </button>
            </div>
            <div className="btn-card">
                <button onClick={confirmar} className="boton">Agregar a carrito</button>
            </div>
        </div>
    )
    
}

export default ItemCount