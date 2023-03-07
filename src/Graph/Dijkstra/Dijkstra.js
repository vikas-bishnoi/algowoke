import React, { useEffect, useState } from 'react'
import Square from '../Components/Square';

const SOURCE_ROW = 4;
const SOURCE_COL = 4;
const DESTINATION_ROW = 7;
const DESTINATION_COL = 25;

const Dijkstra = () => {
  const [grid, setGrid] = useState([]);

  const createSquare = (row, col) => {
    return {
        row,
        col,
        isVisited: false
    }
  }

  const createGrid = () => {
    const newGrid = [];
    for(let i=1; i <= 10; i++) {
        const row = [];
        for(let j=0; j<=30; j++) {
            row.push(createSquare(i, j));
        }
        newGrid.push(row);
    }
    return newGrid;
  }

  useEffect(() => {
    const newGrid = createGrid();
    setGrid(newGrid);
  }, []);

  return (
    <>
        <div>
            {grid.map((row, idx) => {
                return <div>
                    {row.map((square, sqIdx) => {
                        return <Square />;
                    })}
                </div>
            }) }
        </div>
        <button onClick={() => {}}>
            Visualize
        </button>
    </>
  )
}

export default Dijkstra