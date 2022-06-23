// https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/

// 输入：root = [1,null,3,2,4,null,5,6]
// 输出：[[1],[3,2,4],[5,6]]

/**
 * 429. N 叉树的层序遍历
 * @param {number[]|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!Array.isArray(root)) return [];

    let rootCopy = root.slice().reverse();

    let result = [];
    let status = false;
    let list = [];
    for (const iter of root) {
        if (iter) {
            list.push(iter);
        } else {
        }

        if (status) {
            result.push(list);
            list = [];
        }
    }

    console.log(result);
    return result;
};

let root = [
    1,
    null,
    2,
    3,
    4,
    5,
    null,
    null,
    6,
    7,
    null,
    8,
    null,
    9,
    10,
    null,
    null,
    11,
    null,
    12,
    null,
    13,
    null,
    null,
    14,
];

console.log(root);
levelOrder(root);

// describe("levelOrder", function () {
//     const four = 2 + 2;
//     test("four equal to 4", function () {
//         expect(four).toEqual(4);
//     });
//     test("four does not equal to 3", function () {
//         expect(four).not.toEqual(3);
//     });
// });
