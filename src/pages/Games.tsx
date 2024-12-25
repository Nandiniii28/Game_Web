import React from 'react';
import { games } from '../data/games';
import { GameCard } from '../components/GameCard';
import { Search, Filter } from 'lucide-react';

export const Games: React.FC = () => {
  return (
    <div>
      {/* Games Banner */}
      <div className="bg-primary text-white py-5">
        <div className="container">
          <h1 className="display-5 text-center mb-4">Our Games Collection</h1>
          <p className="lead text-center mb-5">
            Discover a world of exciting card games with real cash prizes
          </p>
          
          {/* Search and Filter */}
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="d-flex gap-3">
                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <Search size={20} />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search games..."
                  />
                </div>
                <button className="btn btn-secondary d-flex align-items-center gap-2">
                  <Filter size={20} />
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Games Grid */}
      <div className="container py-5">
        <div className="row g-4">
          {games.map((game) => (
            <div key={game.id} className="col-md-6 col-lg-4">
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </div>

      {/* Game Categories */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="h2 text-center mb-5">Game Categories</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Quick Games</h3>
                  <p className="text-muted mb-3">Perfect for players who enjoy fast-paced action with instant results.</p>
                  <ul className="list-unstyled">
                    <li>• Points Rummy</li>
                    <li>• Best of Three</li>
                    <li>• Sprint Rummy</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Tournament Games</h3>
                  <p className="text-muted mb-3">Compete in tournaments with bigger prize pools and multiple players.</p>
                  <ul className="list-unstyled">
                    <li>• Pool Rummy</li>
                    <li>• Tournament Deals</li>
                    <li>• Championship Games</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h5 mb-3">Practice Games</h3>
                  <p className="text-muted mb-3">Hone your skills without risking real money.</p>
                  <ul className="list-unstyled">
                    <li>• Free Practice</li>
                    <li>• Bot Games</li>
                    <li>• Tutorial Modes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};