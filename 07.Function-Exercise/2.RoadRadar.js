/**
 * Created by 1234 on 3.6.2017 г..
 */
function roadRadar(arr) {
    let currentSpeed=Number(arr[0]);
    let zone=arr[1];

    function getLimit(zone) {
        switch (zone){
            case 'motorway':return 130;
            case 'interstate':return 90;
            case 'city':return 50;
            case 'residential':return 20;
        }
    }
    let limit=getLimit(zone)
    let infraction=getInfraction(currentSpeed,limit);
    if(infraction){
        console.log(infraction);
    }
    function getInfraction(currentSpeed,limit) {
        let overSpeed=currentSpeed-limit;
        if(overSpeed<=0){
            return false;
        }else{
            if(overSpeed<=20){
                return 'speeding';
            }
            if(overSpeed<=40){
                return 'excessive speeding';
            }else{
                return 'reckless driving';
            }
        }
    }
}
solve([40, 'city']);