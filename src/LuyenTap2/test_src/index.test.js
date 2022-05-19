"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('testfunction', function () {
    it('should retunr [] when null', function () {
        expect((0, index_1.testfunction)()).toStrictEqual([]);
    });
    it('should retunr trả về mảng khi truyền vào  1 Tham Số', function () {
        expect((0, index_1.testfunction)([{ name: "Thanh", age: 37 }])).toStrictEqual([[{ name: "Thanh", age: 37 }]]);
    });
    it('should retunr trả về mảng khi truyền vào  2 Tham Số', function () {
        expect((0, index_1.testfunction)([{ name: "Thanh", age: 37 }], [1, 2, 3, 4, 5, 6])).toStrictEqual([[{ name: "Thanh", age: 37 }], [1, 2, 3, 4, 5, 6]]);
    });
    it('should retunr trả về mảng khi truyền vào  3 Tham Số', function () {
        expect((0, index_1.testfunction)([{ name: "Thanh", age: 37 }], [1, 2, 3, 4, 5, 6], { name: "vietnam", age: 24 })).toStrictEqual([[{ name: "Thanh", age: 37 }], [1, 2, 3, 4, 5, 6], { name: "vietnam", age: 24 }]);
    });
    it('should retunr trả về mảng khi truyền vào  4 Tham Số', function () {
        expect((0, index_1.testfunction)([{ name: "Thanh", age: 37 }], [1, 2, 3, 4, 5, 6], { name: "vietnam", age: 24 }, {
            name: "thanh",
            friend: ["chien", "van"],
            addRess: { number: 5, street: "that" },
        })).toStrictEqual([[{ name: "Thanh", age: 37 }], [1, 2, 3, 4, 5, 6], { name: "vietnam", age: 24 }, {
                name: "thanh",
                friend: ["chien", "van"],
                addRess: { number: 5, street: "that" },
            }]);
    });
});
