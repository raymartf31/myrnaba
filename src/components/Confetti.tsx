import { useEffect, useState } from 'react';
import './Confetti.css';

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  color: string;
}

function Confetti() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = ['#ffd700', '#ffed4e', '#ffa500', '#ff69b4', '#9b59b6', '#fff'];
    const confettiPieces: ConfettiPiece[] = [];

    for (let i = 0; i < 50; i++) {
      confettiPieces.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        size: 5 + Math.random() * 10,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    setPieces(confettiPieces);
  }, []);

  return (
    <div className="confetti-container">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}

export default Confetti;
