import React, { useContext } from 'react';
import PokemonListItem from './PokemonListItem.jsx';
import { PokemonContext } from '../context/PokemonContext.jsx';
import PokemonLogo from './PokemonLogo.jsx';

const PokemonListPage = () => {
  // Get everything we need from the context
  const { 
    filteredList, 
    searchTerm, 
    setSearchTerm, 
    typeFilter, 
    setTypeFilter, 
    viewMode, 
    setViewMode, 
    selectPokemon,
    pokemonList
  } = useContext(PokemonContext);

  // Get unique types for filter dropdown
  const pokemonTypes = [...new Set(pokemonList.map(pokemon => pokemon.type))];

  return (
    <div className="bg-gray-900 min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header with logo and search */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <PokemonLogo className="text-2xl" />
          </div>
          <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-2 pr-10 py-1 rounded border border-gray-400 w-full text-black"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Filters and view mode toggles */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <select 
              value={typeFilter} 
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-3 py-2 bg-gray-800 text-white rounded border border-gray-700"
            >
              <option value="">Sort by</option>
              {pokemonTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div className="flex space-x-2">
            <button 
              onClick={() => setViewMode('list')}
              className={`px-3 py-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'} rounded`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button 
              onClick={() => setViewMode('grid')}
              className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'} rounded`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Pokemon list */}
        <div className={`grid ${viewMode === 'grid' ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
          {filteredList.map(pokemon => (
            <div key={pokemon.id} onClick={() => selectPokemon(pokemon)}>
              <PokemonListItem pokemon={pokemon} viewMode={viewMode} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonListPage;