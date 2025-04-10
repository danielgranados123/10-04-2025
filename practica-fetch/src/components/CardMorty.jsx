import React from "react";

const CardMorty = ({ character }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 m-4">
      <img
        className="h-64 object-cover mx-auto"
        src={character.image || 'default-image-url.jpg'}
        alt={character.name || 'Sin nombre'}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800">{character.name}</h2>
        <p className="text-gray-600 text-sm mb-4">{`Status: ${character.status}`}</p>
        <p className="text-gray-600 text-sm mb-4">{`Species: ${character.species}`}</p>
        <p className="text-gray-600 text-sm mb-4">{`Gender: ${character.gender}`}</p>
        <p className="text-gray-600 text-sm mb-4">{`Location: ${character.location.name}`}</p>
      </div>
    </div>
  );
};

export default CardMorty;
