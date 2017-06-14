$(document).ready(function(){

  $('.tweet-form').on('submit', function (event) {
    event.preventDefault();
    // if(Number($('.container .counter').text()) < 0) {
    //   alert ('Whoa there friendo, your tweet over 140 characters:0');
    // } else if (Number($('.container .counter').text())= 140){
    //   alert('Hey bud, your tweet can\'t be empty D:');
    var $inputLength = $('.tweet-form textarea').val().length;
    if($inputLength === 0) {
      alert('Hey bud, your tweet can\'t be empty (Ծ‸ Ծ)');
    }else if($inputLength > 140) {
      alert ('Whoa there friendo, your tweet over 140 characters ◔_◔');
    } else {
       $.ajax({
         method: 'POST',
         url: '/tweets',
         data: $(this).serialize();
       }).done(function () {
         console.log("it worked!");
       });
    }
  });

  function loadTweets(){
    $.ajax({
      url: '/tweets'
    }).done(function(tweets){
      renderTweet(tweets);
    })
  }

  function createTweetElements(tweet) {

    var $header = $("<header>");
    var $img = $("<img>", {class: "avatar", src: tweet.user.avatars.small});
    var $h2 = $("<h2>", {class: "author", text: tweet.user.name});
    var $h4 = $("<h4>", {class: "handle", text: tweet.user.handle});
    $header.append($img).append($h2).append($h4);

    var $section = $("<section>", {class: "content"});
    var $pContent = $("<p>", {text: tweet.content.text});
    $section.append($pContent);



    var $pFooter = $("<p>", {class: "time", text: tweet.created_at});
    var $footer = $("<footer>");
    $footer.append($pFooter);

    var $article = $("<article>");
    $article.append($header).append($section).append($footer);

    return $article;
  }

  function renderTweet(tweetData){
    tweetData.forEach(function(item, index){
      var $newTweet = createTweetElements(tweetData[index]);
      $("#tweets").append($newTweet);
    });
  }

  loadTweets();

});