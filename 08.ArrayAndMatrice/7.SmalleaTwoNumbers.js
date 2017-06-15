function smallesTwo(arr) {
    let result=arr.sort((a,b)=>a-b);
    return result[0]+' '+result[1];
}