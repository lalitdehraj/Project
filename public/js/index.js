// alert("js file me aye");
var breatheInAudio = document.getElementById("breatheIN");
var holdAudio = document.getElementById("HOLD");
var breatheOutAudio = document.getElementById("breatheOUT");
breatheInAudio.style.display = "none";
holdAudio.style.display = "none";
breatheOutAudio.style.display = "none";

$(".btn").click(function () {
  console.log($("#text").text());
  $("#text").text("Breathe in !!");
  breatheInAudio.play();

  setTimeout(function () {
    $("#text").text("Hold");
    holdAudio.play();
  }, 3000);
  setTimeout(function () {
    $("#text").text("Breathe Out!!");
    breatheOutAudio.play();
  }, 5500);
  setTimeout(function () {
    $("#text").text("click start ");
  }, 8000);
});
