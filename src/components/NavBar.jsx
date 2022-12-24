import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
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
                <li href="#" className='header__li'>Verduras</li>
                <li href="#" className='header__li'>Frutas</li>
                <li href="#" className='header__li'>¿Quienes somos?</li>
                <li href="#" className='header__li'>¿Qué es el IQF?</li>
                <li href="#" className='header__li'>Contacto</li>
            </ul>
        </nav>

        <CartWidget/>
      </div>
    </header>
  )
}

export default NavBar