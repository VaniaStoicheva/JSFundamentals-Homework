/**
 * Created by 1234 on 27.5.2017 г..
 */
function lastMonth(arr) {
    let [day,month,year]=arr;
    let date=new Date(year,month-1,0)
    console.log(date.getDate());
}
lastMonth([17, 3, 2002]);