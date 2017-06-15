/**
 * Created by 1234 on 10.6.2017 г..
 */
function captureTheNumber(str) {
    let text=str.join(' ');
    let regex=/(\d+)/g;
    let numbers=text.match(regex);
    console.log(numbers.join(' '));
}
captureTheNumber(['123a456', '789b987','654c321','0']);