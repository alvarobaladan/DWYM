import Card from './Card.jsx'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

// API: Llamada al servidor GET, obtener todos los games
const serverURL = "http://localhost:3000/api/games";
const getAllGames = async () => {
    console.log("Entro getAllGames");
    const response = await fetch(serverURL, { method: 'GET' });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}

function Home() {
    const [games, setGames] = useState([]);
    useEffect(() => {
        const fetchGames = async () => {
            const gamesData = await getAllGames();
            setGames(gamesData);
        }

        fetchGames();
    }, []);

    const navigate = useNavigate();

    return (
        <>
            <div>
                <h3>Titulo de la aplicación</h3>
                <button onClick={() => navigate("/Add")}>Agregar juego</button>
            </div>
            <div>
                {games.map((game) =>
                    <Card
                        key={game.id}
                        id={game.id}
                        title={game.title}
                    />
                )}
            </div>
        </>
    )
}

export default Home
