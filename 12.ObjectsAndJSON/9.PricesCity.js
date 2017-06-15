/**
 * Created by 1234 on 13.6.2017 г..
 */
function pricesInCity(strArr) {
    let productsMap=new Map();
    for(let row of strArr){

        let [town,product,price]=row.split(' | ').map(e=>e.trim());
        price=Number(price);
        if(!productsMap.has(product)){
            productsMap.set(product,new Map);
        }

        productsMap.get(product).set(town,price);
    }

    for(let [key,value] of productsMap){
        let lowest=[...value].reduce(function(a,b){
            if(a[1]<b[1]){
                return a;
            }else if(a[1]>b[1]){
                return b;
            }
            return a;
        });
        console.log(`${key} -> ${lowest[1]} (${lowest[0]})`);
        }


}
pricesInCity([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'

]);