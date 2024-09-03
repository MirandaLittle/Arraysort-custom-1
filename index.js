'use strict';

const names = ["Ellen", "angela", "Michelle", "Portia", "khertek"];


const compareNames = (name1, name2) => {
    name1 = name1.toLowerCase();
    name2 = name2.toLowerCase();

    if (name1 > name2) return 1;
    if (name1 < name2) return -1;
    return 0;
};

names.sort(compareNames);
console.log(names);