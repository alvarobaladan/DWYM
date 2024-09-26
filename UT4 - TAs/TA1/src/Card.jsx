import React from 'react';
import './Card.css';

function Card({title, description, assigned, startDate, endDate}){
    return(
      <>
        <div class="card">
          <p><b>Titulo: </b>{title}</p>
          <p><b>Descripcion: </b>{description}</p>
          <p><b>Persona Asignada: </b>{assigned}</p>
          <p><b>Fecha Inicio: </b>{startDate}</p>
          <p><b>Fecha Fin: </b>{endDate}</p>
        </div>
      </>
    );
  }

  export default Card;

