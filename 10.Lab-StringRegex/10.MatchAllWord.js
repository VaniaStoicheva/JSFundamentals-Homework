/**
 * Created by 1234 on 9.6.2017 г..
 */
function alword(text) {
    let regex=/\w+/g;
    console.log(text.match(regex).join('|'));
}