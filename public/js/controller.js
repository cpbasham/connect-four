var Controller = function() {
  this.gameLogic = new GameLogic;
}

Controller.prototype.columnClicked = function(columnIdx) {
  if (!this.gameLogic.columnFull(columnIdx) && !this.gameLogic.gameWon()) {
    var rowIdx = this.gameLogic.insertToken(columnIdx);
      var viewData = {
        playerDidMove: this.gameLogic.currentPlayer(),
        playerWillMove: this.gameLogic.nextPlayer(),
        rowIdx: rowIdx,
        columnIdx: columnIdx
      }
      updateBoard(viewData);
    if (this.gameLogic.gameWon()) {
      if(this.gameLogic.currentPlayer() === 1){
        alert("SUB-ZERO WINS");
      }
      else{
        alert("SCORPION WINS");
      }
      winMessage();

      console.log("You win!");
      // call view win message
    }
    else if(this.gameLogic.boardFull()) {
      console.log("game over");
      // call view game draw message
    }
    else {
      this.gameLogic.nextTurn();
    }
  }

}

controller = new Controller;
