import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        Hello World!
      </h1>
      <p>
        Este site em React é um exemplo de como criar um site legal usando a biblioteca React.
      </p>
    </>
  )
}

export default App
