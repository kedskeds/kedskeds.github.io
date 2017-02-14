$(document).ready(function(){
  $(".expand").click(function(){
    this.expand = !this.expand;
    $(this).text(this.expand?"Got it":"Tell Me More");
    $(this).next(".desktop").toggle(200, "swing");
  });
  $(".project-heading").click(function(){
    var img = $(this).parent().find("img");
    img.toggle();
  });
});