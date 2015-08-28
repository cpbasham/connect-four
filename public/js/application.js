$(document).ready(function() {

(function createBoard() {
  console.log("hi");
  var board = $("table#board");
  for (var ri=0; ri<6; ri++) {
    var tr = $('<tr "' + ri + '">');
    var rowData = "data-row=" + ri;
    for (var ci=0; ci<7; ci++) {
    var colData = "data-col=" + ci;
      var td = $("<td class='" + ci + "'>"); //cls instead of ci?
      tr.append(td);
    }
    board.append(tr);
  }
})();

  var counter = 0;
$('table#board').on("click", "td", function(e) {
  console.log(counter)
  var target = $(e.target);
  if (counter % 2 === 0) {
    $('.0').css("background-color", "red")
  }
  else {
    $('.1').css("background-color", "black")
  }
  counter++;
});
 //run winchecker after setting each piece



});
