$(document).ready(function(){

  $('.registerbtn').on('click', function(event) {
    $('.registerdiv').slideToggle('fast');
  });

  $('.register-form').on('submit', function (event) {
    event.preventDefault();
    var $email = $('.email-input');
    var $password = $('.password-input');
    if($email.val().length === 0 || $password.val().length === 0) {
      alert('Please enter an email and a password (Ծ‸ Ծ)');
      return;
    } else {
      console.log("got to ajax")
      $.ajax({
        method: 'POST',
        url: '/register',
        data: $(this).serialize()
      }).done(function(){
        $('.register-form .input').val('');
        $('.registerbtn').hide();
      });

    }

  });

});

