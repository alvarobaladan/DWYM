import { useState } from 'react'
import './App.css'

function App() {

  const[tasks, setTasks] = useState([]);
  const[taskInput, setTaskInput] = useState('');

  const handleInput = (e) => {
    setTaskInput(e.target.value);
  }

  const addTask = () => {
    if(taskInput.trim() !== ''){
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  }

  return (
    <>
      <div>
        <h3>TA6 - Lista de Tareas</h3>
      
        <p>Ingresar una tarea:</p>
        <input type="text" value={taskInput} onChange={handleInput}/>
        <button onClick={addTask}>Agregar Tarea</button>

        <p>Lista de tareas:</p>
        <ul>
          {tasks.map((task, index) => 
              <li key={index}>{task}</li>
          )}
        </ul>
      </div>
    </>
  )
}

export default App
