$(document).ready(function(){
  $( ".card" ).hover(
    function() {
      $( this ).addClass("shadow");
    }, function() {
      $( this ).removeClass( "shadow" );
    }
  );
  $(".expand").click(function(){
    this.expand = !this.expand;
    $(this).text(this.expand?"Read Less":"Read More");
    $(this).next(".desktop").toggle(200,"swing");
  });
  $(".project-heading").click(function(){
    $(this).parent().find("img").toggle(200, "swing");
  });
});