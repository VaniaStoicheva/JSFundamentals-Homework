/**
 * Created by 1234 on 27.5.2017 г..
 */
function assign(input) {
    let [p1,v1,p2,v2,p3,v3]=input;
    let obj={};
    obj[p1]=v1;
    obj[p2]=v2;
    obj[p3]=v3;
    return obj;
}


console.log(assign(['name', 'Pesho', 'jh5jghj', '23', 'gender', 'male']));;