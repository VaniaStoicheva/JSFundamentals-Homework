/**
 * Created by 1234 on 9.6.2017 г..
 */
function occurrences(str,text) {
    let count=0;
    let index=text.indexOf(str);
    while (index>-1){
        count++;
        index=text.indexOf(str,index+1);
    }
    return count;
}