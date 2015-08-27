$(document).ready(function() {

(function createBoard() {
  var board = $("table#board");
  for (var ri=0; ri<6; ri++) {
    var tr = $("<tr>");
    var rowCls = "row-" + ri;
    for (var ci=0; ci<7; ci++) {
      var cls = rowCls + " col-" + ci;
      var td = $("<td class='" + cls + "'>");
      tr.append(td);
    }
    board.append(tr);
  }
})();


});
