"use strict";
/*
var array = [1,3,2,4,4,1,2,3,5,7,9,4,1,2,3]

// hãy tạo array mới cho biết số lần lập lại của các phần tử

// => [{value: 1, rep : 3}, {value: 2, rep: 3}, ....]
 */
let checkloop2 = (array) => {
    let newArray = [];
    array.forEach((value1, index1) => {
        let count = 0;
        for (let i = index1; i < array.length; i++) {
            if (index1 === array.indexOf(array[i])) {
                count++;
            }
        }
        if (count > 0) {
            let a = {
                valu: value1,
                rep: count
            };
            newArray.push(a);
        }
    });
    console.log(newArray);
};
const array = [1, 3, 2, 4, 4, 1, 2, 3, 5, 7, 9, 4, 1, 2, 3, 1, 1, 1];
checkloop2(array);
