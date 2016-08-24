$(document).on("ready", function(){
  $('form').on('submit', function(event){
    event.preventDefault();
  $.ajax({

      // What kind of request
      method: "GET",

      // The URL for the request
      url: "http://api.giphy.com/v1/gifs/search?",

      // Code to run if the request succeeds;
      // the response is passed to the function
      success: onSuccess,

      // Code to run if the request fails; the raw request and
      // status codes are passed to the function
      error: onError,
  });
})
  function onSuccess(json){
    console.log(json);
    for (var i=0; i<=json.data.length; i++){
      $(".gif-gallery").append(json.data[i].images.original.url);
    }
  }
  function onError(xhr, status, errorThrown){
    console.log(xhr, status, errorThrown);
  }
});
