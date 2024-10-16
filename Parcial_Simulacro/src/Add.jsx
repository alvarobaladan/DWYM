import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// API: Llamada al servidor POST, agregar un nuevo Game
const serverURL = "http://localhost:3000/api/games";
const postGame = async (dataJSON) => {
    console.log("Entro postGame");
    const response = await fetch(serverURL, {
        method: 'POST', headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify(dataJSON)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}

function Add() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [players, setPlayers] = useState('');
    const [categories, setCategories] = useState('');

    function handleVolver() {
        navigate("/");
    }

    function handleAdd() {
        const newGame = {
            title: title,
            description: description,
            players: players,
            categories: categories
        }

        postGame(newGame);
        
        alert("Nuevo juego agregado: " + newGame.title);
        navigate("/");
    }

    return (
        <>
            <div>
                <div>
                    <button onClick={handleVolver}>Volver</button>
                </div>

                <p><b>Nombre: </b></p>
                <input type="text" onChange={(e) => {setTitle(e.target.value)}} />
                <p><b>Descripcion:</b></p>
                <input type="text" onChange={(e) => {setDescription(e.target.value)}} />
                <p><b>Cantidad de jugadores:</b></p>
                <input type="text" onChange={(e) => {setPlayers(e.target.value)}} />
                <p><b>Categorias: </b></p>
                <input type="text" onChange={(e) => {setCategories(e.target.value)}} /><br /><br />
                <button onClick={handleAdd}>Agregar Juego</button>
            </div>
        </>
    )
}

export default Add