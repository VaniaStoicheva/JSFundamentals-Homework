/**
 * Created by 1234 on 1.6.2017 г..
 */
function Rectangle(count=5) {

        for(let j=1;j<=count;j++){
            printStars();
        }

    function printStars(n=count) {
        console.log('*'+' *'.repeat(n-1));
    }
}
