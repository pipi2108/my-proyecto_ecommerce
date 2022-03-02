
const ItemListContainer = (props) =>{
    return (
            <main>
                <h2>Bienvenido a {props.nombre}!</h2>
                <p>{props.nombre}, se creo en {props.año} y es una tienda de ropa para niños/as 
                donde nuestra principal marca es Pandy y CO. </p>
            </main>
    )
}

export default ItemListContainer