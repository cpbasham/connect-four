'use strict';

var my_board = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];

var lateral_check = function (board) {
  for (var row in board) {
    for (var index in row) { //
      if (row[index] !== 0) {
        if (row[index] === row[index + 1] && row[index] === row[index + 2] && row[index] === row[index + 3]) { //tell which player it is
          console.log('somebody wins!');
          }
        }
        else {
          // continue playing
        }
      }
    }
};

var diagonal_check = function(){
  for (var row in board) {
    for (var index in row) {
      if (row[index] !== 0) {
        if (row[index] === (row + 1)[index + 1] && row[index] === (row + 2)[index + 2] && row[index] === (row + 3)[index + 3]) {
          console.log('somebody wins!');
          }
        }
        else {
          console.log('it was a draw!')
        }
      }
    }

}



// jquery ui (draggable, droppable)