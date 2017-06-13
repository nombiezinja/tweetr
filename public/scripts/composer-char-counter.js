$( document ).ready(function() {
    console.log( "ready!" );
    $(".new-tweet textarea").on("input", function(event){
      var length = $(this).val().length;
      var remaining = 140 - length;
      var $counter = $(this).parent().children('.counter');
      $counter.text(remaining);
      if (remaining < 0) {
        $counter.addClass('changeRed');
      } else {
        $counter.removeClass('changeRed');
      }


    })
});