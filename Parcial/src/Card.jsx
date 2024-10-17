import './Card.css';
import Details from './Details.jsx'

function Card({ id, name, age, photo }) {

    return (
        <>
            <div id={id} className="card">
                <img src={photo}></img>
                <p><b>Nombre: </b>{name}</p>
                <p><b>Edad: </b>{age}</p>
                <button>Ver Detalles</button>
            </div>
        </>
    )
}

export default Card