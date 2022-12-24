import React from 'react'

const Item = () => {
  return (
        <div className='card'>
            <div className="card__img">
                <img src="https://biomac.com.ar/wp-content/uploads/2020/10/fotos-e-commerce-11.jpg" alt="" />
            </div>
            <div className="card__contain">
                <div className='card__text'>
                    <h3 className='card__title'>Espinaca</h3>
                    <p className='card__description'>Espinaca en hojas cortadas IQF por 1 kg</p>
                    
                </div>
                <div className="card__icons">
                    <i>Me gusta</i>
                    <i>Agregar al carrito</i>
                </div>
                <div className="card__precios">
                    <h3>$1050</h3>
                    <input className='card__cantidad' type="number" placeholder='0' value={0} />
                </div>
            </div>
        </div>







  )
}

export default Item