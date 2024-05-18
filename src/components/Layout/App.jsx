import { useState } from 'react'
import Home from '../Home/Home'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
