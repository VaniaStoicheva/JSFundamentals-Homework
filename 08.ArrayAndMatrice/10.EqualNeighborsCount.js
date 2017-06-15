function equalNeighbors(matrix) {
    let neighbors=0;
    for(let row=0;row<matrix.length-1;row++){
        for(let col=0;col<matrix[row].length;col++){
            if(matrix[row][col]===matrix[row+1][col]){
                neighbors++;
            }
            else if(matrix[row][col]===matrix[row][col+1]){
                neighbors++;
            }
        }
    }
return neighbors;
}
console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]

));