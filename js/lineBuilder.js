function menuBlock() {
  h = $(".menu-block").height();
  w = $(".menu-block").outerWidth();
  deg = Math.atan(h / w);
  $(".menu-block").css("background", "linear-gradient(" + -deg + "rad, #66cccc calc(50% - 1px), white 50%,  #66cccc calc(50% + 1px), #66cccc 100% )");
}
function projectsBlock() {
  h = $(".projects").height();
  w = $(".projects").outerWidth();
  deg = Math.atan(h / w);
  $(".projects").css("background", "linear-gradient(" + -deg + "rad, #ebb240 calc(50% - 1px), white 50%,  #ebb240 calc(50% + 1px), #ebb240 100% )");
}
function studioBlock() {
  h = $(".studio").height();
  w = $(".studio").outerWidth();
  deg = Math.atan(h / w);
  $(".studio").css("background", "linear-gradient(" + -deg + "rad, #ff9966 calc(50% - 1px), white 50%,  #ff9966 calc(50% + 1px), #ff9966 100% )");
}
function timelineBlock() {
  h = $(".timeline").height();
  w = $(".timeline").outerWidth();
  deg = Math.atan(h / w);
  $(".timeline").css("background", "linear-gradient(" + -deg + "rad, #ebb240 calc(50% - 1px), white 50%,  #ebb240 calc(50% + 1px), #ebb240 100% )");
}
function newsBlock() {
  h = $(".news-section").height();
  w = $(".news-section").outerWidth();
  deg = Math.atan(h / w);
  $(".news-section").css("background", "linear-gradient(" + -deg + "rad, #ccffcc calc(50% - 1px), white 50%,  #ccffcc calc(50% + 1px), #ccffcc 100% )");
}

menuBlock();
projectsBlock();
studioBlock();
timelineBlock();
newsBlock();
$(window).resize(function() {
  menuBlock();
  projectsBlock();
  studioBlock();
  timelineBlock();
  newsBlock();
});