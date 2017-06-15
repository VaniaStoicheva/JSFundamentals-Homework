/**
 * Created by 1234 on 26.5.2017 г..
 */
function distance([v1,v2,t]) {
    let timeInHour=t/3600;
    let distance=Math.abs(v1-v2)*timeInHour;
    return distance*1000;
}
console.log(distance([5, -5, 40]));