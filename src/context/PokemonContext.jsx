import React, { createContext, useState, useEffect, useReducer } from 'react';

// Create the context
export const PokemonContext = createContext();

// Define the initial state for our reducer
const initialState = {
  pokemonList: [],
  filteredList: [],
  searchTerm: '',
  typeFilter: '',
  viewMode: 'grid'
};

// Define actions for our reducer
const ACTIONS = {
  SET_POKEMON_LIST: 'set_pokemon_list',
  SET_SEARCH_TERM: 'set_search_term',
  SET_TYPE_FILTER: 'set_type_filter',
  SET_VIEW_MODE: 'set_view_mode',
  APPLY_FILTERS: 'apply_filters'
};

// Create a reducer function
function pokemonReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_POKEMON_LIST:
      return {
        ...state,
        pokemonList: action.payload,
        filteredList: action.payload // Initially, filtered list is the same as the main list
      };
    case ACTIONS.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      };
    case ACTIONS.SET_TYPE_FILTER:
      return {
        ...state,
        typeFilter: action.payload
      };
    case ACTIONS.SET_VIEW_MODE:
      return {
        ...state,
        viewMode: action.payload
      };
    case ACTIONS.APPLY_FILTERS:
      return {
        ...state,
        filteredList: state.pokemonList.filter(pokemon => {
          const matchesSearch = pokemon.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
                               pokemon.id.includes(state.searchTerm);
          const matchesType = state.typeFilter ? pokemon.type === state.typeFilter : true;
          return matchesSearch && matchesType;
        })
      };
    default:
      return state;
  }
}

// Create a provider component
export const PokemonProvider = ({ children }) => {
  // Use useReducer for more complex state management
  const [state, dispatch] = useReducer(pokemonReducer, initialState);
  
  // State for the selected pokemon
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  // Load data from localStorage on component mount
  useEffect(() => {
    // Load pokemon list
    const savedPokemon = localStorage.getItem('pokemonList');
    if (savedPokemon) {
      const parsedPokemon = JSON.parse(savedPokemon);
      dispatch({ type: ACTIONS.SET_POKEMON_LIST, payload: parsedPokemon });
    } else {
      // Load default data if nothing in localStorage
      const defaultPokemon = [
        {
          id: '1001',
          name: 'Bulbasaur',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
          type: 'Grass',
          health: 144,
          maxHealth: 1000,
          attack: 32,
          defense: 50
        },
        {
          id: '1002',
          name: 'Kabuto',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png',
          type: 'Rock',
          health: 130,
          maxHealth: 1000,
          attack: 40,
          defense: 45
        }
        // Add more default Pokemon here
      ];
      dispatch({ type: ACTIONS.SET_POKEMON_LIST, payload: defaultPokemon });
      localStorage.setItem('pokemonList', JSON.stringify(defaultPokemon));
    }
    
    // Load saved view mode from sessionStorage
    const savedViewMode = sessionStorage.getItem('viewMode');
    if (savedViewMode) {
      dispatch({ type: ACTIONS.SET_VIEW_MODE, payload: savedViewMode });
    }
    
    // Load last viewed pokemon
    const lastViewed = sessionStorage.getItem('lastViewedPokemon');
    if (lastViewed) {
      setSelectedPokemon(JSON.parse(lastViewed));
    }
  }, []);

  // Apply filters whenever search term or type filter changes
  useEffect(() => {
    dispatch({ type: ACTIONS.APPLY_FILTERS });
  }, [state.searchTerm, state.typeFilter]);

  // Save view mode to sessionStorage when it changes
  useEffect(() => {
    sessionStorage.setItem('viewMode', state.viewMode);
  }, [state.viewMode]);
  
  // Save the last viewed pokemon to sessionStorage
  useEffect(() => {
    if (selectedPokemon) {
      sessionStorage.setItem('lastViewedPokemon', JSON.stringify(selectedPokemon));
    }
  }, [selectedPokemon]);

  // Create functions to update state
  const setSearchTerm = (term) => {
    dispatch({ type: ACTIONS.SET_SEARCH_TERM, payload: term });
  };
  
  const setTypeFilter = (filter) => {
    dispatch({ type: ACTIONS.SET_TYPE_FILTER, payload: filter });
  };
  
  const setViewMode = (mode) => {
    dispatch({ type: ACTIONS.SET_VIEW_MODE, payload: mode });
  };
  
  const selectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };
  
  const clearSelectedPokemon = () => {
    setSelectedPokemon(null);
  };

  // Value to be provided to consumers
  const value = {
    pokemonList: state.pokemonList,
    filteredList: state.filteredList,
    searchTerm: state.searchTerm,
    typeFilter: state.typeFilter,
    viewMode: state.viewMode,
    selectedPokemon,
    setSearchTerm,
    setTypeFilter,
    setViewMode,
    selectPokemon,
    clearSelectedPokemon
  };

  return (
    <PokemonContext.Provider value={value}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;