"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testfunction = void 0;
let testfunction = (arr, arr2, obj, obj2) => {
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
};
exports.testfunction = testfunction;
