/**
 * Created by 1234 on 10.6.2017 г..
 */
function findVariable(text) {
    let result=[];
    let regex=/\b_([a-zA-Z]+)\b/g;
    let match=regex.exec(text);
    while (match){
        result.push(match[1]);
        match=regex.exec(text);
    }
    return result.join(',');
}
console.log(findVariable('__invalidVariable _evenMoreInvalidVariable_ _v{alidVariable'));