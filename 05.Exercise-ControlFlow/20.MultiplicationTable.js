/**
 * Created by 1234 on 27.5.2017 г..
 */
function multiTable(n) {
    let html = '<table border=1>';
    html += '<tr><th>' + 'x' + '</th>';
    for (let h = 1; h <= n; h++) {
        html += '<th>' + h + '</th>';
    }
    html += '</tr>';
    for (let i = 1; i <= n; i++) {
        html += '<td>' + i + '</td>';


        for (let j =i; j <= n; j++) {

            html += '<td>' + j + '</td>';
                    if(j>=2 && j<=n && i>=2 && (i+j)<=n*n) {
                        html += '<td>' + (i+j) + '</td>';
                    }
        }
        html += '</tr>';
    }


    html += '</table>';
    return html;


}
