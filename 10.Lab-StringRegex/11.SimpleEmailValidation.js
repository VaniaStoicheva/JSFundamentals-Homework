/**
 * Created by 1234 on 9.6.2017 г..
 */
function emaiValid(email) {
    let regex=/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    return regex.test(email)? 'Valid' : 'Invalid';
}