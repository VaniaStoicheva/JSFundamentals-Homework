/**
 * Created by 1234 on 7.6.2017 г..
 */
function printElForStep(input) {
    let step=Number(input[input.length-1]);
    input.pop();
    let result='';
    for(let i=0;i<input.length;i+=step){
        result+=input[i]+'\n';
    }
    return result;
}
console.log(printElForStep(5,20,31,4,20,2));