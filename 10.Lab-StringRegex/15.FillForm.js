/**
 * Created by 1234 on 9.6.2017 г..
 */
function fillForm(username,email,phone,data) {
    function repl(match,p1) {
        switch (p1){
            case '!':return username;
            case '@':return email;
            case '+':return phone
        }
    }
    data.forEach(line=>{
       line=line.replace(/<([!@+])[a-zA-z]+([!@+])>/g,repl);
       console.log(line);

        });
}