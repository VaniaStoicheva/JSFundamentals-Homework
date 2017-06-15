/**
 * Created by 1234 on 9.6.2017 г..
 */
function usernames(arr) {

    let result=[];

    for(let user of arr){
        let [name,domain]=user.split('@');
        let domainToken=domain.split('.');
        domainToken=domainToken.map(e=>e[0]);
        let username=name + '.' + domainToken.join('');
        result.push(username);
    }
    console.log(result.join(', '));
}
usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);