/**
 * Created by 1234 on 27.5.2017 г..
 */
function rounding([number,precision]) {
    let rounding=precision>15 ? Number(number.toFixed(15)) : Number(number.toFixed(precision));
    return rounding;
}
console.log(rounding([10.5, 3]));