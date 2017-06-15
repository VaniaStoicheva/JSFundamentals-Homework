/**
 * Created by 1234 on 15.6.2017 г..
 */
function username(strArr) {
    let usernameSet = new Set();
    for (let name of strArr) {
        usernameSet.add(name);
    }
    let setSort = [...usernameSet].sort(sortSet);
    for (let name of setSort) {
        console.log(name);
    }
    function sortSet(a, b) {
        if (a.length != b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    }
}
username([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'

]);