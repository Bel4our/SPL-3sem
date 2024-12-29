class Sudoku {
    letructor() {
        this.board = this.generateEmptyBoard();
        this.initialBoard = this.generateEmptyBoard();
    }

    generateEmptyBoard() {
        return Array.from({ length: 9 }, () => Array(9).fill(null));
    }

    resetBoard() {
        this.board = this.generateEmptyBoard();
        this.initialBoard = this.generateEmptyBoard();
    }

    findEmptyCell(grid) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (grid[row][col] === null) {
                    return { row, col };
                }
            }
        }
        return null;
    }

    getRandomNumbers() {
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = numbers.length - 1; i >= 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            [numbers[i], numbers[randomIndex]] = [numbers[randomIndex], numbers[i]];
        }
        return numbers;
    }

    isValid(board, row, col, num) {
        for (let x = 0; x < 9; x++) {
            if (
                board[row][x] === num ||
                board[x][col] === num ||
                board[3 * Math.floor(row / 3) + Math.floor(x / 3)][3 * Math.floor(col / 3) + x % 3] === num
            ) {
                return false;
            }
        }
        return true;
    }

    resolveSudoku(grid) {
        let empty = this.findEmptyCell(grid);
        if (!empty) return true;

        let { row, col } = empty;
        for (let num of this.getRandomNumbers()) 
            {
            if (this.isValid(grid, row, col, num)) 
                {
                grid[row][col] = num;
                if (this.resolveSudoku(grid)) return true;
                grid[row][col] = null;
            }
        }
        return false;
    }

    removeCells(grid) {
        let cellsToRemove = 30;
        while (cellsToRemove > 0) {
            let row = Math.floor(Math.random() * 9);
            let col = Math.floor(Math.random() * 9);
            if (grid[row][col] !== null) {
                grid[row][col] = null;
                cellsToRemove--;
            }
        }
    }

    highlightCell(row, col, type) {
        let cell = document.querySelector(`#cell-${row}-${col}`);
        if (cell) {
            let highlightClass = type === 'error' ? 'highlight-error' : 'highlight-success';
            cell.classList.add(highlightClass);
            if (type === 'error') {
                setTimeout(() => cell.classList.remove(highlightClass), 3000);
            }
        }
    }

    highlightAll(type) {
        let highlightClass = type === 'success' ? 'highlight-success' : 'highlight-error';
        document.querySelectorAll('#sudoku-board td').forEach(cell => {
            cell.classList.add(highlightClass);
        });
    }

    resetHighlight() {
        document.querySelectorAll('.highlight-error, .highlight-success').forEach(cell => {
            cell.classList.remove('highlight-error', 'highlight-success');
        });
    }

    saveInitialBoard() {
        this.initialBoard = this.board.map(row => row.slice());
    }

    restoreInitialBoard() {
        this.board = this.initialBoard.map(row => row.slice());
    }

    checkErrors(board) {
        this.resetHighlight(); 
        let hasErrors = false;

        for (let row = 0; row < 9; row++) {
            let rowSet = new Set();
            for (let col = 0; col < 9; col++) {
                if (board[row][col] !== null) {
                    if (rowSet.has(board[row][col])) {
                        hasErrors = true;
                        this.highlightCell(row, col, 'error');
                    }
                    rowSet.add(board[row][col]);
                }
            }
        }

        for (let col = 0; col < 9; col++) {
            let colSet = new Set();
            for (let row = 0; row < 9; row++) {
                if (board[row][col] !== null) {
                    if (colSet.has(board[row][col])) {
                        hasErrors = true;
                        this.highlightCell(row, col, 'error');
                    }
                    colSet.add(board[row][col]);
                }
            }
        }

        for (let boxRow = 0; boxRow < 3; boxRow++) {
            for (let boxCol = 0; boxCol < 3; boxCol++) {
                let boxSet = new Set();
                for (let row = 0; row < 3; row++) {
                    for (let col = 0; col < 3; col++) {
                        let cellValue = board[boxRow * 3 + row][boxCol * 3 + col];
                        if (cellValue !== null) 
                            {
                            if (boxSet.has(cellValue)) {
                                hasErrors = true;
                                this.highlightCell(boxRow * 3 + row, boxCol * 3 + col, 'error');
                            }
                            boxSet.add(cellValue);
                        }
                    }
                }
            }
        }

        if (!hasErrors) {
            this.highlightAll('success');
            setTimeout(() => this.resetHighlight(), 3000);
        }
    }
}

let sudoku = new Sudoku();
let boardContainer = document.querySelector('#sudoku-board tbody');

function renderBoard(board) {
    boardContainer.innerHTML = '';

    board.forEach((row, rowIndex) => {
        let tr = document.createElement('tr');
        row.forEach((cell, colIndex) => {
            let td = document.createElement('td');
            td.id = `cell-${rowIndex}-${colIndex}`;

            let input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.value = cell !== null ? cell : '';
            input.disabled = cell !== null;

            input.addEventListener('input', (e) => {
                let value = e.target.value;
                const validDigits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
                if (validDigits.includes(value)) {
                    sudoku.board[rowIndex][colIndex] = parseInt(value, 10);
                } else {
                    e.target.value = '';
                }
            });
            

            td.appendChild(input);
            tr.appendChild(td);
        });
        boardContainer.appendChild(tr);
    });
}

document.getElementById('new-game-btn').addEventListener('click', () => {
    sudoku.resetBoard();
    sudoku.resolveSudoku(sudoku.board);
    sudoku.saveInitialBoard();
    sudoku.removeCells(sudoku.board);
    renderBoard(sudoku.board);
});

document.getElementById('check-btn').addEventListener('click', () => {
    sudoku.checkErrors(sudoku.board);
});

document.getElementById('generate-solution-btn').addEventListener('click', () => {
    sudoku.restoreInitialBoard();
    sudoku.resolveSudoku(sudoku.board);
    renderBoard(sudoku.board);
});

renderBoard(sudoku.board);
