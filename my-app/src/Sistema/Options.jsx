import React from 'react';
import './Options.css';
import Rock from './assets/Rock.png'
import Paper from './assets/Paper.png'
import Scissors from './assets/Scissors.png'


function Options({ onPlayerChoice }) {
  const handleOptionClick = (choice) => {
    onPlayerChoice(choice); // Llama a la función proporcionada por el componente padre (App) con la elección del jugador
  };

  return (
    <div className="options">
      <h2>Elige una opción:</h2>
      <button className="option-button" onClick={() => handleOptionClick('piedra')}>
        <img className='image-option' src={Rock} alt='piedra'/>
      </button>
      <button className="option-button" onClick={() => handleOptionClick('papel')}>
        <img className='image-option' src={Paper} alt='Papel'/>
      </button>
      <button className="option-button" onClick={() => handleOptionClick('tijera')}>
        <img className='image-option' src={Scissors} alt='Tijeras'/>
      </button>
    </div>
  );
}

export default Options;