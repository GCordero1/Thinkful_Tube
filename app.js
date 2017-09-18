$('#search-btn').click(function() {
  q = $(".js-query").val();
  $.get("https://www.googleapis.com/youtube/v3/search", {
    part: 'snippet, id',
    q: q,
    type: 'video',
    key: 'AIzaSyCa7e_vhvteU1Zc9nE83GamWe29XgdqVT8'
  },

  function(data){
    console.log(data.items[0]);
    $.each(data.items, function(i, item){
      var output = getOutput(item);
      $(".js-search-results").append(output);
      });

  })

  $(".js-search-form").submit(function(e){
    e.preventDefault();
    $(".js-search-results").html("");
    $(".js-query").html("");
  });
});

  function getOutput(item) {
    var title = item.snippet.title;
    var description = item.snippet.description;
    var thumb = item.snippet.thumbnails.medium.url;
    var videoId = item.id.videoId;
    var data = '<li>' + '<img src="' + thumb + '">' + 
    '<br>' + '<h3><a class="fancybox fancybox.iframe" href="https://youtube.com/embed/' + 
    videoId + '?rel=0">' + title +'</a></h3>' + '<small>' + description + '</small>' + '</li>'
    return data;
  }