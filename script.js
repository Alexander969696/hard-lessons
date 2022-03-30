'use strict'

let str = '   Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.  ';
let notStr = 88;


const deleteStartSpace = function (str) {
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            continue;
         } else {
            newStr = str.slice(i);
            break;
         }
    }
    return newStr;
}

const reverseString = function (str) {
    let reverseStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr;
}

const getSubstr = function (str) {
    let ellipsis = '...';
    str = str.slice(0, 30) + ellipsis;
    return str;
}

const mainFunc = function (str) {
    let resultStr;

    if (typeof(str) !== 'string') {
        return 'Вы ввели не строку';
    }
    resultStr = deleteStartSpace(str);
    resultStr = reverseString(resultStr);
    resultStr = deleteStartSpace(resultStr);
    resultStr = reverseString(resultStr);

    if (resultStr.length > 30) return getSubstr(resultStr);

    return resultStr;
}

console.log(mainFunc(str));
console.log(mainFunc(notStr));