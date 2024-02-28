// Arquivo: src/components/BackButton.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navega para trás
  };

  return (
    <button onClick={handleGoBack}>Voltar</button>
  );
};

export default BackButton;
