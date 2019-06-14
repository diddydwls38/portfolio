window.addEventListener("load", function(){
  var n=0;
  var timer=0;
  var pos=0;
  var tit=document.querySelector(".title");
  var t=window.scrollTop;

  window.onscroll = function() {active1()};
  console.log(t);

  function active1(){
    if(t > 10 || t > 600){
       tit.classList.add("active");
       console.log(0);
    }
    else{
      tit.classList.remove("active");
    }
  }

});
