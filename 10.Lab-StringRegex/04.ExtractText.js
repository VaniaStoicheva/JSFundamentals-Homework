/**
 * Created by 1234 on 9.6.2017 г..
 */
function extractText(text) {
    let result=[];
    let open=text.indexOf('(');


    while(open>-1){
        let close=text.indexOf(')',open);
        if(close===-1)break;
        let snippet=text.substring(open+1,close);
        result.push(snippet);
        open=text.indexOf('(',close);

    }
    return result.join(', ');
}