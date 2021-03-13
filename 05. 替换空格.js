
// 1.正则表达式法
var replaceSpace = function (s) {
    // return s.replace(/ /g, "%20")//正则表达式
    console.log(s.replace(/ /g, "%20"))
};

// 2.
var replaceSpace = function (s) {
    let a = s.split(' ')
    return a.join('%20')
};
// !注意字符串不能直接更改

replaceSpace('I love you')