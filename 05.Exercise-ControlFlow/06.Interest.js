/**
 * Created by 1234 on 27.5.2017 г..
 */
function interest([sum,rate,compPeriodInMonth,totalYears]) {
    let compFrequency=12/compPeriodInMonth;
    let rates=rate/100;
    let total=sum*Math.pow((1+rates/compFrequency),totalYears*compFrequency);
    console.log(total.toFixed(2));
}
interest([100000, 5, 12, 25]);