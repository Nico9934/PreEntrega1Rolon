import React, { useState } from 'react'

const ItemListContainer = (props) => {
  
    const {greeting} = props

 
  return (
    <>
    <section className='itemlist' id='vegetales'>
      <div className="container">
        <div className='itemlist__container'>
          <h1 className='itemlist__title'>{greeting}</h1>
        </div>
      </div>
    </section>
    </>
  )
}

export default ItemListContainer