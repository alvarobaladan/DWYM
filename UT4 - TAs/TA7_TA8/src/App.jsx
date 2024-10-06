import { useState } from 'react'
import './App.css'

function App() {

  const[tasks, setTasks] = useState([]);
  const[taskInput, setTaskInput] = useState('');
  const[isEditing, setIsEditing] = useState(false);
  const[currentTaskId, setCurrentTaskId] = useState(null);
  const[editInput, setEditInput] = useState('');

  const handleInput = (e) => {
    setTaskInput(e.target.value);
  }

  const addTask = () => {
    if(taskInput.trim() !== ''){
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  }

  const deleteTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  }

  const editTask = (indexToEdit) => {
    setIsEditing(true);
    setCurrentTaskId(indexToEdit);
    setEditInput(tasks[indexToEdit]);
  }

  const saveEditedTask = () => {
    const currentTasks = [...tasks];
    currentTasks[currentTaskId] = editInput;
    setTasks(currentTasks);
    setIsEditing(false);
    setCurrentTaskId(null);
    setEditInput('');
  }

  return (
    <>
      <div>
        <h3>TA7 y TA8 - Lista de Tareas</h3>
      
        <p>Ingresar una tarea:</p>
        <input type="text" value={taskInput} onChange={handleInput}/>
        <button onClick={addTask}>Agregar Tarea</button>

        <p>Lista de tareas:</p>
        <ul>
          {tasks.map((task, index) => 
              <li key={index}>
                {isEditing && currentTaskId === index ? 
                (
                  <div>
                    <input type="text" value={editInput} onChange={(e) => setEditInput(e.target.value)}/>
                    <button onClick={saveEditedTask}><i class="fa-regular fa-floppy-disk"></i></button>
                  </div>
                ):(
                  <div>
                    {task}
                    <button onClick={() => editTask(index)}><i class="fa-regular fa-pen-to-square"></i></button>
                    <button onClick={() => deleteTask(index)}><i class="fa-solid fa-trash-can"></i></button>
                  </div>
                )}
              </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default App
