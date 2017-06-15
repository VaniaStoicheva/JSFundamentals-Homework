/**
 * Created by 1234 on 2.6.2017 г..
 */
function modify(num) {
    let numAsStr=num.toString();
    let sum=sumOfDigits(numAsStr);
    while (sum/numAsStr.length<=5){
        numAsStr+='9';
        sum=sumOfDigits(numAsStr);
    }
    console.log(numAsStr);
    function sumOfDigits(numAsStr) {
        let sum=0;
        for (let digit of numAsStr) {
            sum+=Number(digit);
        }
        return sum;
    }
}
modify(101);