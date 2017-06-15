/**
 * Created by 1234 on 10.6.2017 г..
 */
function capitalize(str) {
    let strArr=str.split(' ');
    for (let i = 0; i < strArr.length; i++) {
        strArr[i]=strArr[i].charAt(0).toUpperCase()+strArr[i].substring(1).toLowerCase();
    }
    return strArr.join(' ');
}
console.log(capitalize('Was that Easy? tRY thIs onE for SiZe!'));