

var Controller = function() {
  this.gameLogic = new GameLogic;
}

Controller.prototype.columnClicked(columnIdx) {
  if (!this.gameLogic.columnFull(columnIdx) ) {
    var rowIdx = this.gameLogic.insertToken(columnIdx);
    if (this.gameLogic.gameWon()) {
      console.log("You win!");
      // call view win message
    }
    else if(this.gameLogic.boardFull) {
      console.log("game over");
      // call view game draw message
    }
    else {
      var viewData = {
        playerDidMove: this.gameLogic.currentPlayer,
        playerWillMove: this.gameLogic.nextPlayer,
        rowIdx: rowIdx,
        columnIdx: columnIdx
      }
      this.gameLogic.nextTurn;
      // call view update board
    }
  }

}
