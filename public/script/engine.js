/* Write a Hangman game that displays a secret word as a list of hidden letters. Also display an alphabet of letters that the user can guess while trying to guess the word. After a letter is used, disable that letter from the alphabet so the user will not try to guess the same letter twice. When a guess matches one or more letters in the secret word, reveal those letters to the user. Keep track of the number of incorrect guesses and end the game if the number of incorrect guesses reaches 6. If the user reveals all of the hidden letters before reaching 6 incorrect guesses, then the user wins. */

/* wrap everything in a function so that the DOM loads before any Javascript runs, like this: $(function(){}); */
$(function(){
  var questionBank=new Array;
  var wordArray=new Array;
  var previousGuesses=new Array;
  var currentWord;
  var currentClue;
  var wrongAnswerCount;
});