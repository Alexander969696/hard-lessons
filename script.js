'use strict'

// 1 задание

let lang = prompt('Введите язык страницы (ru или en)');

while (lang !== 'ru' && lang !== 'en') { 
    lang = prompt('Введите ru или en');
}

if (lang == 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');

switch (lang) {
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break;
    case 'en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break;
}

let arr = [
    ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'],
    ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']
]

let i = (lang == 'ru') ? 0 : 1;
console.log(arr[i]);

// 2 задание

let namePerson = prompt('Введите имя:');

let status = (namePerson == 'Артем') ? 'Директор' :
  (namePerson == 'Александр') ? 'Преподаватель' : 'Студент';

console.log(status);