$(document).ready(function() {
  console.log(this);
  (function createBoard() {
    var board = $("table#board");
    for (var ri=0; ri<6; ri++) {
      var tr = $('<tr>');
      var rowData = "data-row=" + ri;
      for (var ci=0; ci<7; ci++) {
      var colData = "data-col=" + ci;
        var td = $("<td " + rowData + " " + colData + ">");
        tr.append(td);
      }
      board.append(tr);
    }
  })();

    var counter = 0;
  $('table#board').on("click", "td", function(e) {
    // console.log(counter)
    var target = $(e.target);
    // if (counter % 2 === 0) {
    //   $(target).addClass("disc red")
    // }
    // else {
    //   $(target).addClass("disc black")
    // }
    // counter++;
    controller.columnClicked(target.data('col'));
  });
  //  run winchecker after setting each piece
  this.updateBoard = function(object) {
    console.log(object)
    $('td[data-row=' + object.rowIdx + '][data-col=' + object.columnIdx + ']').addClass("disc " + object.playerDidMove.color)
  }

}.bind(this));
