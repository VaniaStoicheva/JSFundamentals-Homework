/**
 * Created by 1234 on 1.6.2017 г..
 */
function printStars(count) {
    console.log('*'.repeat(count));
}
function Triangle(count) {
    for(let i=1;i<=count;i++){
        printStars(i);
    }
    for(let i=count-1;i>=1;i--){
        printStars(i);
    }
}
