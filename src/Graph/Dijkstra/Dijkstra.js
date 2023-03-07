import React, { useEffect, useState } from 'react'
import { dijkstra, getShortestPath } from '../Algorithms/dijkstra';
import Square from '../Components/Square';

const SOURCE_ROW = 4;
const SOURCE_COL = 4;
const DESTINATION_ROW = 7;
const DESTINATION_COL = 25;

const Dijkstra = () => {
  const [grid, setGrid] = useState([]);
  const [isMousePressed, setIsMousePressed] = useState(false);

  useEffect(() => {
    const newGrid = createGrid();
    setGrid(newGrid);
  }, []);

  const handleMouseDown = (row, col) => {
    setIsMousePressed(true);
    const newGrid = createGridWithBlock(row, col);
    setGrid(newGrid);
  }
  
  const handleMouseOver = (row, col) => {
    if(isMousePressed === false)
        return;
    const newGrid = createGridWithBlock(row, col);
    setGrid(newGrid);
  }

  const handleMouseUp = () => {
    setIsMousePressed(false);
  }

  const createSquare = (row, col) => {
    return {
        isSource: SOURCE_ROW === row && SOURCE_COL === col,
        isDestination: DESTINATION_ROW === row && DESTINATION_COL === col,
        weight: Infinity,
        row,
        col,
        isVisited: false,
        isBlock: false,
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
  
  const createGridWithBlock = (row, col) => {
    const newGrid = grid.slice();
    const square = newGrid[row][col];
    newGrid[row][col] = {...square, isBlock: !square.isBlock}
    return newGrid;
  }

  const animatePath = (shortestPath) => {
    for (let i = 0; i < shortestPath.length; i++) {
        setTimeout(() => {
          const square = shortestPath[i];
          document.getElementById(`square-${square.row}-${square.col}`).className =
            'square square-shortest-path';
        }, 50 * i);
      }
  }

  const animateVisited = (visitOrder, shortestPath) => {
    for(let i=0; i<=visitOrder.length; i++) {
        if(i === visitOrder.length) {
            setTimeout(() => {
                animatePath(shortestPath);
              }, 10 * i);
            return;
        }
        setTimeout(() => {
            const square = visitOrder[i];
            document.getElementById(`square-${square.row}-${square.col}`).className = 'square square-visited'
        }, 10 * i)
    }
  }

  const visualizeDijkstra = () => {
    const source = grid[SOURCE_ROW][SOURCE_COL];
    const destination = grid[DESTINATION_ROW][DESTINATION_COL];
    const visitOrder = dijkstra(grid, source, destination);
    const shortestPath = getShortestPath(destination);
    animateVisited(visitOrder, shortestPath);
  }

  return (
    <>
        <div>
            {grid.map((row, idx) => {
                return <div key={idx}>
                    {row.map((square, sqIdx) => {
                        const {row, col, isDestination, isSource, isBlock} = square;
                        return <Square row={row} col={col} isDestination={isDestination} isSource={isSource} key={sqIdx} isBlock={isBlock} onMouseDown={handleMouseDown} onMouseOver={handleMouseOver} onMouseUp={handleMouseUp}/>;
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