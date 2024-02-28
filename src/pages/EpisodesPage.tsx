// Arquivo: src/pages/EpisodesPage.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EpisodesPage: React.FC = () => {
  const [episodes, setEpisodes] = useState<any[]>([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/episode');
        setEpisodes(response.data.results);
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };

    fetchEpisodes();
  }, []);

  return (
    <div className='container'>
      <h1>Página de Episódios</h1>
      <ul>
        {episodes.map((episode: any) => (
          <li key={episode.id}>
            <Link to={`/episode/${episode.id}`}> {/* Link para os detalhes do episódio */}
              <h3>{episode.name}</h3>
            </Link>
            <p>Air Date: {episode.air_date}</p>
            <p>Episode: {episode.episode}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodesPage;
