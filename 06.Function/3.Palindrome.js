/**
 * Created by 1234 on 2.6.2017 г..
 */
function isPalindrome(word) {
    for(let i=0;i<=word.length;i++){
        if(word[i]!=word[word.length-i-1]){
            return false;
        }
    }
    return true;
}