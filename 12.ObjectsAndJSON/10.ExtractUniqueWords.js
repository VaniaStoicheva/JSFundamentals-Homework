/**
 * Created by 1234 on 13.6.2017 г..
 */
function extractUniqueWords(strArr) {
    let text=strArr.join('\n');
    let unique=new Set();

        let words=text.split(/\W+/g)
            .filter(e=>e!=='')
            .map(e=>e.toLowerCase())
            .forEach(e=>unique.add(e));
        console.log([...unique].join(', '));


}
extractUniqueWords(['JS and Node.js', 'JS again and again', 'Oh, JS?']);