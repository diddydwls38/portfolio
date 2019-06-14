$(function(){
  var n=0;
  var t=0;
  var timer=0;
  var pos=0;


  $(window).scroll(function(){
    clearTimeout(timer);
    timer=setTimeout(function(){
      t=$(window).scrollTop();

      $(".title").removeClass("active");
      $("#Resume").removeClass("active");
      $("#Portfolio").removeClass("active");
      $("#Other").removeClass("active");
      $("#Contact").removeClass("active");
      $(".content3_2").removeClass("active");
      if(t <= $("#section1").offset().top+10 || t <= $("#section2").offset().top-400){
        $(".title").addClass("active");
        $("#header nav ul li").removeClass("on");
        $("#header nav ul li:first-child").addClass("on");
      }
      else if(t <= $("#section2").offset().top-100 || t <= $("#section3").offset().top-600){
        $("#Resume").addClass("active");
        $("#header nav ul li").removeClass("on");
        $("#header nav ul li:nth-child(2)").addClass("on");
      }
      else if(t <= $("#section3").offset().top+300 || t <= $("#section4").offset().top-300){
        $(".content3_2").addClass("active");
        $("#Portfolio").addClass("active");
        $("#header nav ul li").removeClass("on");
        $("#header nav ul li:nth-child(3)").addClass("on");
      }
      else if(t <= $("#section4").offset().top-100 || t <= $("#section5").offset().top-300){
        $("#header nav ul li").removeClass("on");
        $("#Other").addClass("active");
        $("#header nav ul li:nth-child(4)").addClass("on");
      }
      else if(t <= $("#section5").offset().top-100){
        $("#header nav ul li").removeClass("on");
        $("#Contact").addClass("active");
        $("#header nav ul li:last-child").addClass("on");
      }
    }, 100);
  });

  $(window).trigger("scroll");

setInterval(function(){
  if(n < 1){
    n++;
    $(".scroll_down").animate({bottom:40}, 800);
  }
  else{
    n=0;
    $(".scroll_down").animate({bottom:20}, 800);
  }
}, 800);

$(".scroll_down").click(function(e){
  e.preventDefault();
  $("html, body").animate({scrollTop:840}, 600);
});

$("#header nav ul li:first-child").click(function(e){
  e.preventDefault();
  $("html, body").animate({scrollTop:0}, 600);
});
$("#header nav ul li:nth-child(2)").click(function(e){
  e.preventDefault();
  $("html, body").animate({scrollTop:840}, 600);
});
$("#header nav ul li:nth-child(3)").click(function(e){
  e.preventDefault();
  $("html, body").animate({scrollTop:2664}, 600);
});
$("#header nav ul li:nth-child(4)").click(function(e){
  e.preventDefault();
  $("html, body").animate({scrollTop:3818}, 600);
});
$("#header nav ul li:last-child").click(function(e){
  e.preventDefault();
  $("html, body").animate({scrollTop:4798}, 600);
});

var overFlag=false;
var monitorTop=$(".content3_img img").height() - $(".content3_img").height();
$(".slim_scroll").one('mouseenter', function(){
	if(overFlag == false){
		overFlag=true;
		$(this).animate({scrollTop : monitorTop}, 2400, function(){
			setTimeout(function(){
				$(".slim_scroll").animate({scrollTop : 0}, 2400, function(){
					overFlag=false;
				});
			}, 1000);
		});
	}
});

$(".slim_scroll").slimscroll({
  width: "100%",
  height: "430px",
  size: "10px",
  railVisible: true,
  alwaysVisible: true
});
});
