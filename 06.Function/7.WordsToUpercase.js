/**
 * Created by 1234 on 2.6.2017 г..
 */
function wordsToUppercase(str) {
    let upperWord=str.toUpperCase();
    let words=extractWords();
    words=words.filter(w=>w!='');
    return words.join(', ');
    function extractWords() {
        return upperWord.split(/\W+/);
    }
}
console.log(wordsToUppercase("hi str"));