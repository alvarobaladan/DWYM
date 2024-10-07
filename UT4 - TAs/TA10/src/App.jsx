import { useState, useEffect } from 'react'
import './App.css'
import Card from './Card';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsersFromServer = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Error al obtener los datos desde el servidor.");
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log("Error al obtener los datos desde el servidor.");
      }
    };

    getUsersFromServer();

  }, []);

  return (
    <div>
      {users.map(actualUser => (
        <Card
          user={actualUser.name}
          email={actualUser.email}
        />))
      }
    </div>
  )
}

export default App
