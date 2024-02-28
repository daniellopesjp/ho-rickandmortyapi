import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
}

const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    // Função para buscar detalhes do personagem da API
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setCharacter(response.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do personagem:', error);
      }
    };

    fetchCharacter();
  }, [id]);

  return (
    <div>
      <h2>Detalhes do Personagem</h2>
      {character ? (
        <div className="character-details">
          <img src={character.image} alt={character.name} />
          <div>
            <h3>{character.name}</h3>
            <p>Status: {character.status}</p>
            <p>Espécie: {character.species}</p>
            <p>Gênero: {character.gender}</p>
            <p>Origem: {character.origin.name}</p>
            <p>Localização: {character.location.name}</p>
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default CharacterDetail;
