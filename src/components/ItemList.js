import Item from "./Item"

const ItemList = ({items}) => {
    return (
        <div className="productos">
            {items.map((producto, indice)=>{
                return <Item key={indice} {...producto}/>
            })}
        </div>
    
    )   
}

export default ItemList