/**
 * Created by 1234 on 10.6.2017 г..
 */
function extract(arr) {
    let validArr=[];
    let pattern=/www\.([A-Za-z\d\-]+)(\.[a-z]+)+/g;
    for(let sentence of arr){
        let match=pattern.exec(sentence);
        while (match){
            validArr.push(match[0]);
            match=pattern.exec(sentence);
        }
    }
   return validArr.join('\n');
}
console.log(extract([
    '   Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    '   Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.'

]));