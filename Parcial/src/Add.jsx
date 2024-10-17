import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// API: Llamada al servidor POST, agregar una nueva mascota
const serverURL = "http://localhost:3005/api/pets";
const postPet = async (dataJSON) => {
    console.log("Entro postPet");
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
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [characteristics, setCharacteristics] = useState('');
    const [photo, setPhoto] = useState('');
    const buttonIsDisabled = !name || !age || !type || !description || !characteristics || !photo;

    function handleBack() {
        navigate("/");
    }

    function handleAdd(){
        const newPet = {
            name: name,
            age: age,
            type: type,
            description: description,
            characteristics: characteristics,
            photo: photo
        }

        postPet(newPet);

        alert("Nueva mascota agregada: " + newPet.name);
        navigate("/");
    }

    return (
        <>
            <div>
                <h3>Agregar Mascota</h3>
                <p><b>Nombre: </b></p>
                <input type="text" onChange={(e) => { setName(e.target.value) }} />
                <p><b>Edad: </b></p>
                <input type="text" onChange={(e) => { setAge(e.target.value) }} />
                <p><b>Tipo: </b></p>
                <input type="text" onChange={(e) => { setType(e.target.value) }} />
                <p><b>Descripcion: </b></p>
                <input type="text" onChange={(e) => { setDescription(e.target.value) }} />
                <p><b>Caracteristicas: </b></p>
                <input type="text" onChange={(e) => { setCharacteristics(e.target.value) }} />
                <p><b>URL de la foto: </b></p>
                <input type="text" onChange={(e) => { setPhoto(e.target.value) }} />

                <div>
                    <button onClick={handleAdd} disabled={buttonIsDisabled}>Agregar Mascota</button>
                    <button onClick={handleBack}>Ir al Inicio</button>
                </div>
            </div>
        </>
    )
}

export default Add