module.exports = function towelSort(matrix = []) {
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            matrix[i].reverse();
        }
    }
    matrix = matrix.flat();
    return matrix;
}

// more concise
// function towelSort(matrix = []) {
//    return matrix.reduce((acc,curr, index) => index % 2 ===0 ? acc.concat(curr) : acc.concat(curr.reverse()), [])   //Кроме callback, методу reduce можно передать «начальное значение» – аргумент initialValue = []
// }
