/**
 * Created by 1234 on 3.6.2017 г..
 */
function treasureLocation(arr) {
    for(let i=0;i<arr.length;i+=2){
        let x=arr[i];
        let y=arr[i+1];
        let location=getLocation(x,y);
        console.log(location);
    }
    function getLocation(x,y){
        tuvalux1=1;
        tuvalux2=3;
        tuvaluy1=1;
        tuvaluy2=3;

        tongax1=0;
        tongax2=2;
        tongay1=6;
        tongay2=8;

        samoax1=5;
        samoax2=7;
        samoay1=3;
        samoay2=6;

        cookx1=4;
        cookx2=9;
        cooky1=7;
        cooky2=8;

        tokelaux1=8;
        tokelaux2=9;
        tokelauy1=0;
        tokelauy2=1;

        if(x>=tokelaux1 && x<=tokelaux2 && y>=tokelauy1 && y<=tokelauy2){
            return "Tokelau";
        }
        else if(x>=samoax1 && x<=samoax2 && y>=samoay1 && y<=samoay2){
            return "Samoa";
        }
        else if(x>=tongax1 && x<=tongax2 && y>=tongay1 && y<=tongay2){
            return "Tonga";
        }
        else if(x>=tuvalux1 && x<=tuvalux2 && y>=tuvaluy1 && y<=tuvaluy2){
            return "Tuvalu";
        }
        else if(x>=cookx1 && x<=cookx2 && y>=cooky1 && y<=cooky2){
            return "Cook";
        }
        return "On the bottom of the ocean";
    }
}
treasureLocation([6, 4]);