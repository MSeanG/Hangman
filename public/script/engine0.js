/* Write a Hangman game that displays a secret word as a list of hidden letters. Also display an alphabet of letters that the user can guess while trying to guess the word. After a letter is used, disable that letter from the alphabet so the user will not try to guess the same letter twice. When a guess matches one or more letters in the secret word, reveal those letters to the user. Keep track of the number of incorrect guesses and end the game if the number of incorrect guesses reaches 6. If the user reveals all of the hidden letters before reaching 6 incorrect guesses, then the user wins. */

/* wrap everything in a function so that the DOM loads before any Javascript runs, like this: $(function(){}); */
$(function(){

    /* manipulate the DOM */
    /* add 3 divs to keyboard container with class and IDs */
    function(){
        for (var i = 0; i < 3; i++) {
            $('#glyphs').append('<div id="qwerty-row-'+[i]+'"class="qwerty-row">');
        }
    };



    /* grab all the qwerty-rows */


    /* loop through the qwertyRows */

    /* Create an alphabet variable(s) = 'a qwerty string'. Change to upper  case. Split into an array */
    //var alphabet = 'qwertyuiopasdfghjklzxcvbnm'.toUpperCase().split('');
    var qp = 'qwertyuiop'.toUpperCase().split('');
    for(var i = 0; i < qp.length; i++) {
        $('#Sqwerty-row-0').append('<a class="qwerty-row qwerty-row-top">' + qp[i]);
    }
    console.log(qp)
    var al = 'asdfghjkl'.toUpperCase().split('');
    var zm = 'zxcvbnm'.toUpperCase().split('');
    //console.log(alphabet);


});






/* loop through alphabet and create HTML tags with class for each character */
//for (var i = 0; i < alphabet.length; i++){
//    $('#glyphs').append('<a class="glyph">' + alphabet[i]);
//}
//var qp = alphabet.slice(0,10);
//$(qp).addClass('topRpw');
//var qp = alphabet.slice(0,10);
//console.log(qp);
//qp.addClass('topRow');
//var qwe = 'qwertyuiop'.toUpperClass().p
//$(function(){
//    qwerty = [
//        {
//            qp: 'qwertyuiop'
//        },
//        {
//            al: 'asdfghjkl'
//        },
//        {
//            zm: 'zxcvbnm'
//        }
//    ],
//});

