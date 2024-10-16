import './Card.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';

// API: Llamada al servidor DELETE, eliminar game
const serverURL = "http://localhost:3000/api/games";
const deleteGame = async (id) => {
    console.log("Entro deleteGame");
    const response = await fetch(serverURL + "/" + id, { method: 'DELETE' });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
}

function Card({ title, id }) {
    const navigate = useNavigate();
    function handleDetails() {
        navigate("/" + id);
    }

    function handleDelete() {
        deleteGame(id);
        alert("Juego eliminado correctamente: " + title);
        window.location.reload(); // Recarga la página
    }

    return (
        <>
            <div className="card" id={id}>
                <p><b>Nombre:</b> {title}</p>
                <button onClick={handleDetails}>Detalles</button><br></br>
                <button onClick={handleDelete}>Borrar</button>
            </div>
        </>
    )
}

export default Card