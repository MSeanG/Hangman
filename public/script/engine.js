$(function(){
  // Select random word to guess
  function getWord(){
    var randomWord = new Array('precious','filthy','dusty','letters','north','apologise','tacit','pedal','grate','bubble','responsible','stamp','minute','reply','excite','panoramic','crayon','secretary','wobble','water','unknown','locket','fixed','lighten','sturdy','outstanding','cobweb','spare','record','makeshift','wrong','greet','growth','advice','quarter','moldy','glamorous','adorable','hilarious','puzzled','street','unwritten','berserk','history','tangible','visitor','approve','organic','known','breath','berry','sense','testy','question','repeat','connect','point','comparison','brave','paddle','volatile','tricky','grateful','uncle','creepy','quartz','metal','belong','sweltering','vacation','quirky','unnatural','humdrum','manage','promise','jelly','strip','married','waste','javascript');
    return randomWord[Math.floor(Math.random()*randomWord.length)];
  };
  $(function(){
    $('#onscreen-keyboard button').on('click', function(event){
        $(event.target).removeClass('un-clicked').addClass('is-clicked').html('-');
    });
  });
});