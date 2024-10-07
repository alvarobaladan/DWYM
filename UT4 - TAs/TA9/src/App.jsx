import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = "TA9 - Contador: " + count;
  }, [count]);

  return (
    <>
      <div>
        <h3>TA9 - Contador y UseEffect</h3>
        <p>Valor del Contador: {count}</p>
      </div>

      <button onClick={() => setCount((count) => count - 1)}>Restar -</button>
      <button onClick={() => setCount((count) => count + 1)}>Sumar +</button>
    </>
  )
}

export default App
