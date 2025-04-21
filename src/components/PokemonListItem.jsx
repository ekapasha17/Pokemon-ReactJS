import React from 'react';

const PokemonListItem = ({ pokemon, viewMode }) => {
  // Destructure the pokemon object
  const { id, name, image, type } = pokemon;

  // Styling based on view mode (grid or list)
  const isList = viewMode === 'list';

  return (
    <div className="bg-white rounded-lg p-4 cursor-pointer hover:shadow-md transition relative">
      {/* Pokemon ID */}
      <div className="absolute top-2 right-2 text-blue-500 text-sm font-semibold">
        #{id}
      </div>
      
      {/* Type tag - only show in list view */}
      {isList && type && (
        <div className="absolute top-2 left-2 text-green-600 font-medium">
          {type}
        </div>
      )}
      
      {/* Pokemon Image */}
      <div className="flex justify-center py-2">
        <img 
          src={image} 
          alt={name} 
          className="h-24 w-auto"
        />
      </div>
      
      {/* Pokemon Name */}
      <div className="text-center font-semibold text-gray-900 mt-2">
        {name}
      </div>
    </div>
  );
};

export default PokemonListItem;