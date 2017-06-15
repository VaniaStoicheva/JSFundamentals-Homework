/**
 * Created by 1234 on 8.6.2017 г..
 */
function spiralMatrix(rows,cols) {

    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix.push('0'.repeat(cols).split('').map(Number))
    }
    let num=1;
    matrix[0][0]=num;
    let counter=1;
    let startRow=0;
    let startCol=0;

    function fillMatrix(startRow, startCol) {

        for (let row = startRow; row < rows; row++) {
            for (let col = startCol; col < cols; col++) {
                num++;
                matrix[row][col]=num;
            }
        }
        //fill top
        // fill right
        // fill bottom
        //fill left

        return fillMatrix(++startRow, ++startCol)
    }
    while(true){
        let isFill=false;


        for (let row = startRow; row < rows; row++) {
            for (let col = startCol; col < cols; col++) {
                if(matrix[row][col]===0){
                    num++;

                        matrix[row][col] = num;
                        isFill = true;
                    if(matrix[col]=cols){

                    }
                }

            }
        }
        counter++;
        if(!isFill){
        break;
        }
    }
   

    let result=matrix.map(row=>row.join(' ')).join('\n');
    console.log(result);
}

spiralMatrix(3,3);