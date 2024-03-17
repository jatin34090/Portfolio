import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header'
import Cmd from './Components/Cmd/Cmd'
import About from './Components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Header/>
    <Cmd/>
    <About/>
   </div>
  )
}

export default App
