$(document).ready(function(){
  $("#title1").fadeIn(1000).removeClass("hidden");
  $("#title2").fadeIn(2000).removeClass("hidden");
  $("#title3").fadeIn(3000).removeClass("hidden");
  $(".hiddenLink").fadeIn(4000).removeClass("hidden");
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 300) {
        $('.skillContainer').fadeIn(500).toggleClass("visible");
    }
});




function ScrollTo(target, speed, timeout) {

    if (!timeout) timeout = 0;
    if (!speed) speed = 1000;
  
    if (typeof target !== "undefined") {
      //target = target.replace("#", ".");
      //target = $(document.body).find(target);
      setTimeout(function() {
          console.log($(target).offset().top);
        $('html,body').animate({
          scrollTop: $(target).offset().top
        }, speed);
      }, timeout);
    }
  }
  
  $(".hiddenLink").click(function(e) {
    // Prevent a page reload when a link is pressed
    e.preventDefault();
    // Call the scroll function
    ScrollTo($(this).attr("href"), 0, 0); // target, speed, timeout
  });
