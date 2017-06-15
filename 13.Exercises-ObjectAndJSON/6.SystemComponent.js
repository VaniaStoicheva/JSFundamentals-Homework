/**
 * Created by 1234 on 14.6.2017 г..
 */
function component(strArr) {
    let componentMap=new Map();
    for(let row of strArr){
        let [name,component,subcomponent]=row.split(/\s\|\s/g);

        if(!componentMap.has(name)){
            componentMap.set(name,new Map())
        }
        if(!componentMap.get(name).has(component)){
        componentMap.get(name).set(component,[]);
        }

        componentMap.get(name).get(component).push(subcomponent);
    }

    let sortedMap=[...componentMap.entries()].sort(sorter);
    for(let [name,componentMap] of sortedMap){
        console.log(name);
        let sortedComponentMap=[...componentMap.entries()].sort(sorter);
        for(let [comp,subcomp] of sortedComponentMap){

            console.log(`|||${comp}`);

                for(let sub of subcomp){
                    console.log(`||||||${sub}`);
                }





        }
    }

    function sortByComponent(a,b) {
        if([...a[1]].length>[...b[1]].length){
            return false;
        }else{
            return true;
        }
    }
    function sorter(a,b) {
        let secondCriteria=a[0].localeCompare(b[0]);
        return secondCriteria;
    }
    function sortByCriteria(a,b) {
        let aLen=a[1].length;
        let bLen=b[1].length;
        let firstCriteria=bLen-aLen;

        if(firstCriteria!==0){
            return firstCriteria;
        }else{
            let secondCriteria=a[0].localeCompare(b[0]);
            return secondCriteria;
        }
    }
    function subCompSort(a, b) {
        return a[1].length < b[1].length;
    }


    function compareSystems(a, b) {
        if ([...a[1]].length > [...b[1]].length) {
            return -1;
        } else if ([...a[1]].length < [...b[1]].length) {
            return 1;
        } else {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        }

    }
}
component([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security',

])
