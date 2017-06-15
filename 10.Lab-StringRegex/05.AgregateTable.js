/**
 * Created by 1234 on 9.6.2017 г..
 */
function aggregateTable(arr) {
    let cityList=[];

    let sumTotal=0;
    for(let line of arr){
        let strLine=line.split('|');
       let city=strLine[1].trim();
        cityList.push(city);
       let sum=Number(strLine[2].trim());
        sumTotal+=sum;

    }
    console.log(cityList.join(', ') + '\n' + sumTotal);
}
aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);