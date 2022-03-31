import Item from "./Item"

const ItemList = ({items}) => {
    return (
        <div className="productos">
            {items.map((product)=>{
                return <Item key={product.id} producto={product}/>
            })}
        </div>
    
    )   
}

export default ItemList