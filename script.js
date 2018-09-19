$(document).scroll(function() {
  console.log($(document).scrollTop());
  var scrollPosition = $(document).scrollTop();
  if (328 < scrollPosition && scrollPosition < 3300) {
    $('#social-menu').css({"display":"block"});
  } else {
    $('#social-menu').css({"display":"none"});
  }
});
