// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


addEventListener('DOMContentLoaded', function() {

  var submitButton = document.getElementById('create-tweet');

  submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: {message: tweet_message.value},
      dataType: "html"
    }).done(function(response) {
      console.log("Done Response");
      console.log(response);
      var myUl = document.querySelector(".tweets");
      myUl.innerHTML = response + myUl.innerHTML
    }).always(function(response) {
      console.log("Always response");
      console.log(response);
    });
    console.log('Button Clicked');
  })



  console.log('This is the Event Listener')
})
