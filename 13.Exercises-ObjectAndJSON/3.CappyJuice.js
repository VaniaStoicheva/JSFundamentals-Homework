/**
 * Created by 1234 on 13.6.2017 г..
 */
function cappyJuice(strArr) {
    let flavorObj = {};
    let bottleObj = {};
    for (let row of strArr) {
        let [name, quantity] = row.split(/\s=>\s/g);
        quantity = Number(quantity);

        if (!flavorObj.hasOwnProperty(name)) {
            flavorObj[name] = quantity;
        } else {
            flavorObj[name] += quantity;
        }

        quantity = flavorObj[name];
        if (quantity >= 1000) {
            let bottleCounts = Math.floor(quantity / 1000);
            bottleObj[name] = bottleCounts;
        }
    }
    for (let name in bottleObj) {
        console.log(`${name} => ${bottleObj[name]}`);
    }
}
cappyJuice([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'

]);