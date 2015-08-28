$(document).ready(function() {

(function createBoard() {
  var board = $("table#board");
  for (var ri=0; ri<6; ri++) {
    var tr = $('<tr>');
    var rowData = "data-row=" + ri;
    for (var ci=0; ci<7; ci++) {
    var colData = "data-col=" + ci;
      var td = $("<td class='" + ci + "'>"); //cls instead of ci?
      tr.append(td);
    }
    board.append(tr);
  }
})();


$('table#board').on("click", "td", function(e) {
  var target = $(e.target);

});
 //run winchecker after setting each piece



});
