import React from 'react';
import PokemonLogo from './PokemonLogo.jsx';

const PokemonCard = ({ pokemon }) => {
  // Destructure the pokemon object for easier access
  const { id, name, image, health, maxHealth, attack, defense, type } = pokemon;

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg max-w-xs mx-auto shadow-lg">
      {/* Pokemon Logo */}
      <div className="mb-4">
        <PokemonLogo className="text-2xl" />
      </div>
      
      {/* Pokemon ID */}
      <div className="text-gray-400 mb-4">
        #{id}
      </div>
      
      {/* Pokemon Image */}
      <div className="flex justify-center mb-6">
        <img 
          src={image} 
          alt={name} 
          className="h-40 w-auto"
        />
      </div>
      
      {/* Pokemon Name and Mini Icon */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">{name}</h2>
        <img 
          src={image} 
          alt={name} 
          className="h-10 w-auto"
        />
      </div>
      
      {/* Stats Section */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-inner">
        {/* Health Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-300">Health</span>
            <span className="text-gray-300">{health} from {maxHealth}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full" 
              style={{ width: `${(health/maxHealth) * 100}%` }}
            ></div>
          </div>
        </div>
        
        {/* Attack and Defense */}
        <div className="flex justify-between">
          <div>
            <div className="text-sm text-gray-400">Attack</div>
            <div className="text-xl text-white">{attack}</div>
          </div>
          <div>
            <div className="text-sm text-gray-400">Defense</div>
            <div className="text-xl text-white">{defense}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;