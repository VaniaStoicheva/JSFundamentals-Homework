/**
 * Created by 1234 on 26.5.2017 г..
 */
function colorfulNumbers(numbers) {
    let html='<ul>\n';
    for(let i=1;i<=numbers;i++){
        let color='blue';
        if(i%2!=0){ color='green';}
        html+=`<li><span style="color: ${color}">${i}</span></li>\n`;
    }
    html+='</ul>';
    return html;
}
console.log(colorfulNumbers(5));