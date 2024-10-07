import React from 'react';
import './Card.css';

function Card({user, email}){
    return(
      <>
        <div class="card">
          <p><b>Usuario: </b>{user}</p>
          <p><b>Email: </b>{email}</p>
        </div>
      </>
    );
  }

  export default Card;

