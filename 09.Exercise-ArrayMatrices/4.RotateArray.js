/**
 * Created by 1234 on 7.6.2017 г..
 */
function rotateArr(arr) {
    let rotatecount=Number(arr.pop());
    rotatecount%=arr.length;
    for(let i=0;i<rotatecount;i++){
        let lastEl=arr.pop();
        arr.unshift(lastEl);
    }
    return arr.join(' ');

}
console.log(rotateArr(['Banana', 'Orange', 'Coconut','Apple', '15']));