import PriorityQueue from "js-priority-queue";

let dirs = [[-1,0], [0,1], [1,0], [0,-1]];
export function dijkstra(grid, source, destination) {
    let n = grid.length;
    let m = grid[0].length;
    const visitedNodesInOrder = [];
    source.weight = 0;
    source.isVisited = true;
    const priority_queue = new PriorityQueue({ comparator: function(a, b) { return a.weight - b.weight; }});
    priority_queue.queue(source)
    while(priority_queue.length !== 0) {
        const top = priority_queue.dequeue();
        console.log(top.row + " " + top.col + " -> " + top.weight)

        if(top.weight === Infinity)
            return visitedNodesInOrder;

        visitedNodesInOrder.push(top);
        if(top === destination)
            return visitedNodesInOrder;
        
        for(let i=0; i<4; i++) {
            let nr = top.row + dirs[i][0];
            let nc = top.col + dirs[i][1];

            if(nr < 0 || nc < 0 || nr >= n || nc >= m || grid[nr][nc].isVisited === true) {
                continue;
            }

            const neighbor = grid[nr][nc];
            neighbor.weight = top.weight + 1;
            neighbor.prev = top;
            neighbor.isVisited = true;
            priority_queue.queue(neighbor);
        }
    }
}

export function getShortestPath(destination) {
    const path = [];
    let current = destination;
    while(current !== null) {
        path.push(current)
        current = current.prev;
    }
    return path;
}