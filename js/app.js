$(document).ready(function(){
	
    $(".fa-arrow-up").click(function(){
    	 $(window).scrollTop(0);
    });
    //for testmonials
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });

//for image gallery

$(".nxt").click(function(){

	$(".img2").css("border","2px solid red");
});


   
}); 