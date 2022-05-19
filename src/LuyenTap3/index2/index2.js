"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkloop3 = void 0;
let checkloop3 = (array) => {
    let newArray = [];
    array.forEach((value1, index1) => {
        let count = 0;
        for (let i = index1; i < array.length; i++) {
            if (index1 === array.indexOf(array[i])) {
                count++;
            }
        }
        if (count > 1) {
            let a = {
                value: value1,
                rep: count,
            };
            newArray.push(a);
        }
    });
    console.log(newArray);
    return newArray;
};
exports.checkloop3 = checkloop3;
