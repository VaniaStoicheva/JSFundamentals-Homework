/**
 * Created by 1234 on 10.6.2017 г..
 */
/*
function startString(str,substring) {

    let index=str.indexOf(substring,0);
    if(index===0){
    return true;
    }
    return false;
}
console.log(startString('The quick brown fox…', 'The quick brown fox…'));*/
(str,substrings)=>str.startsWith(substrings);
