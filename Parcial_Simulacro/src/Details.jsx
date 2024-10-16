import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

// API: Llamada al servidor GET, obtener game by ID
const serverURL = "http://localhost:3000/api/games";
const getGameByID = async (id) => {
    console.log("Entro getGameByID");
    const response = await fetch(serverURL + "/" + id, { method: 'GET' });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}

function Details() {
    // React-router-dom
    const navigate = useNavigate();
    const { id } = useParams();

    const [game, setGame] = useState();
    useEffect(() => {
        const fetchGameDetails = async () => {
            const gameData = await getGameByID(id);
            setGame(gameData[0]);
        }

        fetchGameDetails();
    }, []);

    return (
        <>
            <div>
                <button onClick={() => navigate("/")}>Atras</button>
                {game && (<div>
                    <p><b>Nombre: </b>{game.title}</p>
                    <p><b>Descripcion: </b>{game.description}</p>
                    <p><b>Cantidad de jugadores: </b>{game.players}</p>
                    <p><b>Categorias: </b>{game.categories}</p>
                    <p>{id}</p>
                </div>
                )}
            </div>
        </>
    )
}

export default Details