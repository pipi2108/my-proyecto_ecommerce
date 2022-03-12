import { Link } from "react-router-dom"


const Item = ({producto}) => {
    return (
        <>
        <div className="item">
            <h4>{producto.producto}</h4>
            <img src={producto.src} alt="" />
            <p>${producto.precio}</p>
            <p>{producto.categoria}</p>
            <button>
            <Link to={`/products/${producto.id}`}>Ver más</Link>
            </button>
        </div>
        
        </>
    )
}

export default Item