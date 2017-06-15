/**
 * Created by 1234 on 7.6.2017 г..
 */
/*function sequence(arr) {
    let biggest=-Infinity;
    arr.filter((e,i)=>e>=biggest ? biggest=e : arr.splice(i,1));
    console.log(arr.join('\n'));
}*/
function sequence(arr){
    let currEl=arr[0];
    return arr.filter(function(value){
        if(value>=currEl){
        currEl=value;
        return true;
        }

    }).join('\n');

}

console.log(sequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));