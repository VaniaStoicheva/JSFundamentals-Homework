/**
 * Created by 1234 on 13.6.2017 г..
 */
function countWord(arrStr) {

    let sentence=arrStr.join('\n');
    let words=sentence.split(/[^A-Za-z0-9_]+/g).filter(e=>e!=='');
    let wordCouns={};
    for (let word of words){

        wordCouns[word] ? wordCouns[word]++ : wordCouns[word]=1;
    }
    console.log(JSON.stringify(wordCouns));
}
countWord(['Far too slow, you\'re far too slow.']);