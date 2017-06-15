/**
 * Created by 1234 on 9.6.2017 г..
 */
function dates(text) {
    let pattern=/\b([0-9]{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;
    let result=pattern.exec(text);

    while (result!==null){
        let [date,day,month,year]=result;
        console.log(`${date} (Day: ${day}, Month: ${month}, Year: ${year})`);
        result=pattern.exec(text);
    }
}
console.log(dates('I am born on 30-Dec-1994.This is not date: 512-Jan-1996.My father is born on the 29-Jul-1955.'));;