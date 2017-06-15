/**
 * Created by 1234 on 9.6.2017 г..
 */
function multiplay(str) {

    str = str.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
        (match, num1, num2) => Number(num1) * Number(num2));
    console.log(str);

}

// let regex=/\b([\d *])+([\d.\d])+\b/g;