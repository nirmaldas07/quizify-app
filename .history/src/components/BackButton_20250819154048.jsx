import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)} // go back to previous page
      className="text-white text-2xl mb-4 hover:text-gray-300"
    >
      ←
    </button>
  );
};

export default BackButton;
