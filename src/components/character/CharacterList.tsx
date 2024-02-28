import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard'; // Importe o componente CharacterCard

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  location: {
    name: string;
  };
}

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    // Função para buscar os personagens da API
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar personagens:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
