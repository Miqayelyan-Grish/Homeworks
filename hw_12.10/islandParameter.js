var islandPerimeter = function(grid) {
    
const row = grid.length;
const col = grid[0].length;
let res = 0;

for(let i = 0; i < row; ++i){
    for(let j = 0; j < col; ++j){
        if(grid[i][j]){
            res += 4;
        }
        if(i + 1 < row - 1 && grid[i + 1][j] && grid[i][j]){
            res -= 2;
        }
        if(j + 1 < col - 1 && grid[i][j + 1] && grid[i][j]){
            res -= 2;
        }
    }
}
return res;
};

const grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]];

console.log(islandPerimeter(grid));
