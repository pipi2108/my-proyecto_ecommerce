import Carrito from "./CartWidget"

function NavBar() {
    return (
        <header id="my-header">
            <div>
                <h2> Caprichitos </h2>
            </div>
            <div>
                <a href="#"> Quienes Somos </a>
                <a href="#"> Productos </a>
                <a href="#"> Ofertas </a>
                <a href="#"> Contacto </a>
            </div>
            <div id='shop-basket'>
                <Carrito/>
            </div>
        </header>
        )
}

export default NavBar