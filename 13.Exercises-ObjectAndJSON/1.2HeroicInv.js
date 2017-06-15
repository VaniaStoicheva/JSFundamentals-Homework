/**
 * Created by 1234 on 14.6.2017 г..
 */
function hero(strArr) {
    let heroMap=new Map();
    for(let hero of strArr){
        let currHero=hero.split(/\s\/\s/g).map(e=>e.trim());
        let [name,level,items]=currHero;
        level=Number(level);
        items=items.split(',').map(e=>e.trim());
        if(!heroMap.has(name)){
            heroMap.set(name,new Map());
        }
        heroMap.get(name).set(level,items);
    }
    console.log(heroMap);
}
hero([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
    'Jake / 1000 / Gauss, HolidayGrenade'

])