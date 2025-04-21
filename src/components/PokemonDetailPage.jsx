import React, { useContext } from 'react';
import PokemonCard from './PokemonCard.jsx';
import { PokemonContext } from '../context/PokemonContext.jsx';

const PokemonDetailPage = () => {
  // Get the selectedPokemon and the function to clear it from context
  const { selectedPokemon, clearSelectedPokemon } = useContext(PokemonContext);

  // If no pokemon is provided, show a message
  if (!selectedPokemon) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-800 text-white">
        <div className="text-center">
          <h2 className="text-2xl mb-4">No Pokemon selected</h2>
          <button 
            onClick={clearSelectedPokemon}
            className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
          >
            Go back to list
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-800 p-4 flex flex-col items-center">
      <div className="max-w-md w-full">
        {/* Back button */}
        <button 
          onClick={clearSelectedPokemon}
          className="text-white mb-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
        >
          ← Back to list
        </button>
        
        {/* Pokemon Card */}
        <PokemonCard pokemon={selectedPokemon} />
      </div>
    </div>
  );
};

export default PokemonDetailPage;