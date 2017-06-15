/**
 * Created by 1234 on 26.5.2017 г..
 */
function isPrime(num) {
    let prime=true;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            prime=false;
            break;
        }
    }
    return prime && (num>1);
}