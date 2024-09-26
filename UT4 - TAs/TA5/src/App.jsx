import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("");

  return (
    <>
      <div>
        <h3>TA5 - Mostrar/Ocultar Texto</h3>
      </div>
      
      <button onClick={() => text === "" ? setText("Buenas!") : setText("")}>Mostrar/Ocultar</button>

      <p>Texto:</p>
      <p>{text}</p>
    </>
  )
}

export default App
