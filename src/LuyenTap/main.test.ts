import {abc} from "./main";
describe('abc', function () {
    it('should returl true when a>b', function () {
        expect(abc(5,1)).toBe("dung roi")
        expect(abc(5,2)).toBe("dung roi")
        expect(abc(5,-8)).toBe("dung roi")
    });
    it('should returl false when a=b', function () {
        expect(abc(5,5)).toBe("Bằng Nhau")
        expect(abc(-5,-5)).toBe("Bằng Nhau")
    });
    it('should  returl a nha', function () {
        expect(abc(3,5)).toBe(false)
        expect(abc(3,56)).toBe(false)
        expect(abc(-1,5)).toBe(false)
    });
});