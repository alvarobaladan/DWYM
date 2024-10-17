import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

// API: Obtener la informacion de mascota a partir del ID
const serverURL = "http://localhost:3005/api/pets";
const getPetByID = async (id) => {
    console.log("Entro getPetByID");
    const petData = await fetch(serverURL + "/" + id);
    const pet = await petData.json();
    return pet;
};

const Details = ({id}) => {
    const [pet, setPet] = useState('');

    // useEffect(() => {
    //     getPetByID("22188a37-1048-474a-abba-60e62a224e2c").then((pet) => setPet(pet));
    // }, []);

    useEffect(() => {
        getPetByID(id).then((pet) => setPet(pet));
    }, []);

    return (
        <>
            <div>
                <h3>Detalle</h3>
                {pet && (
                    <div>
                        <p><b>Nombre: </b></p>
                        <p>{pet.name}</p>
                        <p><b>Edad: </b></p>
                        <p>{pet.age}</p>
                        <p><b>Tipo: </b></p>
                        <p>{pet.type}</p>
                        <p><b>Descripcion: </b></p>
                        <p>{pet.description}</p>
                        <p><b>Caracteristicas: </b></p>
                        <p>{pet.characteristics}</p>
                        <p><b>URL de la foto: </b></p>
                        <img src={pet.photo}/>
                    </div>
                )}
            </div>
        </>
    );
}

export default Details