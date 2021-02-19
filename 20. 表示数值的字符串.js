// 重点:
// .前.后只要一边有整数即合法
// 如果.前有值,就true,当然也要再判断.后有没有值,但判断.后时,要用
// if(unsignedInteger(s)){isValid=true}而不是isValid=unsignedInteger(s),因为.前有值的话,不管.后有没有值都合法,不能把已经true的改为false
// 如果E后没值,就不合法,直接isValid=signedInteger(s)

var isNumber = function (s) {
    let cursor = 0;
    let isValid = false;

    let signedInteger = function (s) {
        if (s[cursor] == '+' || s[cursor] == '-') {
            cursor++;
        }
        isValid = unsignedInteger(s)
        return isValid
    }

    let unsignedInteger = function (s) {
        let temp = cursor;
        while (s[cursor] >= '0' && s[cursor] <= 9) {
            cursor++;
        }
        return (s[temp] >= '0' && s[temp] <= '9')
    }

    while (s[cursor] == ' ') {
        cursor++;
    }

    isValid = signedInteger(s)

    if (s[cursor] == '.') {
        cursor++
        if (unsignedInteger(s)) {
            isValid = true
        }
        //这部分不能简写成
        // return unsignedInteger
        // 因为这会把原本true的变成false,如3.
    }

    if (isValid) {
        if (s[cursor] == 'E' || s[cursor] == 'e') {
            cursor++;
            isValid = signedInteger(s)
        }
    }

    while (s[cursor] == ' ') {
        cursor++;
    }

    if (s[cursor] != undefined) {
        isValid = false
    }

    return isValid


};

console.log(isNumber('0e'))

