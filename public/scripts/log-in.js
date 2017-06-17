//client-side
$(document).ready(function(){

  $('.loginbtn').on('click', function(event) {
    $('.logindiv').slideToggle('fast');
  });

  $('.login-form').on('submit', function (event) {
    event.preventDefault();
    var $email = $('.login-form .email-input');
    var $password = $('.login-form .password-input');
    if($email.val().length === 0 || $password.val().length === 0) {
      alert('Please enter an email and a password (Ծ‸ Ծ)');
      return;
    } else {
      console.log("got to login ajax")
      $.ajax({
        method: 'POST',
        url: '/login',
        data: $(this).serialize()
      }).done(function(){
        $('.login-form .input').val('');
        $('.logindiv').hide();
        $('.loginbtn').hide();
        $('.registerbtn').hide();
      });
    }
  });
});



