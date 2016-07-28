$(function(){
  var game = { 
    bankroll: 100
  }


  $('#submit').on('click', function(){
    var playerBet = +$('#amount').val();
    var playerGuess = +$('#guessNumber').val();
    var randomNumber = Math.floor((Math.random() * 10) + 1);

    if(playerGuess === randomNumber) {
      alert("You've guessed correctly, the number was" + randomNumber + " your new total is" + game.bankroll);
    } else if (playerGuess === randomNumber + 1 || playerGuess === randomNumber - 1 ) {
      alert("You've guessed the number so close, so bankroll is same as before. The number was " + randomNumber);
    } 
    else {
      game.bankroll -= playerBet;
      alert("Sorry. You lost. The number was " + randomNumber + "Your bankroll is " + game.bankroll);
    }
    $('<span>').text('playBet');
  });
});
