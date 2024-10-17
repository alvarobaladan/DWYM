import Card from './Card.jsx';
import Details from './Details.jsx'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

// API: Obtener los datos de mascotas desde el servidor
const serverURL = "http://localhost:3005/api/pets";
const getPets = async () => {
    console.log("Entro getPets");
    const response = await fetch(serverURL, { method: 'GET' });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}

// Página principal.
// Comentario: No pude incluir el modal :/ pero los datos los puedo obtener en Details.jsx
// Si hubiera logrado el modal, lo que hacía era usar los IDs de cada Card para mostrar la información
// detallada de cada mascota
function Home() {

    const navigate = useNavigate();

    const [pets, setPets] = useState([]);
    useEffect(() => {
        const fetchPets = async () => {
            const petsData = await getPets();
            setPets(petsData);
        }

        fetchPets();
    }, []);

    console.log(pets);

    return (
        <>
            <div>
                <div>
                    <h3>Adopta-me</h3>
                </div>
                <div>
                    <button onClick={() => navigate("/Add")}>Agregar Mascota</button>
                </div>
                <div>
                    {pets.map((pet) =>
                        <Card
                            key={pet.id}
                            id={pet.id}
                            name={pet.name}
                            age={pet.age}
                            photo={pet.photo}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default Home
