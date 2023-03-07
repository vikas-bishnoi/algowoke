import React from 'react';
import './Square.css';

const Square = ({row, col, isSource, isDestination}) => {
    const additionalClasses = isSource
      ? 'node-source'
      : isDestination
      ? 'node-destination'
      : '';
  return (
    <div id={`square-${row}-${col}`} className={`square ${additionalClasses}`}></div>
  )
}

export default Square