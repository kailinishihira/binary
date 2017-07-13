$(document).ready(function() {
  $("#binary").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#user-input").val());
    $(".output").text(binaryOutput(userInput));
  });
});

var binaryOutput = function(number) {
  var returnVal = [];
  while (number >= 1) {
    returnVal.push(number % 2);
    number = parseInt(number /= 2);
  }
  return returnVal.reverse().join('');
}
