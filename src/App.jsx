import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loginuser from './components/Affan'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1>Vite + React</h1>
      <Loginuser/>

    </>
  )}

export default App
