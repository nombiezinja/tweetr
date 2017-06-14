var tweetData = [
{
  "user": {
    "name": "Derky Nord",
    "avatars": {
      "small":   "https://s-media-cache-ak0.pinimg.com/originals/89/a8/e2/89a8e2d8e6c9caa5e1bae813f7d8a544.jpg",
      "regular": "https://s-media-cache-ak0.pinimg.com/originals/89/a8/e2/89a8e2d8e6c9caa5e1bae813f7d8a544.jpg",
      "large":   "https://s-media-cache-ak0.pinimg.com/originals/89/a8/e2/89a8e2d8e6c9caa5e1bae813f7d8a544.jpg"
    },
    "handle": "@derrk"
  },
  "content": {
    "text": "When you drink a beer the beer also gets drunk, do you ever think about that?"
  },
  "created_at": 1461113782938
},
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "What's brown and sticky? A stick"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Everything in the universe is either a potato or not a potato"
    },
    "created_at": 1461113959088
  },

  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "If you crack open a cold one in one yard and set out some milkshakes in another, which yard will the boys go to?"
    },
    "created_at": 1461113796368
  }

]


$(document).ready(function(){

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
    })
  }


renderTweet(tweetData);

});