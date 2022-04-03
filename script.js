'use strict'

let arr = [123, 228, 456, 234, 867, 434, 34];
let str = '';

for (let i = 0; i < arr.length; i++) {
    str = String(arr[i]);
    if (+str[0] === 2 || +str[0] === 4) {
        console.log(arr[i]);
    }
}



const getIntegers = function (n) {
    console.log('Число: 1 делители этого числа 1 и 1');

    nextStep:
    for (let i = 2; i <= n; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextStep;   
        }

        console.log('Число: ' + i + ' делители этого чилса 1 и ' + i);
    }
}

getIntegers(10);