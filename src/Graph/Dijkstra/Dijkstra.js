import React, { useEffect, useState } from 'react'
import { dijkstra } from '../Algorithms/dijkstra';
import Square from '../Components/Square';

const SOURCE_ROW = 4;
const SOURCE_COL = 4;
const DESTINATION_ROW = 7;
const DESTINATION_COL = 25;

const Dijkstra = () => {
  const [grid, setGrid] = useState([]);

  const createSquare = (row, col) => {
    return {
        isSource: SOURCE_ROW === row && SOURCE_COL === col,
        isDestination: DESTINATION_ROW === row && DESTINATION_COL === col,
        weight: Infinity,
        row,
        col,
        isVisited: false,
        prev: null
    }
  }

  const createGrid = () => {
    const newGrid = [];
    for(let i=0; i <= 10; i++) {
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

  const visualizeDijkstra = () => {
    const source = grid[SOURCE_ROW][SOURCE_COL];
    const destination = grid[DESTINATION_ROW][DESTINATION_COL];
    const visitedInOrder = dijkstra(grid, source, destination);
    const shortestPath = getShortestPath(destination);
    console.log("HI")
  }

  return (
    <>
        <div>
            {grid.map((row, idx) => {
                return <div key={idx}>
                    {row.map((square, sqIdx) => {
                        const {row, col, isDestination, isSource} = square;
                        return <Square row={row} col={col} isDestination={isDestination} isSource={isSource} key={sqIdx}/>;
                    })}
                </div>
            }) }
        </div>
        <button onClick={visualizeDijkstra}>
            Visualize
        </button>
    </>
  )
}

export default Dijkstra