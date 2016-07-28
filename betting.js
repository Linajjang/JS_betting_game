$(function(){
  var game = { 
    bankroll: 100
  }

  $('#submit').on('click', function(){
    var playerBet = +$('#amount').val();
    var playerGuess = +$('#guessNumber').val();
    var randomNumber = Math.floor((Math.random() * 10) + 1);

    if(playerGuess === randomNumber) {
      alert("You've guessed right, You don't lose any money. You have " + game.bankroll) + ' .';
    } else if (playerGuess === randomNumber + 1 || playerGuess === randomNumber - 1 ) {
      alert("You've guessed the number so close, so you don't lose any money. The number was " + randomNumber) + ' .';
    } 
    else {
      game.bankroll -= playerBet;
      alert("Sorry! You lost. The number was " + randomNumber + ". You have $ " + game.bankroll);
    
      if(game.bankroll <= 0) {
        game.bankroll = 0
        alert("No moeny for bet!");
        $('#button').hide();
        $('#restart').show();
      }

    $('span').text(game.bankroll);
    }
   });
    
    $('#restart').on('click', function(){
      $('#button').show();
      $('#restart').hide();
      game.bankroll = 100; 
  })
});
