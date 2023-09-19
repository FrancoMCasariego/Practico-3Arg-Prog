import React from 'react';
import './Interface.css'; // Importa el archivo CSS para aplicar estilos

function Interface() {
  return (
    <div className="interface">
      <h2>Elige una opción:</h2>
      <div className="options">
        <button className="option-button stone">Piedra</button>
        <button className="option-button paper">Papel</button>
        <button className="option-button scissors">Tijera</button>
      </div>
      <p className="instructions">Selecciona una opción y compite contra el PC.</p>
    </div>
  );
}

export default Interface;