/**
 * Created by 1234 on 8.6.2017 г..
 */
function orbit(arr) {
    let [row,col,x,y]=arr;

    let matrix=[];
    for (let i = 0; i < row ; i++) {
        matrix.push('0'.repeat(col).split('').map(Number));
    }

    let num=1;
    matrix[x][y]=num;
    let counter=1;
    let currentRow=x;
    let currentCol=y;

    while(true){
        let isField=false;
        num++;
        let startRow=Math.max(0,currentRow-counter);
        let startCol=Math.max(0,currentCol-counter);
        let endRow=Math.min(matrix.length-1,currentRow+counter);
        let endCol=Math.min(matrix[0].length-1,currentCol+counter);

        for (let row = startRow; row <=endRow; row++) {
            for (let col = startCol; col <=endCol; col++) {
                if(matrix[row][col]===0){
                    matrix[row][col]=num;
                isField=true;
                }
            }
        }
        counter++;
        if(!isField){
             break;
        }
    }
let result=matrix.map(row=>row.join(' ')).join('\n');
console.log(result);
}
orbit([4, 4, 0, 0]);