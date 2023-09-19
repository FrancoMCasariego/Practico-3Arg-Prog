import React from 'react';
import './Results.css'; // Importa el archivo CSS para aplicar estilos

function Results({ winner }) {
  return (
    <div className="results">
      <h2>Resultado de la ronda:</h2>
      <p className={winner === 'jugador' ? 'win' : winner === 'pc' ? 'lose' : 'draw'}>
        {winner === 'jugador'
          ? '¡Tú ganas!'
          : winner === 'pc'
          ? '¡El PC gana!'
          : '¡Empate!'}
      </p>
    </div>
  );
}

export default Results;