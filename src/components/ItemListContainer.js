import ItemCount from "./ItemCount"

const miOnAdd = () => {
    console.log ("Agregado a carrito")
}

const ItemListContainer = (props) =>{
    return (
        <>
            <div id="sec-principal">
                <h2>Bienvenido a {props.nombre}!</h2>
                <p>{props.nombre}, se creo en {props.año} y es una tienda de ropa para niños/as 
                donde nuestra principal marca es Pandy y CO. </p>
            </div>

            <div>
                <ItemCount inicial={0} stock={5} onAdd={miOnAdd}/>
            </div>
        </>    
    )
}

export default ItemListContainer