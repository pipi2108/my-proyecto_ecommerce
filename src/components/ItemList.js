import Item from "./Item"

const ItemList = ({items}) => {
    return (
        <div className="productos">
            {items.map((producto)=>{
                return <Item key={producto.id} producto={producto}/>
            })}
        </div>
    
    )   
}

export default ItemList