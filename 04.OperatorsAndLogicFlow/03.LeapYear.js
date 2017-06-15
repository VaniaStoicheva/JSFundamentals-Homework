/**
 * Created by 1234 on 26.5.2017 г..
 */
function leap(year) {
    if((year%4==0 && year%100!=0) || year%400==0){
        return 'yes';
    }else {
        return 'no';
    }
}
console.log(leap(1900));