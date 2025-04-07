import { useState } from 'react'
import './App.css'
import ComponenteH1 from './components/ComponenteH1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ComponenteH1/>
  )
}

export default App
