// Arquivo: src/components/LocationList.tsx

import React from 'react';
import { Link } from 'react-router-dom';

interface Location {
  id: number;
  name: string;
}

interface LocationListProps {
  locations: Location[];
}

const LocationList: React.FC<LocationListProps> = ({ locations }) => {
  return (
    <div>
      <h2>Lista de Localizações</h2>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>
            <Link to={`/location/${location.id}`}>{location.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
