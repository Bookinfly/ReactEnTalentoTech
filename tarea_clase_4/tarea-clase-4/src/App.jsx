import React, { Profiler, useState } from 'react'
import './App.css'
import Products from './components/Products'

let listItems = [{producto: "leche", precio:1}, {producto:"azúcar", precio:1.2}, {producto:"galletitas", precio:2}, {producto:"café",precio:3}, {producto:"arroz",precio:2}, {producto:"jugo",precio:0.5}, {producto:"gaseosa",precio:1}]


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Products listItems={listItems}/>
    </div>
  )
}

export default App
