/**
 * Created by 1234 on 13.6.2017 г..
 */
function storeCataloge(strArr) {
    let initialMap=new Map();
    for(let row of strArr){
        let [product,price]=row.split(/\s:\s/g);
        let initial=product[0];
        if(!initialMap.has(initial)){
            initialMap.set(initial,new Map());
        }
        initialMap.get(initial).set(product,price);
    }
    let sortedMap=[...initialMap.entries()].sort(sorter);
    for(let [initial,productsMap] of sortedMap){
        console.log(`${initial}`);
        let sortedProduct=[...productsMap.entries()].sort(sorter);
        for(let [product,price] of sortedProduct){

            console.log(`  ${product}: ${price}`);
        }
    }

    function sorter(a,b) {
        return a[0].localeCompare(b[0]);
    }

}
storeCataloge([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10',

]);