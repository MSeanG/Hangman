// Global variables
var gallows = $('#gallows'),
    hiddenWord = $('#hidden-word'),
    onscreenKeyboard = $('#onscreen-keyboard'),
    wordToGuess,
    wordLength,
    rightGuesses,
    wrongGuesses;

// Select random word to guess
function getWord(){
  var randomWord = new Array('precious','filthy','dusty','letters','north','apologise','tacit','pedal','grate','bubble','responsible','stamp','minute','reply','excite','panoramic','crayon','secretary','wobble','water','unknown','locket','fixed','lighten','sturdy','outstanding','cobweb','spare','record','makeshift','wrong','greet','growth','advice','quarter','moldy','glamorous','adorable','hilarious','puzzled','street','unwritten','berserk','history','tangible','visitor','approve','organic','known','breath','berry','sense','testy','question','repeat','connect','point','comparison','brave','paddle','volatile','tricky','grateful','uncle','creepy','quartz','metal','belong','sweltering','vacation','quirky','unnatural','humdrum','manage','promise','jelly','strip','married','waste','javascript');
  return randomWord[Math.floor(Math.random()*randomWord.length)];
};

// Hide the JavaScript warning and help panel
function init(){
  var helpText = $('#help-text'),
  // check the available width of the viewport 
  w = screen.availWidth<=602?screen.availWidth:602;
  // hide the loading message and display the control buttons
  $('#loading').hide();
  $('#start').css('display', 'inline-block').click(startGame);
  $('#clear').css('display', 'inline-block').click(clearScore);
}

// Display the game controls and help icon
// Toggle the help panel on and off
// Display the current score
// Select a random word and build the alphabetic keypad when New Game is pressed
// Check whether the selected letter is in the word
// If the guess is correct, replace the appropriate dash(es) with the selected letter
// If the guess is wrong, add another element to the gallows or victim
// End the game when the word is complete or the limit of bad guesses is exceeded
// Update and display the score
// Reset wins and losses to zero when Clear Score is pressed