setTimeout(() => console.log('a'));
Promise.resolve().then(
    () => console.log('b')//first
).then(
    () => Promise.resolve('c').then(
        (data) => {//data是c
            setTimeout(() => console.log('d'));
            console.log('f');//second
            return data;//返回c
        }
    )
).then(data => console.log(data));//c

// bfcad
// 校招题 输出顺序


