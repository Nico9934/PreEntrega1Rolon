import React, { useState } from 'react'
import Item from './Item'

const ItemListContainer = ({cartItems, products, agregarProducto}) => {


  return (
    <>
      <section className='itemlist' id='vegetales'>
        <div className="container">
            {/* <h1 className='itemlist__title'>{"Vegetales"}</h1> */}
          <div className='itemlist__container'>
              {
                products.map( product => 
                  ( 
                    <Item
                      cartItems={cartItems} 
                      key={product.id}
                      product={product}
                      agregarProducto={agregarProducto}
                    />
                  )
                )
              }                         
          </div>
        </div>
    </section>
    </>
  )
}

export default ItemListContainer