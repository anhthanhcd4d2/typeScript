import {abc} from "./index";

describe('abc', function () {
    it('should returl true when a>b', function () {
        expect(abc(5,3)).toBe(true)
    });
    it('should returl true when a<b', function () {
        expect(abc(5,6)).toBe(false)
    });
});