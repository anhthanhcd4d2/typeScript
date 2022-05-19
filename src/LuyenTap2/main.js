"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abc = exports.arrayListAgename = exports.objcetAgeName = exports.array = void 0;
//a
exports.array = [3, 4, 5, 6, 7];
//b
exports.objcetAgeName = {
    name: "chiendau",
    age: 25
};
//c
exports.arrayListAgename = [
    { name: "chienbinh", age: 45 },
    { name: "phapsu", age: 35 }
];
//d
exports.abc = {
    name: "thanh",
    friend: ["chien", "van"],
    addRess: { number: 5, street: "that" },
};
//Hãy copy các array, object a,b,c,d để khi chỉnh sửa bản copy không ảnh hưởng đến bản gốc;
function check(arr, arr2, obj, obj2) {
    let newArray = [];
    if (arr === null || arr === void 0 ? void 0 : arr.length) {
        newArray.push(arr);
    }
    if (arr2 === null || arr2 === void 0 ? void 0 : arr2.length) {
        newArray.push(arr2);
    }
    if ((obj === null || obj === void 0 ? void 0 : obj.age) !== undefined || (obj === null || obj === void 0 ? void 0 : obj.name) !== undefined) {
        newArray.push(obj);
    }
    if ((obj2 === null || obj2 === void 0 ? void 0 : obj2.name) !== undefined || (obj2 === null || obj2 === void 0 ? void 0 : obj2.addRess) !== undefined || (obj2 === null || obj2 === void 0 ? void 0 : obj2.friend) !== undefined) {
        newArray.push(obj2);
    }
    return newArray;
}
let arr = check(exports.arrayListAgename, exports.array, exports.objcetAgeName, exports.abc);
console.log("1\t" + arr[0]);
console.log("2\t" + arr[1]);
console.log("3\t" + arr[2]);
console.log("4\t" + arr[3]);
