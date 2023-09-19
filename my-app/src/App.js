import React, { useState } from 'react';
import Options from './Sistema/Options';
import Results from './Sistema/Results';
import './App.css'; // Importa el archivo CSS

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [pcChoice, setPcChoice] = useState(null);
  const [winner, setWinner] = useState(null);

  const options = ['piedra', 'papel', 'tijera'];

  const handlePlayerChoice = (choice) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomPcChoice = options[randomIndex];
    console.log(`PC eligió: ${randomPcChoice}`);

    setPlayerChoice(choice);
    setPcChoice(randomPcChoice);

    determineWinner(choice, randomPcChoice);
  };

  const determineWinner = (player, pc) => {
    console.log(`Jugador eligió: ${player}`);
    console.log(`PC eligió: ${pc}`);

    if (player === pc) {
      setWinner('empate');
    } else if (
      (player === 'piedra' && pc === 'tijera') ||
      (player === 'papel' && pc === 'piedra') ||
      (player === 'tijera' && pc === 'papel')
    ) {
      setWinner('jugador');
    } else {
      setWinner('pc');
    }
  };

  return (
    <div className="container">
      <h1>Juego de Piedra, Papel y Tijeras</h1>
      <Options onPlayerChoice={handlePlayerChoice} />
      <Results winner={winner} />
    </div>
  );
}

export default App;