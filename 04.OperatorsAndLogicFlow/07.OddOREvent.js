/**
 * Created by 1234 on 26.5.2017 г..
 */
function oddEvent(number) {
    let rem=number%2
    if(rem==0){
        return 'even';
    }
    else if(rem==Math.round(rem)){
        return 'odd';
    }else {
        return 'invalid';
    }
}
console.log(oddEvent(-3));