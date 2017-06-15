/**
 * Created by 1234 on 9.6.2017 г..
 */
function employeData(arr) {
    let regex=/^([A-Z][a-zA-Z]*) - ([1-9]\d*) - ([A-Za-z0-9 \-]+)$/;
    let result=[];
    for(let employe of arr){
        let match=regex.exec(employe);
        if(match===null)continue;
        result.push(`Name: ${match[1]}
Position: ${match[3]}
Salary: ${match[2]}`);
    }
    return result.join('\n');
}
console.log(employeData(`Isacc - 1000 - CEO
Ivan - 500 - Employee
Peter - 500 - Employee
`));