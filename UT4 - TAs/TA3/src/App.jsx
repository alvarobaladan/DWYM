import { useState } from 'react'
import './App.css'

function App() {
  const[text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <div>
        <h3>TA3</h3>
      </div>
      
      <p>Ingresar un texto para que luego se muestre en un párrafo: </p>
      <input type="text" value={text} onChange={handleInputChange}/>
      <p>Información ingresada: </p>
      <p>{text}</p>
    </>
  )
}

export default App
