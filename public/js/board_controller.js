// 'use strict';

var horizontalCheck = function (board) {
  for (var i = 0; i < board.length; i++) {
    var row = board[i];
    for (var j = 0; j < row.length; j++) {
      var index = row[j];
      if (row[j] !== 0) {
        if (row[j] === row[j + 1] && row[j] === row[j + 2] && row[j] === row[j + 3]) {
            if (row[j] === 1) {
              console.log('Player 1 wins!');
              return
            }
            else {
              console.log('Player 2 wins!');
              return
            }
          }
        }
      }
    }
    console.log('A winning condition not found.');
};

var topDownDiagonalCheck = function(board){
  for (var i = 0; i < board.length; i++) {
    var row = board[i];
    for (var j = 0; j < row.length; j++) {
// ensure that current slot is at least 3 columns from end of board and three rows above bottom of board.
      if (row[j] !== 0 && (j < row.length - 3) && (i < (board.length - 3))) {
        var testCell = row[j]
        var secondRowCell = board[i+1][j + 1]
        var thirdRowCell = board[i+2][j + 2]
        var fourthRowCell = board[i+3][j + 3]
        if ((testCell === secondRowCell) && (testCell === thirdRowCell) && (testCell === fourthRowCell)) {
            if (row[j] === 1) {
              console.log('Player 1 wins!');
              return
            }
            else {
              console.log('Player 2 wins!');
              return
            }
          }
      }
    }
  }
  console.log('A winning condition not found.');
};

var verticalCheck = function(board){
  var transposedBoard = math.transpose(board);

  horizontalCheck(transposedBoard);
};

var bottomUpDiagonalCheck = function(board){
  var transposedBoard = math.transpose(board);
  console.log(transposedBoard)
  topDownDiagonalCheck(transposedBoard);
};

// DRIVER CODE

var test1 = [[0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [2, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 2, 0]];

var test2 = [[0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 2, 1, 1, 1, 0, 0],
                [0, 2, 2, 2, 2, 0, 0],
                [0, 1, 2, 1, 1, 0, 0]];

var test3 = [[0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0],
                [0, 2, 1, 0, 0, 0, 0],
                [2, 2, 1, 1, 0, 0, 0],
                [2, 1, 2, 2, 1, 0, 0]];

var test4 = [[0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 2, 0, 0],
                [0, 1, 0, 0, 2, 0, 0],
                [0, 2, 0, 0, 2, 0, 0],
                [2, 2, 1, 0, 2, 0, 0],
                [2, 1, 2, 2, 1, 0, 0]];

var test5 = [[0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 1, 0, 0],
              [0, 2, 1, 1, 0, 0, 0],
              [2, 2, 1, 0, 0, 0, 0],
              [2, 1, 2, 2, 1, 0, 0]];

horizontalCheck(test1);
console.log('test1 is over');

horizontalCheck(test2);
console.log('test2 is over');

topDownDiagonalCheck(test3);
console.log('test3 is over');

verticalCheck(test4);
console.log('test4 is over');

bottomUpDiagonalCheck(test5);
console.log('test5 is over');
