'use strict';

module.exports = {
  /**
   * [judge if the player wins]
   * @param  {object}  game {board, position, marks: marks to win}
   * @return {Boolean}      [true if the player wins]
   */
  hasWon: function (game) {
    let {
      board,
      position: [row, column],
      marks
    } = game;
    if (board[row][column] === 0) {
      return false;
    }

    let player = board[row][column];
    let left = column - marks + 1;
    let right = column + marks - 1;
    let up = row - marks + 1;
    let bot = row + marks - 1;

    //row
    for (let i = left; i <= column;) {
      for (let j = 0; j < marks; j++) {
        if (board[row][i + j] !== player) {
          i = i + j + 1;
          break;
        }
        if (j === marks - 1) {
          return true;
        }
      }
    }
    //column
    for (let i = up; i <= row;) {
      for (let j = 0; j < marks; j++) {
        if (!board[i + j] || board[i + j][column] !== player) {
          i = i + j + 1;
          break;
        }
        if (j === marks - 1) {
          return true;
        }
      }
    }
    //diagonal
    for (let i = up, k = left; i <= row;) {
      for (let j = 0; j < marks; j++) {
        if (!board[i + j] || board[i + j][k + j] !== player) {
          i = i + j + 1;
          k = k + j + 1;
          break;
        }
        if (j === marks - 1) {
          return true;
        }
      }
    }
    //back-diagonal
    for (let i = bot, k = left; i >= row;) {
      for (let j = 0; j < marks; j++) {
        if (!board[i - j] || board[i - j][k + j] !== player) {
          i = i - j - 1;
          k = k + j + 1;
          break;
        }
        if (j === marks - 1) {
          return true;
        }
      }
    }
    return false;
  },

  noTileLeft: function (board) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === 0) {
          return false;
        }
      }
    }
    return true;
  }
}
