/**
 * Created by 1234 on 27.5.2017 г..
 */
function pointInRectangle(input) {
    let [x,y,xMin,xMax,yMin,yMax]=input.map(Number);
    if(x>=xMin && x<=xMax && y>=yMin && y<=yMax){
        console.log('inside');
    }else{
        console.log('outside');
    }
}