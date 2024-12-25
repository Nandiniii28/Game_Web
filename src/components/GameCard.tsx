import React from 'react';
import { Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Game } from '../types/games';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <>
    <div className="card game-card h-100">
      <div className="card-body">
        <h3 className="card-title h5 mb-3">{game.name}</h3>
        <p className="card-text text-muted mb-4">{game.description}</p>
        
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <Users size={20} className="text-primary me-2" />
            <span>{game.minPlayers}-{game.maxPlayers} Players</span>
          </div>
          <div className="d-flex align-items-center">
            <Trophy size={20} className="text-primary me-2" />
            <span>{game.prizePool}</span>
          </div>
        </div>

        <Link 
          to={`/game/${game.id}`}
          className="btn btn-primary w-100"
        >
          Learn How to Play
        </Link>
      </div>
    </div>
    
    </>
  );
};