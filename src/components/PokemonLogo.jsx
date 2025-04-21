import React from 'react';

const PokemonLogo = ({ className = "h-8" }) => {
  return (
    <div className={`${className} text-white font-bold`} style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '1px' }}>
      <span className="text-yellow-400" style={{ textShadow: '1px 1px 1px blue, -1px -1px 1px blue, 1px -1px 1px blue, -1px 1px 1px blue' }}>
        Pokémon
      </span>
    </div>
  );
};

export default PokemonLogo;