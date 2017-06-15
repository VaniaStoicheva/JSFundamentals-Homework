/**
 * Created by 1234 on 13.6.2017 г..
 */
function sumByTown(strarr) {
    let towns={};
    for (let i = 0; i < strarr.length; i+=2) {
        let town=strarr[i];
        let value=Number(strarr[i+1]);
        if(!towns.hasOwnProperty(town)){
        towns[town]=0;
        }
        towns[town]+=value;
    }
    console.log(JSON.stringify(towns));
}
sumByTown([
    'Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4'
]);