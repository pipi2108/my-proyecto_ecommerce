
const Item = ({id, producto, precio, descripcion}) => {
    return (
        <>
        <div className="item">
            <h4>{producto}</h4>
            <p>${precio}</p>
            <p>{descripcion}</p>
        </div>
        
        </>
    )
}

export default Item