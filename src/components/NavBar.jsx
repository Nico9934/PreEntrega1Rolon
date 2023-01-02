import CartWidget from './CartWidget'
import { useState } from 'react'
import MenuCartWidget from './MenuCartWidget';


const NavBar = ({cartItems, setCartItems, agregarProducto, removeProduct}) => {

  const [showMenu, setShowMenu] = useState(true);

  return (
    <header className='header'>
      <div className='header__container container'>
        <div className='header__logo'>
            <h1>Bienfrio</h1>
            <p>Natural Food</p>
          </div>
        <div className='header__search'>
          <input placeholder='Busca un producto' type="text" />
        </div>
        <nav className='header__nav'>
            <ul className='header__ul'>
                <li className='header__li'><a href="#verduras">Verduras</a> </li>
                <li className='header__li'><a href="#frutas">Frutas</a> </li>
                <li className='header__li'><a href="#about">¿Quienes somos?</a>  </li>
                <li className='header__li'><a href="#iqf">¿Qué es el IQF?</a></li>
                <li className='header__li'><a href="#contact">Contacto</a> </li>
            </ul>
        </nav>

        <CartWidget
          cartItems={cartItems}
          setCartItems={setCartItems}
          agregarProducto={agregarProducto}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
        {
          showMenu &&
            <MenuCartWidget
              cartItems={cartItems}
              setCartItems={setCartItems}
              removeProduct={removeProduct}
            />
        }
      </div>
    </header>
  )
}

export default NavBar