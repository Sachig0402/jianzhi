var obj2 = {
    firstName: 'smyh',
    lastName: 'vae'
};
Object.defineProperties(obj2, {
    fullName: {
        get: function () {
            return this.firstName + '-' + this.lastName
        },
        set: function (data) {  //监听扩展属性，当扩展属性发生变化的时候自动调用，自动调用后将变化的值作为实参注入到set函数
            var names = data.split('-');
            this.firstName = names[0];
            this.lastName = names[1];
        }
    }
});
console.log(obj2.fullName);
obj2.firstName = 'tim';
obj2.lastName = 'duncan';
console.log(obj2.fullName);
obj2.fullName = 'kobe-bryant';
console.log(obj2.fullName);