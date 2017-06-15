/**
 * Created by 1234 on 12.6.2017 г..
 */
function towns(strArr) {
    strArr.shift();
    let towns=[];

    for(let row of strArr){
       let townTokes= row.split('|')
           .filter(e=>e!=='')
           .map(e=>e.trim());
       let town={
           Town:townTokes[0],
           Latitude:Number(townTokes[1]),
           Longitude:Number(townTokes[2])
       }
       towns.push(town);
    }
        return JSON.stringify(towns);
}
console.log(towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));