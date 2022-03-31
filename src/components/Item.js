import { Link } from "react-router-dom"


const Item = ({producto}) => {
    return (
        <>
        <div className="item">
            <h4>{producto.producto}</h4>
            <img src={producto.imagen} alt="" />
            <p>${producto.precio}</p>
            <p>Categoria: {producto.categoria}</p>
            <button>
            <Link to={`/product/${producto.id}`}>Ver más</Link>
            </button>
        </div>
        
        </>
    )
}

export default Item