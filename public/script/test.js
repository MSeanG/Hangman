$(function(){
    $('#inputs button').on('click', function(event){
        $(event.target).removeClass('clickMe');
        $(event.target).addClass('clicked');
        $(event.target).html('-');
    });
        

    // $("button").toggleClass('btn clicked');
    //$('button[class="btn"]').click(function(){
    //if(!$(this).hasClass('clicked'))
    //    $(this).addClass('clicked');
    //});
    //$('button').on('click', function(event){
    // selected = $(event.currentTarget).text();
    //})
    //$('button').on('click', function(event){
    //     $(this).toggleClass('clicked');
    //})
    //var btn =
    //$("#inputs button").on('click', function(){
    //    if($(this).attr('class') === 'clickMe'){
    //        //$(this).html('&nbsp');
    //        $(this).removeClass('clickMe');
    //        $(this).addClass('clicked')
    //    }
    //});
    //console.log(btn);
    //$('button .clickMe').on('click', function(event){

         //console.log(event.target);
        //$(event.currentTarget).removeClass('clickMe');
        //$(event.currentTarget).addClass('clicked');

   // });
    //    $('.clickMe')
    //}
    //$(".btn").click(function () {
    //    if ($(this).hasClass('btn')) {
    //        $(this).html(' ').toggleClass('clicked');
    //    }
    //});
               //$("#inputs button").click(function(){

               //    if ( $(this).attr('class') == 'clickMe') {
               //        $(this).html(' ');
               //        $(this).removeClass('clickMe');
               //        $(this).addClass('clicked');
               //    } 

               //});
});
