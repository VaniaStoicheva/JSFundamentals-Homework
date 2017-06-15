/**
 * Created by 1234 on 13.6.2017 г..
 */
function countWordInMap(srtArr) {
    let Str=srtArr.join('\n').toLowerCase();
    let wordsStr=Str.split(/[^A-Za-z0-9_]+/g).filter(e=>e!='');
    let wordMap=new Map();

    for(let word of wordsStr){

        if(!wordMap.has(word)){
            wordMap.set(word,0);
        }
        wordMap.set(word,wordMap.get(word)+1);
    }

    let wordMapS=Array.from(wordMap.keys()).sort();

    [...wordMapS].forEach(w=>console.log(`'${w}' -> ${wordMap.get(w)} times`));
}
countWordInMap([
    'Far too slow, you\'re far too slow.'
]);