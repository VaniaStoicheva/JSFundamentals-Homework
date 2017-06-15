/**
 * Created by 1234 on 27.5.2017 г..
 */
function units(inches) {
    let foot=inches/12;
    let rem=inches%12;
    console.log(`${Math.floor(foot)}'-${rem}"`);
}
units(55);