
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    let m = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            m[i, j] = matrix[i, j];
        }
        if (i % 2 !== 0) {
            m[i] = m[i].reverse();
        }
    }
    return m.flat(Infinity);
}
