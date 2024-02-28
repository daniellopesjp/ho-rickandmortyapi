import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
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
        const episodeUrls: string[] = response.data.episode;
        const episodesData = await Promise.all(
          episodeUrls.map(url => axios.get(url))
        );
        const episodesInfo = episodesData.map(episode => episode.data);
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
            <p>Data de lançamento: {episode.air_date}</p>
            <p>Episódio: {episode.episode}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeList;
