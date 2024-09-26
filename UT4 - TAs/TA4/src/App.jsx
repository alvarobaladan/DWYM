import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h3>TA4 - Contador</h3>
        <p>Valor del Contador: {count}</p>
      </div>

      <button onClick={() => setCount((count) => count - 1)}>Restar -</button>
      <button onClick={() => setCount((count) => count + 1)}>Sumar +</button>
    </>
  )
}

export default App
