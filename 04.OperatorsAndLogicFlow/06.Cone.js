/**
 * Created by 1234 on 26.5.2017 г..
 */
"use strict";
function coneArea(r,h){
    let s=Math.sqrt(r*r+h*h);
    let volume=Math.PI*r*r*h/3;
    let area=Math.PI*r*(r+s);
    console.log(`volume= ${volume}`);
    console.log((`area= ${area}`));
}