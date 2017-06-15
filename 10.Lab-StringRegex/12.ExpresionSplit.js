/**
 * Created by 1234 on 9.6.2017 г..
 */
function exprSplit(expression) {
        let elements=expression.split(/[\s.();,]+/);
        console.log(elements.join('\n'));
}