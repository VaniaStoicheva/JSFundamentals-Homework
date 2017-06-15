/**
 * Created by 1234 on 12.6.2017 г..
 */
function jsonToHTML(json) {
    let html='<table>\n';
    html+=' <tr>';
    let arrToJson=JSON.parse(json);


    for(let header of Object.keys(arrToJson[0])) {
        html += `<th>${htmlEscape(header)}</th>`;
    }
        html += '</tr>\n';

        for (let obj of arrToJson) {
            html += '   <tr>';

                for (let el of Object.keys(obj)){
                    obj[el]=htmlEscape(''+obj[el]);
                    html +=`<td>${obj[el]}</td>`;
                }
            html+='</tr>\n';
            }

            html+='</table>';

    return html;


    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
    function escape(str) {
        str = str.replace(new RegExp(/&/g), '&amp;')
            .replace(new RegExp(/</g), '&lt;')
            .replace(new RegExp(/>/g), '&gt;')
            .replace(new RegExp(/'/g), '&#39;')
            .replace(new RegExp(/"/g), '&quot;');
        return str;
    }

}
console.log(jsonToHTML(`[{"Name&":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]`
));