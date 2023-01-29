import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MainNavbar from './components/navbar/MainNavbar'
import Index from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Index />  
  )
}

export default App
