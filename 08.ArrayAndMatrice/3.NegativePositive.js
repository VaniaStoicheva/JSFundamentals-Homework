/**
 * Created by 1234 on 6.6.2017 г..
 */
function negativeositive(arr) {
    let result=[];
    for(let num of arr){
        if(num<0){
            result.unshift(num);
        }else{
            result.push(num);
        }
    }
    return result;
}