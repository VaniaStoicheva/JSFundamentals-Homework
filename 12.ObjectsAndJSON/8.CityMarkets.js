/**
 * Created by 1234 on 13.6.2017 г..
 */
function cityMarkets(strArr) {
    let summary=new Map();

    for(let row of strArr){
        let [town,products,sales]=row.split(' -> ');
        sales=sales.split(' : ').reduce((a,b)=>a*b);
        //Verify town exist
        if(!summary.has(town)){
        summary.set(town,new Map());
        }
        //Verify product exist
        if(!summary.get(town).has(products)){
        summary.get(town).set(products,0);
        }
        let oldSales=summary.get(town).get(products);
        summary.get(town).set(products,oldSales+sales);
    }


    for(let [town,products] of summary){
        console.log(`Town - ${town}`);
        for(let [product,sales] of products){
            console.log(`$$$${product} : ${sales}`);
        }
    }
}
cityMarkets([
'Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 15',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : ',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.'
]);