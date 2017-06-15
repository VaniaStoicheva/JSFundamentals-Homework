/**
 * Created by 1234 on 13.6.2017 г..
 */
function population(strArr) {
    let townPop=new Map();
    for(let row of strArr){
        let [name,pop]=row.split(' <-> ');
        if(!townPop.has(name)){
        townPop.set(name,0);
        }
        townPop.set(name,townPop.get(name)+Number(pop));
    }
    [...townPop].forEach(([town,pop])=>console.log(`${town} : ${pop}`))
}
population([
    'Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 1000000',
'Washington <-> 23450',
'Las Vegas <-> 100000',

]);