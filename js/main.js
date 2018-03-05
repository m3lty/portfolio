$(document).ready(function(){
  $("#title1").fadeIn(1000).removeClass("hidden");
  $("#title2").fadeIn(2000).removeClass("hidden");
  $("#title3").fadeIn(3000).removeClass("hidden");
});
$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};
$(window).scroll(function(){
    if($("#profilepic").isOnScreen){
      $("#profilepic").fadeIn(1000).removeClass("hidden");
    }
});
