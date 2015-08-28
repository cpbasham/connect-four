

var Controller = function() {
  this.gameLogic = new GameLogic;
}

Controller.prototype.columnClick(columnIdx) {
  if (!this.gameLogic.columnFull(columnIdx) ) {
    var rowIndex = this.gameLogic.insertToken(columnIdx);
    if (this.gameLogic.gameWon())
  }

}
