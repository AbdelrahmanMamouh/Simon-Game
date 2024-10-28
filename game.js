// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];

// var userClickedPattern = [];

// var level = 0;

// function checkAnswer(now) {
//     if (userClickedPattern[now] == gamePattern[now]) {
//         console.log("correct")
//     }
//     else {
//         console.log("worng")
//     }
// }

// function nextSequence() {
//     userClickedPattern = [];
//     level++;
//     $("h1").html("Level " + level);
//     var randomNumber = Math.floor(Math.random() * 4);
//     var randomChosenColour = buttonColours[randomNumber];
//     gamePattern.push(randomChosenColour);
//     $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
//     var sound = new Audio("sounds/" + randomChosenColour + ".mp3");
//     sound.play();
//     checkAnswer(level -1)
// }

// $(".btn").on("click", function() {
//     var userChosenColour  = $(this).attr("id");
//     userClickedPattern.push(userChosenColour);
//     console.log(userClickedPattern)
//     nextSequence();
// })

// $(".btn").on("click", function() {
//     var userChosenColour  = $(this).attr("id");
//     var clickedSound = new Audio("sounds/" + userChosenColour + ".mp3");
// })

// $(".btn").on("click", function() {
//     var userClickedColour  = $(this).attr("id");
//     $("#" + userClickedColour).addClass("pressed");
//     setTimeout(() => {
//         $("#" + userClickedColour).removeClass("pressed")
//     }, 100);
// })

// $(document).on("keydown", function() {
//     $("h1").html("Level " + level);
//     nextSequence();
// })

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var gameStatred = "false";

function nextSequence() {
    level++;
    $("h1").html("Level " + level);
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name) {
    var clickSound = new Audio("sounds/" + name + ".mp3");
    clickSound.play();
}

$(".btn").on("click", function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
})

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(() => {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

$(document).on("keypress", function() {
    if (gameStatred == "false") {
        nextSequence();
        $("h1").html("Level " + level);
        gameStatred = "true";
    }
})

function checkAnswer(currentLevel) {
    
    
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        if (userClickedPattern.length == gamePattern.length) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    }
    else {
        var wrongAudio = new Audio("sounds/wrong.mp3");
        wrongAudio.play();
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").html("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    level = 0
    gamePattern = [];
    gameStatred = "false";
}