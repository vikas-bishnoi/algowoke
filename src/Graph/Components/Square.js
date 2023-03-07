import React from 'react';
import './Square.css';

const Square = ({row, col}) => {
  return (
    <div id={`square-${row}-${col}`} className='square'></div>
  )
}

export default Square