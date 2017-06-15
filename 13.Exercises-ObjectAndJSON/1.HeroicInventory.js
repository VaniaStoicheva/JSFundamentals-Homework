/**
 * Created by 1234 on 14.6.2017 г..
 */
function heroic(strArr) {
    let heroData=[];
    for (let i=0;i<strArr.length;i++) {
        let currHero = strArr[i].split('/').map(e=>e.trim());
        let heroName = currHero[0].trim();
        let heroLevel = Number(currHero[1]);
        let heroItemsArr = currHero[2].split(/,\s/g).map(e=>e.trim());

        let heroItems = [];
       if(currHero[2].length>2){
           heroItems=currHero[2].split(/,\s/g).map(e=>e.trim());
       }


            let hero={
            name:heroName,
            level:heroLevel,
            items:heroItems
            };
        heroData.push(hero);
    }
    console.log(JSON.stringify(heroData));
}
heroic([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
    'Jake / 1000 / Gauss, HolidayGrenade'

])