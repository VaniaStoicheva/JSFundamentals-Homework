/**
 * Created by 1234 on 10.6.2017 г..
 */
function findOcc(sentence,word) {
    let pattern = new RegExp(`\\b${word}\\b`,'gi');
    let matches=sentence.match(pattern);
    if(matches){
        console.log(matches.length);
    }else{
        console.log(0);
    }



}
console.log(findOcc('The waterfall was so high, that the child couldn’t see its peak.', 'the'));