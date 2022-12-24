import { useState } from 'react'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import './scss/app.scss'

function App() {

  return (
    <>
       <NavBar></NavBar>
       <ItemListContainer></ItemListContainer>
       <Footer></Footer>
    </>

  )
}

export default App
