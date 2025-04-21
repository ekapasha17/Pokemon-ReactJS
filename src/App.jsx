import React, { useContext } from 'react';
import PokemonListPage from './components/PokemonListPage.jsx';
import PokemonDetailPage from './components/PokemonDetailPage.jsx';
import { PokemonContext, PokemonProvider } from './context/PokemonContext.jsx';

// Create a component that uses the context
const PokemonApp = () => {
  const { selectedPokemon, clearSelectedPokemon } = useContext(PokemonContext);

  return (
    <div className="App">
      {selectedPokemon ? (
        <PokemonDetailPage />
      ) : (
        <PokemonListPage />
      )}
    </div>
  );
};

// Main App wraps everything in the provider
function App() {
  return (
    <PokemonProvider>
      <PokemonApp />
    </PokemonProvider>
  );
}

export default App;