import React from 'react';
import './Card.css';

function Card({ children }){
    return(
      <>
        <div class="card">
          {children}
        </div>
      </>
    );
  }

  export default Card;

