function biggestEl(matrix) {
    let biggest=Number.NEGATIVE_INFINITY;

    matrix.forEach(row=>
        row.forEach(e=>{
        if(e>biggest) {
            biggest = e;
        }
        })
    );
    return biggest;
}