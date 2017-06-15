/**
 * Created by 1234 on 9.6.2017 г..
 */
function censorship(text,arrCensor) {

    for(let word of arrCensor){
        let replaced='-'.repeat(word.length);
        while (text.indexOf(word)>-1){
            text=text.replace(word,replaced);
        }
    }
    return text;
}
console.log(censorship('roses are red, violets are blue', [', violets are', 'red']));