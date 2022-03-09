import Item from "./Item"

const ItemList = (items) => {
    return (
        <>
        <ul>
            {items.map((producto, indice)=>{
                return <li>{<Item {...producto}/>}</li>
            })}
        </ul>
    </>
    )   
}

export default ItemList