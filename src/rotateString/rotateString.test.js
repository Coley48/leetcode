// https://leetcode-cn.com/problems/rotate-string/

/**
 * 796. 旋转字符串
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    if (s.length != goal.length) return false;

    for (let i = 0; i < s.length; i++) {
        if (goal == s.slice(i) + s.substring(0, i)) {
            return true;
        }
    }

    return false;
};

describe("rotateString", function () {
    test("string A equals to string B", function () {
        expect(rotateString("abcde", "cdeab")).toEqual(true);
    });
    test("string A does not equal to string B", function () {
        expect(rotateString("abcde", "abced")).toEqual(false);
    });
});
