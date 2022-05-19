"use strict";
function sort2(value, fc) {
    let a = [];
    for (const x in value) {
        a.push(fc(value[x]));
    }
    return a;
}
class CallbackTest {
    constructor(_a) {
        this._a = _a;
    }
    map2(mycallback) {
        let newArray = [];
        let size = this._a.length;
        for (let i = 0; i < this._a.length; i++) {
            newArray.push(mycallback(this._a[i], i, this._a));
        }
        return newArray;
    }
    fiter2(mycallback) {
        let newArray = [];
        for (let i = 0; i < this._a.length; i++) {
            if (mycallback(this._a[i], i, this._a)) {
                newArray.push(this._a[i]);
            }
        }
        return newArray;
    }
    findIndex(mycallback) {
        for (let i = 0; i < this._a.length; i++) {
            if (mycallback(this._a[i], i, this._a)) {
                return i;
            }
        }
    }
    reduce2(mycallback, count) {
        let item;
        let i = 0;
        if (count === undefined) {
            item = this._a[0];
            i = 1;
        }
        else {
            item = count;
        }
        for (; i < this._a.length; i++) {
            item += (mycallback(this._a[i], i, this._a));
        }
        return item;
    }
    forEach2(mycallback) {
        for (const aKey in this._a) {
            mycallback(this._a[aKey], parseInt(aKey), this._a);
        }
    }
    sort2(mycallback) {

        let a = 1;
        let b = 2;
        if (mycallback(a, b) < 0) {
            for (const aKey in this._a) {
                for (let i = parseInt(aKey) + 1; i < this._a.length; i++) {
                    if (this._a[aKey] > this._a[i]) {
                        [this._a[aKey], this._a[i]] = [this._a[i], this._a[aKey]];
                    }
                }
            }
        }
        else {
            for (const aKey in this._a) {
                for (let i = parseInt(aKey) + 1; i < this._a.length; i++) {
                    if (this._a[aKey] < this._a[i]) {
                        [this._a[aKey], this._a[i]] = [this._a[i], this._a[aKey]];
                    }
                }
            }
        }
    }
}
/*
Bai 1:
    cho arr = [1,3,5,4,7,9,8]
    a, Hãy viết function sum có đầu vào là array và callback
        function tính tổng các các phần tử theo điều kiện
        VD tính tổng các số chẵn, tổng các số lẻ, tổng các phần tử x2, x3

    b, hãy viết function tich có đầu vào là array và callback
        function tính tích các phần tử theo điều kiện
        VD tính tích các số chẵn, tích các số lẻ
        */
let objcet1 = new CallbackTest([1, 3, 5, 4, 7, 9, 8]);
console.log("Bài 1: ", objcet1.reduce2((a) => {
    return a;
}));
/*
Bai 2:
var arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 17];
// viet function soNguyenTo có đầu vào là array và callback
// function này để trả ra các số nguyên tố trong array
// dung callback để kiểm tra số nguyên tố
// function để trả ra array các số nguyên tố
*/
let objcet2 = new CallbackTest([12, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 17]);
console.log("Bài 2: ", objcet2.map2((a, b, c) => {
    if (a < 0) {
        return false;
    }
    for (let i = 2; i < a; i++) {
        if (a % i === 0)
            return false;
    }
    return a;
}).filter(a => {
    if (a) {
        return a;
    }
}));
/*
Bài 3
    Hãy viết function map tương tự map method có đầu vào là array và callback
        function trả ra array mới chứa kết quả là đầu ra của function callback
        */
let objcet3 = new CallbackTest([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 17]);
console.log("Bài 3: ", objcet3.map2(a => a).reverse());
/*

Bai 4:	hãy viết function có chức năng tương tự findIndex có đầu vào là array và callback
        function trả ra vị trí của phần từ cần tìm theo điều kiện trong callback
*/
let objcet4 = new CallbackTest([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 17]);
console.log("Bài 4: ", objcet4.findIndex((a) => a === 4));
/*
Bài 5: 	hãy viết function có chức năng tương tự filter có đầu vào là array và callback
        function trả ra array mới chứa các phần tử được lọc theo điều kiện trong callback */
let objcet5 = new CallbackTest([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 17]);
console.log("Bài 5: ", objcet5.fiter2(a => a > 5));
/*
Bai 6:	hãy viết function sort có chức năng tương tự sort có đầu vào là array và callback
        function trả  ra array mới chứa các phần tử được xắp xếp theo điều kiện trong callback
 */
let objcet6 = new CallbackTest([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 17]);
objcet6.sort2((a, b) => {
    return a - b;
});
console.log("bài 6: ", objcet6);

var input =[
    {
        name: 'John',
        yearOfBirth: 1988,
        placeOfBirth: 'New York'
    },
    {
        name: 'Nancy',
        yearOfBirth: 1963,
        placeOfBirth: 'New York'
    },
    {
        name: 'John',
        yearOfBirth: 1980,
        placeOfBirth: 'Toronto'
    },
]
function groupBy ( arr , cb){
    var resultOb = {}
    for ( let i of arr){
        var key = cb(i)
        var group = arr.filter(e=>cb(e) == key)
        resultOb[key] = group
    }
    return resultOb
}
function options(element){
    return element.name
}
var isOdd = (num) => num%2!=0
console.log(groupBy(input,options));
console.log(groupBy(input,(e)=>e.yearOfBirth));
console.log(groupBy(input,(e)=>isOdd(e.yearOfBirth)));