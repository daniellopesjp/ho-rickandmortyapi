// Arquivo: src/components/EpisodeList.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Episode {
  id: number;
  name: string;
}

interface EpisodeListProps {
  characterId: number;
}

const EpisodeList: React.FC<EpisodeListProps> = ({ characterId }) => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);
        const episodeIds = response.data.episode.map((episodeUrl: string) => {
          const parts = episodeUrl.split('/');
          return parseInt(parts[parts.length - 1]);
        });
        const episodesData = await Promise.all(
          episodeIds.map((id: number) => axios.get(`https://rickandmortyapi.com/api/episode/${id}`))
        );
        const episodesInfo = episodesData.map((episode: any) => episode.data);
        setEpisodes(episodesInfo);
      } catch (error) {
        console.error('Erro ao buscar episódios:', error);
      }
    };

    fetchEpisodes();
  }, [characterId]);

  return (
    <div>
      <h2>Episódios</h2>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <Link to={`/episode/${episode.id}`}>{episode.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeList;
