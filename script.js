'use strict'

let str = '   Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.  ';
let notStr = 88;


const mainFunc = function (str) {
    if (typeof(str) !== 'string') {
        return 'Вы ввели не строку';
    }

    let text = str.trim();
    if (text.length > 30) {
        return text.slice(0, 30) + '...';
    } else {
        return text;
    }
};

console.log(mainFunc(str));
console.log(mainFunc(notStr));