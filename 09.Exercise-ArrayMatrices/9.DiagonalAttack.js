/**
 * Created by 1234 on 7.6.2017 г..
 */
function attack(arr) {
    let matrix=[];
    for(let i=0;i<arr.length;i++){
        matrix.push(arr[i].split(' ').map(Number));
    }

    let firstSum=0;
    let secondSum=0;
    for(let row=0;row<matrix.length;row++){
        for(let col=0;col < matrix[row].length; col++){
            if(row===col){
                firstSum+= matrix[row][col];
            }
            if(col===matrix[row].length-1-row){
                secondSum+= matrix[row][col];
            }
        }
    }
    
    if(firstSum===secondSum){
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(row !=col && col!==matrix.length-1-row){
                matrix[row][col]=firstSum;
                }
                
            }
            
        }
    }

    let result=matrix.map(row=>row.join(' ')).join('\n');
    console.log(result);
}
attack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);