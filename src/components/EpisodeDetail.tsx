import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

const EpisodeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [episode, setEpisode] = useState<Episode | null>(null);

  useEffect(() => {
    // Função para buscar detalhes do episódio da API
    const fetchEpisode = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
        setEpisode(response.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do episódio:', error);
      }
    };

    fetchEpisode();
  }, [id]);

  return (
    <div>
      <h2>Detalhes do Episódio</h2>
      {episode ? (
        <div className="episode-details">
          <h3>{episode.name}</h3>
          <p>Episódio: {episode.episode}</p>
          <p>Data de lançamento: {episode.air_date}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default EpisodeDetail;
