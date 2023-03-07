import React from 'react';
import './Square.css';

const Square = ({row, col, isSource, isDestination, onMouseDown, onMouseOver, onMouseUp}) => {
    const additionalClasses = isSource
      ? 'square-source'
      : isDestination
      ? 'square-destination'
      : '';
  return (
    <div 
      id={`square-${row}-${col}`} 
      className={`square ${additionalClasses}`} 
      onMouseDown={() => onMouseDown(row, col)}
      onMouseOver={() => onMouseOver(row, col)}
      onMouseUp ={() => onMouseUp(row, col)}>
    </div>
  )
}

export default Square