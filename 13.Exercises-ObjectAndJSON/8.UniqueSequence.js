/**
 * Created by 1234 on 13.6.2017 г..
 */
function uniqueSequence(dataRow) {
    let uniqueSequence=new Map();
    for(let row of dataRow){
        let numArr=JSON.parse(row)
            .map(Number)
            .sort((a,b)=>b-a);
        let currentSum=numArr.reduce((a,b)=>a+b);
        if(!uniqueSequence.has(currentSum)){
            uniqueSequence.set(currentSum,numArr);
        }
    }
    let sortedMap=[...uniqueSequence.entries()].sort(sortByLength);
    for(let [sum,arr] of sortedMap){
        console.log(`[${arr.join(', ')}]`);
    }
    function sortByLength(a,b) {
        let aLen=a[1].length;
        let bLen=b[1].length;
        return aLen-bLen;
    }
}
uniqueSequence([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'

]);