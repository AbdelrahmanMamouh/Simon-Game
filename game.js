var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

userClickedPattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    var sound = new Audio("sounds/" + randomChosenColour + ".mp3");
    sound.play();
}

$(".btn").on("click", function() {
    var userChosenColour  = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern)
})