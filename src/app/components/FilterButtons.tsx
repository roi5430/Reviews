'use client'
import React from 'react';

interface Props {
  onFilterChange: (filter: string) => void;
}

const FilterButtons: React.FC<Props> = ({ onFilterChange }) => {
  return (
    <div className="flex justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onFilterChange('highest')}
      >
        Найвища оцінка
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onFilterChange('lowest')}
      >
        Найнижча оцінка
      </button>
    </div>
  );
};

export default FilterButtons;