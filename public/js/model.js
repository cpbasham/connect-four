var GameLogic = function() {
  this.players = [
      {number: 1, color: 'red'},
      {number: 2, color: 'black'}
      ]; //array of objs with number and color
  this.board = [[0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]];
  this.turnCount = 0; //tracks turns
  this.maxTurns = board.length * board[0].length
}

GameLogic.prototype.gameWon = function() {
  horizontalCheck(this.board);
  topDownDiagonalCheck(this.board);
  verticalCheck(this.board);
  bottomUpDiagonalCheck(this.board);
}

GameLogic.prototype.boardFull = function() {
  if (turnCount >= maxTurns) {
    return false
  }
  else { return true }
}

GameLogic.prototype.columnFull = function(columnIdx) {
  if (board[0][columnIdx] !== 0) { return true }
  else {return false}
}

GameLogic.prototype.currentPlayer = function() {
  return this.players[this.turnCount % 2];
}

GameLogic.prototype.insertToken = function(columnIdx) {
  for (var rowIdx = this.board.length; rowIdx > 0; rowIdx--) {
    if (this.board[rowIdx][columnIdx] === 0) {
       this.board[rowIdx][columnIdx] = this.currentPlayer().number;
       this.turnCount++;
       return rowIdx; //row index
    }
  }
  return "This column is full";
}















var horizontalCheck = function (board) {
  for (var i = 0; i < board.length; i++) {
    var row = board[i];
    for (var j = 0; j < row.length; j++) {
      var index = row[j];
      if (row[j] !== 0) {
        if (row[j] === row[j + 1] && row[j] === row[j + 2] && row[j] === row[j + 3]) {
          if (row[j] !== 0) {
            return true;
          }
        }
      }
    }
  }
  return false;
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
          if (row[j] !== 0) {
            return true;
          }
        }
      }
    }
  }
  return false;
};

var verticalCheck = function(board){
  var transposedBoard = math.transpose(board);

  return horizontalCheck(transposedBoard);
};


var bottomUpDiagonalCheck = function(board){
  for (var i = 0; i < board.length; i++) {
    var row = board[i];
    for (var j = 0; j < row.length; j++) {
// ensure that current slot is at least 3 columns from end of board and three rows above bottom of board.
      if (row[j] !== 0 && (j < row.length - 3) && (i >= 3)) { //height must be > 3
        var testCell = row[j]
        var secondRowCell = board[i-1][j+1]
        var thirdRowCell = board[i-2][j+2]
        var fourthRowCell = board[i-3][j+3]
        console.log(i + j)
        if ((testCell === secondRowCell) && (testCell === thirdRowCell) && (testCell === fourthRowCell)) {
          if (row[j] !== 0){
            return true;
          }
        }
      }
    }
  }
  return false;
};
