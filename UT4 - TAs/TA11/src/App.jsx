import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((segundos) => segundos + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <div>
        <p>Temporizador: {segundos}</p>
      </div>
    </>
  )
}

export default App
