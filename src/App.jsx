import React from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import Find from './components/Find'
import Sedan from './components/Sedan'
import Suv from './components/Suv'
import Convertible from './components/Convertible'
import Sports from './components/Sports'
import Scrollbar from './components/Scrollbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <main >
      <Nav/>
      <Header/>
      <Find/>
      <Sedan/>
      <Suv/>
      <Convertible/>
      <Sports/>
      <Scrollbar/>
      <Footer/>
    
    </main>
  )
}

export default App
