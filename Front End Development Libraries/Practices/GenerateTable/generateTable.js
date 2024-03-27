import React, { useState } from 'react';

function Board() {
  // 生成指定大小的二维数组，填充随机数
  const generateBoard = (rows, cols) => {
    const board = [];
    for (let i = 0; i < rows; i++) {
      board.push([]);
      for (let j = 0; j < cols; j++) {
        // 生成随机数（0 到 99 之间的随机整数），如果随机数小于等于 20，则设置为 -1
        const randomValue = Math.random() <= 0.5 ? -1 : Math.floor(Math.random() * 10);
        board[i].push(randomValue);
      }
    }
    return board;
  }

  const [board] = useState(generateBoard(5, 5)); // 初始时生成一个 5x5 的二维数组

  return (
    <table border="1">
      <tbody>
        {board.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Board;
