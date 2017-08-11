$(document).ready(function() {
  //example code - feel free to delete!
  $("#button").click(function() {
    var adjective = $("#myInput").val();
    var nounPlural = $("#myInput2").val();
    var nounPlural2 = $("#myInput3").val();
    var celebrityName = $("#myInput4").val();
    var nameOfPersonInRoom = $("#myInput5").val();
    var bodyPart = $("#myInput6").val();
    var nameOfPet = $("#myInput7").val();
    var verbThatEndsInIng = $("#myInput8").val();
    var nounPluralSameAsBefore = $("#myInput9").val();
    var number = $("#myInput10").val();
    $("#result").append("The game today was very " + adjective + ",");
    $("#result").append(" with rivals the " + nounPlural);
    $("#result").append(" and the " + nounPlural2 + " facing off.<br/>");
    $("#result").append(
      "The game began with a goal scored by star player " + celebrityName
    );
    $("#result").append(" and a fall by " + nameOfPersonInRoom);
    $("#result").append(" that broke their " + bodyPart + "." + "<br/>");
    $("#result").append(
      nameOfPet +
        " was off to an especially bad start, receiving a penalty for "
    );
    $("#result").append(verbThatEndsInIng + " an opposing player.<br/>");
    $("#result").append(" In the end, the " + nounPluralSameAsBefore);
    $("#result").append(
      " won the game, scoring " + number + " more goals than their rivals.<br/>"
    );
    $("#choices").hide();
    $("#button2").show();
    //write your code here!
  });
  $("#button2").click(function() {
    $("#choices").show();
    $("#result").hide();
  });
});
