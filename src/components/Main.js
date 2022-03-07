import ItemListContainer from "./ItemListContainer"
import ItemCount from "./ItemCount"

const miOnAdd = () => {
    console.log ("Agregado a carrito")
}

function Main() {
    return (
        <>
        <ItemListContainer nombre="Caprichitos" año="2018"/>
        <ItemCount inicial={0} stock={5} onAdd={miOnAdd}/>
        </>
        )
}

export default Main
