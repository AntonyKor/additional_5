module.exports =
function check(str, bracketsConfig) {
    if (str.length % 2 === 1) return false;
    let bracketsCodes = [], answ = true;
    bracketsConfig.forEach(function (item, index) {
        bracketsCodes[index] = [[item[0],0],[item[1],0]]
    });
    // console.log(bracketsCodes);
    let bracketNow = [], bracketBefore = [];
    for (let i = 0; i < str.length; i++) {
        bracketsCodes.forEach((item1,i1) => item1.forEach(function (item2,i2) {
            if (item2[0] === str[i]) bracketBefore = bracketNow;
            if (item2[0] === str[i]) bracketNow = [i1, i2,++bracketsCodes[i1][i2][1]]
        }));
        // console.log(str[i]);
        // console.log('bracketBefore:'+bracketBefore);
        // console.log('bracketNow:'+bracketNow);
        let test = bracketBefore[1]>bracketNow[1] && bracketBefore[2]>bracketNow[2]-1 && bracketBefore[0]===bracketNow[0];
        // console.log(test + " " + i+"\n");
        if (test) answ = false;
        if (bracketBefore[1]<bracketNow[1] && bracketBefore[0]<bracketNow[0]) answ = false;
    }
    return answ;
};
// console.log(check('[]()', [['(', ')'], ['[', ']'], ['{', '}']]))