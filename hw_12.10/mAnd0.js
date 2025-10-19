function mNeighbors(matrix) {

    let result = createMatrix(matrix.length, matrix[0].length, 0);

    const size = matrix.length;

    let count = 0;

    for (let i = 0; i < size; i++) {

        const col = matrix[i].length;

        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === 'M') {
                result[i][j] = 'M';
                continue;
            }
            else {
                if (i + 1 < size && matrix[i + 1][j] === 'M') {
                    result[i][j]++;
                }
                if (j + 1 < col && matrix[i][j + 1] === 'M') {
                    result[i][j]++;
                }
                if (i - 1 >= 0 && matrix[i - 1][j] === 'M') {
                    result[i][j]++;
                }
                if (j - 1 >= 0 && matrix[i][j - 1] === 'M') {
                    result[i][j]++;
                }
                if( i + 1 < size && j + 1 < col && matrix[i + 1][j + 1] === 'M') {
                    result[i][j]++;
                }
                if( i - 1 >= 0 && j - 1 >= 0 && matrix[i - 1][j - 1] === 'M') {
                    result[i][j]++;
                }
                if( i - 1 >= 0 && j + 1 < col && matrix[i - 1][j + 1] === 'M') {
                    result[i][j]++;
                }
                if( i + 1 < size && j - 1 >= 0 && matrix[i + 1][j - 1] === 'M') {
                    result[i][j]++;
                }
            }
        }
    }
    return result;
}


const matrix = [[0, 'M', 0, 'M', 0], [0, 0, 'M', 0, 0], [0, 0, 0, 0, 0], ['M', 'M', 0, 0, 0], [0, 0, 0, 'M', 0]];

console.log(mNeighbors(matrix));

function createMatrix(rows, cols, value) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = value;
        }
    }
    return matrix;
}

