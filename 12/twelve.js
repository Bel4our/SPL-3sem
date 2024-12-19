class Sudoku {
    constructor() {
        this.board = this.generateEmptyBoard();
    }

    generateEmptyBoard() {
        return [
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
        ];
    }

    resetBoard() {
        this.board = this.generateEmptyBoard();
    }

    findEmptyCell(grid) {
        for (let row = 0; row < 9; row++) {
            for (let column = 0; column < 9; column++) {
                if (grid[row][column] === null) {
                    return { row, column };
                }
            }
        }
        return null;
    }

    getRandomNumbers() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = numbers.length - 1; i >= 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [numbers[i], numbers[randomIndex]] = [numbers[randomIndex], numbers[i]];
        }
        return numbers;
    }

    isValid(board, row, col, num) {
        for (let x = 0; x < 9; x++) {
            if (board[row][x] === num || board[x][col] === num || board[3 * Math.floor(row / 3) + Math.floor(x / 3)][3 * Math.floor(col / 3) + x % 3] === num) {
                return false;
            }
        }
        return true;
    }

    resolveSudoku(grid) {
        const empty = this.findEmptyCell(grid);
        if (!empty) return true;
        const numbers = this.getRandomNumbers();
        for(let i = 0; i < numbers.length; i++){
            if(!this.isValid(grid, empty.row, empty.column, numbers[i])) continue;
            grid[empty.row][empty.column] = numbers[i];
            if(this.resolveSudoku(grid)) return true;
            grid[empty.row][empty.column] = null;
        }
        return false;
    }

    checkErrors(board){
        for(let row = 0; row < 9; row++){
            let rowSet = new Set();
            for(let col = 0; col < 9; col++){
                if(board[row][col] !== null){
                    if(rowSet.has(board[row][col])){
                        console.log(`Ошибка в строке ${row + 1}, столбце ${col + 1}`);
                    }
                    rowSet.add(board[row][col]);
                }
            }
        }

        for(let col = 0; col < 9; col++){
            let colSet = new Set();
            for(let row = 0; row < 9; row++){
                if(board[row][col]!== null){
                    if(colSet.has(board[row][col])){
                        console.log(`Ошибка в столбце ${col + 1}, в строке ${row + 1}`);
                    }
                    colSet.add(board[row][col])
                }
            }
        }

        for(let boxRow = 0; boxRow < 3; boxRow++){
            for(let boxCol = 0; boxCol < 3; boxCol++){
                let boxSet = new Set();
                for(let row = 0; row < 3; row++){
                    for(let col = 0; col < 3; col++){
                        let cellValue = board[boxRow * 3 + row][boxCol * 3 + col];
                        if(cellValue!==null){
                            if(boxSet.has(cellValue)){
                                console.log(`Неправильный квадратик 3x3 находится в строке ${boxRow * 3 + 1}, столбце ${boxCol * 3 + 1}`);
                            }
                            boxSet.add(cellValue);
                        }
                    }
                }
            }
        }
    }

    

    removeCells(grid){
        const numberCells = 30;
        let i = 0;
        while(i < numberCells){
            const row = Math.floor(Math.random() * 9);
            const column = Math.floor(Math.random() * 9);
            if(grid[row][column] !== null){
                grid[row][column] = null;
                i++;
            }
        }
    }
}

const sudoku = new Sudoku();
sudoku.resolveSudoku(sudoku.board);
sudoku.removeCells(sudoku.board);
console.table(sudoku.board);
sudoku.checkErrors(sudoku.board);
sudoku.resetBoard();
console.table(sudoku.board);
