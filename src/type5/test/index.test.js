"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('abc', function () {
    it('should returl true when a>b', function () {
        expect((0, index_1.abc)(5, 3)).toBe(true);
    });
    it('should returl true when a<b', function () {
        expect((0, index_1.abc)(5, 6)).toBe(false);
    });
});
