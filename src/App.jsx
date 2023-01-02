import { useState } from 'react'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import data from './data'
import './scss/app.scss'

function App() {

  const {products} = data

  const [cartItems, setCartItems] = useState([])
  
  //Funcion para agregar productos al carrito
  const agregarProducto = (product) => {
    
    const productoExiste = cartItems.find( x => x.id === product.id)
    
    if (productoExiste) {
      setCartItems(cartItems.map( x => x.id === product.id ? {...productoExiste, cantidad : productoExiste.cantidad + 1} : x))
    } else {
      setCartItems( 
        [...cartItems, {...product, cantidad : 1}],
        )
    }
  }

  const removeProduct = (product) => {
    const productoEliminado = cartItems.filter( x => x.id != product.id)
    setCartItems(productoEliminado)
  }
    // const productoExistente = cartItems.find( x => x.id === product.id)
    // if (productoExistente) {
    //   setCartItems( cartItems.map( x => x.id === product.id ? {...productoExistente, cantidad: productoExistente.cantidad +1 } : x ))
    //   console.log(productoExistente)
    // } else {
    //   setCartItems(
    //     [...cartItems, product],
    //     {...product, cantidad: 1}
    //     )
    //   }
    // }
  

  return (
    <>
       <NavBar
          cartItems={cartItems}
          setCartItems={setCartItems}
          agregarProducto = {agregarProducto}
          removeProduct = {removeProduct}
       ></NavBar>
       <ItemListContainer
          cartItems={cartItems}
          products = {products}
          agregarProducto = {agregarProducto}
       ></ItemListContainer>
       <Footer></Footer>
    </>

  )
}

export default App
