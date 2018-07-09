$(document).ready(function(){
  $("body").addClass("loaded");
  $("#about .content").addClass("loaded");
  setTimeout(function(){
    $("nav").addClass("loaded");
    
  }, 1000);
});