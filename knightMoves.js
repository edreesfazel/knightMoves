function getPossibleMoves(position) {
    const[x,y] = position
    const moves = [
        [x + 2, y - 1],
        [x + 2, y + 1],
        [x - 2, y - 1],
        [x - 2, y + 1],
        [x + 1, y + 2],
        [x + 1, y - 2],
        [x - 1, y - 2],
        [x - 1, y + 2],
    ]

    return moves.filter(([newX, newY]) => newX >= 0 && newX < 8 && newY >= 0 && newY < 8)
}

function knightMoves(start, end){
    let queue = [[start, [start]]]
    let visited = new Set(`${start}`) // creates a set to keep track of visited positions.

    while(queue.length > 0) {
        let [position, path] = queue.shift(); 
        // this line removes teh first element from the queue & destructures it into 'position' 
        //(the current position of the knight) and 'path' (the path taken to reach this position)

        if(position.toString() === end.toString()) {
            return path
        } //checks if the current position is the end position. if so, function returns
        //the path to reach this position

        let nextMoves = getPossibleMoves(position);

        nextMoves.forEach(move => {
            let moveKey = `${move}` 
            //this creates a string representation of the move to
            //use as a key in the visited set

            if(!visited.has(moveKey)) {
                visited.add(moveKey)
                queue.push([move, path.concat([move])])
            }
        })
    }

    return "path not found"
}

console.log(knightMoves([0, 0], [3, 3]))
