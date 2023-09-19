import React from 'react';
import './Scoreboard.css'; // Importa el archivo CSS para aplicar estilos

function Scoreboard({ playerScore, pcScore }) {
  return (
    <div className="scoreboard">
      <h2>Marcador:</h2>
      <div className="score">
        <div className="score-item">
          <img src="piedra.png" alt="Piedra" />
          <p>{playerScore}</p>
        </div>
        <div className="score-item">
          <img src="pc.png" alt="PC" />
          <p>{pcScore}</p>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;