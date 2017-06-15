/**
 * Created by 1234 on 27.5.2017 г..
 */
function degrees(grads) {
   let degrees=((grads*360)/400)%360;
   degrees=degrees<0 ? degrees+360 :degrees;
   console.log(degrees);

}
(degrees(850));