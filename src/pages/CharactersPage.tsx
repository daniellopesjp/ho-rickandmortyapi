import React from 'react';
import CharacterList from '../components/CharacterList';
import CharacterCard from '../components/CharacterCard'; // Importe o componente CharacterCard


const CharactersPage: React.FC = () => {
  return (
    <div>
      <h1>Página de Personagens</h1>
      <CharacterList />
    </div>
  );
};

export default CharactersPage;


