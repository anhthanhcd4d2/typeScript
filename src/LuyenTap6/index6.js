"use strict";
// Bài 1:
// nhanSU = [
//     {ten: 'nguyen the su', phong: 'Hanh Chinh'},
//     {ten: 'nguyen van duc', phong: 'coder'},
//     {ten: 'lai the van', phong: 'coder'},
//     {ten: 'le van luong', phong: 'coder'},
//     {ten: 'ngo thi thao', phong: 'tester'},
//     {ten: 'dao linh huong', phong: 'tester'},
//     {ten: 'nguyen thi tra my', phong: 'Hanh Chinh'},
// ]
let checkRoom = (array, array2) => {
    let arr = [];
    array.forEach((value, index) => {
        for (let i = 0; i < array2.length; i++) {
            if (value.name === array2[i].name) {
                let a = {
                    name: array2[i].name,
                    room: array2[i].room,
                    soHT: value.soHT
                };
                arr.push(a);
            }
        }
    });
    return arr;
};
const baoCaoCV = [
    { name: 'nguyen the su', soHT: 300 },
    { name: 'nguyen van duc', soHT: 500 },
    { name: 'nguyen the su', soHT: 150 },
    { name: 'lai the van', soHT: 300 },
    { name: 'nguyen the su', soHT: 300 },
    { name: 'ngo thi thao', soHT: 240 },
    { name: 'dao linh huong', soHT: 500 },
    { name: 'nguyen thi tra my', soHT: 120 },
    { name: 'dao linh huong', soHT: 300 },
    { name: 'ngo thi thao', soHT: 360 },
];
const nhanSU = [
    { name: 'nguyen the su', room: 'Hanh Chinh' },
    { name: 'nguyen van duc', room: 'coder' },
    { name: 'lai the van', room: 'coder' },
    { name: 'le van luong', room: 'coder' },
    { name: 'ngo thi thao', room: 'tester' },
    { name: 'dao linh huong', room: 'tester' },
    { name: 'nguyen thi tra my', room: 'Hanh Chinh' },
];
let arraylist = checkRoom(baoCaoCV, nhanSU);
console.log(arraylist);
let newArrayList = arraylist.map((value, index) => {
    let newarray = [];
    for (const valu of arraylist) {
        if (value.room === valu.room) {
            newarray.push(value);
        }
    }
    return newarray;
});
let checkMoney = (array) => {
};
