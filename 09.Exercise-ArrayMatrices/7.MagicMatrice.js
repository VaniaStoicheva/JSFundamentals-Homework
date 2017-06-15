/**
 * Created by 1234 on 8.6.2017 г..
 */
function magic(matrix) {
        let matrixCol=0;

    for (let row = 0; row < matrix.length; row++) {

        let sumCellCol=0;
        if(matrix.length==matrix[row].length){
            for (let col = 0; col < matrix.length; col++) {
                sumCellCol += Number(matrix[row][col]);
            }
        }else{
            return false;
        }
        if(row===0){
        matrixCol=sumCellCol;
        }
        if(matrixCol!==sumCellCol){
            return false;
        }

    }
return true;
}
console.log((magic([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
)));