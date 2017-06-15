/**
 * Created by 1234 on 26.5.2017 г..
 */
function distance3d([x1,y1,z1,x2,y2,z2]) {
    let p1={x:x1,y:y1,z:z1};
    let p2={x:x2,y:y2,z:z2};
    let distance=Math.sqrt(Math.pow((p1.x-p2.x),2)+Math.pow((p1.y-p2.y),2)+Math.pow((p1.z-p2.z),2));
    return distance;

}
console.log(distance3d([1, 1, 0, 5, 4, 0]));