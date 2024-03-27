import React, { useState } from 'react';
import './styles.css';

const INITIAL_BOARD = [
  [-1,5,-1,9,-1,-1,-1,-1,-1],
  [8,-1,-1,-1,4,-1,3,-1,7],
  [-1,-1,-1,2,8,-1,1,9,-1],
  [5,3,8,6,-1,7,9,4,-1],
  [-1,2,-1,3,-1,1,-1,-1,-1],
  [1,-1,9,8,-1,4,6,2,3,],
  [9,-1,7,4,-1,-1,-1,-1,-1],
  [-1,4,5,-1,-1,-1,2,-1,9],
  [-1,-1,-1,-1,3,-1,-1,7,-1],
];

const INIT_ARR = [0,1,2,3,4,5,6,7,8];

// 数独游戏验证函数
function isValidMove(board, row, col, num) {
  // 检查行
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) return false;
  }
  // 检查列
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === num) return false;
  }
  // 检查3x3的方格
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === num) return false;
    }
  }
  return true;
}

function solver(board) {
  if (dfs(board)) {
    return board;
  } else {
    alert('cannot resolve')
  }
}

function dfs(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== -1) continue;
        for (let n = 1; n <= 9; n++) {
        if (isValidMove(board, i, j, n)) {
          let cur = board[i][j];
          board[i][j] = n;
          if (dfs(board)) {
            return true;
          }
          board[i][j] = cur;
        }
      }
      return false;
    }
  }

  return true;
}

export default function Sudoku() {
  const [sudoku, setSudoku] = useState(INITIAL_BOARD);

  function getDeepCopy(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  const handleChange = (e, row, col) => {
    let val = parseInt(e.target.value);
    let newBoard = getDeepCopy(sudoku);

    if (!isNaN(val) && val >= 1 && val <= 9 && isValidMove(newBoard, row, col, val)) {
      newBoard[row][col] = val;
      setSudoku(newBoard);
    } else {
      alert("Wrong steps");
    }
  }

  const handleResolve = () => {
    let curBoard = getDeepCopy(sudoku);
    console.log('solving...')
    solver(curBoard);
    setSudoku(curBoard);
  }

  const handleReset = () => {
    console.log('reseting...')
    setSudoku(INITIAL_BOARD);
  }

  return (
    <div className='sudokuSection'>
      <div className='sudokuWrapper'>
        <h1>Sudoku</h1>
        <table>
          <tbody>
            {
              INIT_ARR.map((row, rIndex) => {
                return <tr key={rIndex} className={(row + 1) % 3 === 0 ? 'bBorder' : ''}>
                  {
                    INIT_ARR.map((col, cIndex) => {
                      return <td key={rIndex + cIndex} className={(col + 1) % 3 === 0 ? 'rBorder' : ''}>
                        <input 
                          className='cell' 
                          type='number'
                          value={sudoku[row][col] !== -1 ? sudoku[row][col] : ''}
                          disabled={INITIAL_BOARD[row][col] !== -1}
                          onChange={(e) => handleChange(e, row, col)}
                        />
                      </td>
                    })
                  }
                </tr>
              })
            }
          </tbody>
        </table>

        <div className='buttons'>
          <button onClick={handleResolve}>Resolve</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}
