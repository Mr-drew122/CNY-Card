$('.button, .button2, .button3').click(function() {
    // Animate content
    $('.page').addClass('animate_content');
    $('.page-content').fadeOut(100).delay(2800).fadeIn();

    setTimeout(function() {
        $('.page').removeClass('animate_content');
    }, 3200);

    setTimeout(function() {
        $('.page').removeClass('fadeIn');
    }, 1100);
});

$('.back-to-home').click(function() {
    setTimeout(function() {
        $('.home').addClass('fadeIn');
    }, 1100);

    playMusic();
});

$('.go-to-page2').click(function() {
    setTimeout(function() {
        $('.page2').addClass('fadeIn');
    }, 1100);

    // delay before typing greeting
    setTimeout(runText, 4000);
    playMusic();
});

$('.go-to-page3').click(function() {
    setTimeout(function() {
        $('.page3').addClass('fadeIn');
    }, 1100);
});  

$('.bounce2').click(function() {
    playMusic();
    playVoice();
});


/* 🧧 Chinese New Year typing message */
var i = 0;
var txt = "\nMay your days be bright, your wallet full 😆, " +
          "and your heart always happy.\n" +
          "Let’s welcome this year with smiles, good food, and fireworks! 🎆🐉";

var speed = 70;

function runText() {
    if (i < txt.length) {
        document.getElementById("dynamic-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(runText, speed);
    }
};

function playMusic() {
    var music = document.getElementById("music");
    return music.paused ? music.play() : music.pause();
};
