import './App.css'
import Card from './Card';

function App() {
  return (
    <div>
      <Card
        title="Título de la tarea 1"
        description="Ésta es la descripción de la tarea 1."
        assigned="Álvaro"
        startDate="2024-09-17"
        endDate="2024-09-18"
      />
      <Card
        title="Título de la tarea 2"
        description="Ésta es la descripción de la tarea 2."
        assigned="Álvaro"
        startDate="2024-09-20"
        endDate="2024-10-01"
      />
      <Card
        title="Título de la tarea 3"
        description="Ésta es la descripción de la tarea 3."
        assigned="Álvaro"
        startDate="2024-09-21"
        endDate="2024-11-01"
      />
    </div>
  )
}

export default App
