"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fi_1 = require("./fi");
describe('abc', function () {
    it('should returl true when a>b', function () {
        expect((0, fi_1.abc)(5, 1)).toBe("dung roi");
        expect((0, fi_1.abc)(5, 2)).toBe("dung roi");
        expect((0, fi_1.abc)(5, -8)).toBe("dung roi");
    });
    it('should returl false when a=b', function () {
        expect((0, fi_1.abc)(5, 5)).toBe("Bằng Nhau");
        expect((0, fi_1.abc)(-5, -5)).toBe("Bằng Nhau");
    });
    it('should  returl a nha', function () {
        expect((0, fi_1.abc)(3, 5)).toBe(false);
        expect((0, fi_1.abc)(3, 56)).toBe(false);
        expect((0, fi_1.abc)(-1, 5)).toBe(false);
    });
});
