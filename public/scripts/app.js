$(document).ready(function(){

// toggles compose tweet section when compose button clicked
  $('.compose').on('click', function(event) {
    $('.new-tweet').slideToggle('fast', function(){
      $('.new-tweet textarea').focus();
    });
  });

//toggles reaction buttons when mouse enters/leaves tweet section
  $('#tweets'). hover(function(event){
    $('#tweets .rxnDiv').toggle();
  });


// Submits form with Ajax, updates database, removes current tweets
// then appends all tweets
  $('.tweet-form').on('submit', function (event) {
    event.preventDefault();
    var $inputLength = $('.tweet-form textarea').val().length;
    if($inputLength === 0) {
      alert('Hey bud, your tweet can\'t be empty (Ծ‸ Ծ)');
      return;
    }else if($inputLength > 140) {
      alert('Whoa there friendo, your tweet is over 140 characters ◔_◔');
      return;
    } else {
      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: $(this).serialize()
      }).done(function(){
        $('.tweet-form textarea').val('');
        loadTweets();
      });
    }
  });

// Ajax request to retrieve tweets then render with functions below
  function loadTweets(){
    $.ajax({
      url: '/tweets'
    }).done(function(tweets){
      renderTweet(tweets);
    });
  }

// Retrieves one tweet and render tweet DOM object
  function createTweetElements(tweet) {

    var $header = $("<header>");
    var $img = $("<img>", {class: "avatar", src: tweet.user.avatars.small});
    var $h2 = $("<h2>", {class: "author", text: tweet.user.name});
    var $h4 = $("<h4>", {class: "handle", text: tweet.user.handle});
    $header.append($img).append($h2).append($h4);

    var $section = $("<section>", {class: "content"});
    var $pContent = $("<p>", {text: tweet.content.text});
    $section.append($pContent);


    var day = moment(tweet.created_at).fromNow();
    var $pFooter = $("<p>", {class: "time", text: day});
    var $flag = $("<button>", {class: "rxn flag", text: "🏴"});
    var $retweet = $("<button>", {class: "rxn retweet", text: "🔁"});
    var $like = $("<button>", {class: "rxn like", text: "♥", type: "submit", value: 1});
    var $div = $("<div>", {class: "rxnDiv"});
    var $footer = $("<footer>");
    $div. append($flag). append($retweet). append($like);
    $footer.append($div).append($pFooter);

    var $article = $("<article>");
    $article.append($header).append($section).append($footer);

    return $article;
  }
// Loops through tweets object and calls create tweet function on each
  function renderTweet(tweetData){
    $('#tweets').empty();
    tweetData.forEach(function(item, index){
      var $newTweet = createTweetElements(tweetData[index]);
      $("#tweets").prepend($newTweet);
    });
  }

  loadTweets();

});