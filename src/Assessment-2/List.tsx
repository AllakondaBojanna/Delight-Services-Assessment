// List.tsx
import React from 'react';

interface ListProps {
  names: string[];
}

const List: React.FC<ListProps> = ({ names }) => (
  <ul>
    {names.map((name, index) => (
      <li key={index}>{name}</li>
    ))}
  </ul>
);

export default List;
