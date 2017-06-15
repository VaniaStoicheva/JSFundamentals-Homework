/**
 * Created by 1234 on 14.6.2017 г..
 */
function autoCompany(strArr) {
    let carMap=new Map();
    for(let car of strArr){
        let [brand,model,produced]=car.split(' | ');
        produced=Number(produced);

        if(!carMap.has(brand)){
        carMap.set(brand,new Map());
        }
        if(!carMap.get(brand).has(model)) {
            carMap.get(brand).set(model, 0);
        }
        let oldProduced=Number(carMap.get(brand).get(model));
        carMap.get(brand).set(model,oldProduced+produced);
    }

    for(let [brand,cars] of carMap){
        console.log(`${brand}`);
        for(let [model,produced] of cars){
            console.log(`###${model} -> ${produced}`);
        }
    }
}
autoCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10',

])