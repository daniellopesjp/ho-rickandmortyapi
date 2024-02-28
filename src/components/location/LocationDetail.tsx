import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[]; // Podemos considerar os residentes como uma lista de URLs
}

interface Resident {
  id: number;
  name: string;
}

const LocationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [location, setLocation] = useState<Location | null>(null);
  const [residents, setResidents] = useState<Resident[]>([]);

  useEffect(() => {
    // Função para buscar detalhes da localização da API
    const fetchLocation = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/location/${id}`);
        setLocation(response.data);
        // Aqui, podemos buscar os detalhes dos residentes da localização
        await fetchResidents(response.data.residents);
      } catch (error) {
        console.error('Erro ao buscar detalhes da localização:', error);
      }
    };

    const fetchResidents = async (residentUrls: string[]) => {
      try {
        const promises = residentUrls.map(url => axios.get(url));
        const responses = await Promise.all(promises);
        const residentsData = responses.map(res => res.data);
        setResidents(residentsData);
      } catch (error) {
        console.error('Erro ao buscar detalhes dos residentes:', error);
      }
    };

    fetchLocation();
  }, [id]);

  return (
    <div>
      <h2>Detalhes da Localização</h2>
      {location ? (
        <div className="location-details">
          <h3>{location.name}</h3>
          <p>Tipo: {location.type}</p>
          <p>Dimensão: {location.dimension}</p>
          <div>
            <h4>Residentes:</h4>
            <ul>
              {residents.map((resident) => (
                <li key={resident.id}>{resident.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default LocationDetail;
