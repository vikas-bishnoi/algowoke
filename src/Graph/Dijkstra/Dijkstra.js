import React, { useEffect, useState } from 'react'
import Square from '../Components/Square';

const Dijkstra = () => {
  const [grid, setGrid] = useState([]);
  useEffect(() => {
    const newGrid = [];
    for(let i=1; i <= 10; i++) {
        const row = [];
        for(let j=0; j<=30; j++) {
            row.push([]);
        }
        newGrid.push(row);
    }
    setGrid(newGrid);
  }, []);

  return (
    <div>
        {grid.map((row, idx) => {
            return <div>
                {row.map((square, sqIdx) => {
                    return <Square />;
                })}
            </div>
        }) }
    </div>
  )
}

export default Dijkstra