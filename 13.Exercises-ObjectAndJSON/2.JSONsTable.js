/**
 * Created by 1234 on 14.6.2017 г..
 */

/*function jasonsTable(strArr) {
 let html='<table>\n';
 for(let row of strArr) {
 let arrToJSON = JSON.parse(row);
 html +='     <tr>\n';

 for (let persons of Object.keys(arrToJSON)) {
 arrToJSON[persons]=htmlEscape(''+arrToJSON[persons]);
 html +=`        <td>${arrToJSON[persons]}</td>\n`;

 }
 html +='     <tr>\n';
 }
 html+='</table>'
 function htmlEscape(text) {
 let map = { '"': '&quot;', '&': '&amp;',
 "'": '&#39;', '<': '&lt;', '>': '&gt;' };
 return text.replace(/[\"&'<>]/g, ch => map[ch]);
 }
 return html;
 }
``
 */
console.log(jasonsTable([
    '{"name":"Pesho","position":"Promenliva &&","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}'


]));