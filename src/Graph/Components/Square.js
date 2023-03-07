import React from 'react';
import './Square.css';

const Square = ({row, col, isSource, isDestination}) => {
    const additionalClasses = isSource
      ? 'square-source'
      : isDestination
      ? 'square-destination'
      : '';
  return (
    <div id={`square-${row}-${col}`} className={`square ${additionalClasses}`}></div>
  )
}

export default Square