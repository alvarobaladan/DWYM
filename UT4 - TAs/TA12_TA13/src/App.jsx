import { createContext, useState } from 'react';
import './App.css'

const UserNameContext = createContext();

function App() {
  const [userName, setUserName] = useState("Pedro");

  return (
    <>
      <div>
        <h3>TA12_TA13 - Nombre de usuario usando useContext</h3>
        <p>Nombre de usuario: </p>
        <p>{userName}</p>

        <h3>Ingrese nombre de usuario: </h3>

        <UserNameContext.Provider value={userName}>
          <input type="text" onChange={(e) => setUserName(e.target.value)}></input>
        </UserNameContext.Provider>

      </div>
    </>
  )
}

export default App
