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

//for image gallery start
$(function () {
    $("#project-des p:eq(0)").nextAll().hide();
    $(".small-images img").click(function (e) {
        var $this = $(this),
            index = $this.index();
        $(".small-images img").removeClass('selected');
        $this.addClass('selected');
        $("#project-des p").eq(index).show().siblings().hide();
    });
    $('#next').click(function(){ 
        var $selected = $('.selected');
        var index = $selected.next('img').index();
        if(index == -1){
            index = 0;
        }
        var $curr = $(".small-images img").eq(index);
        $(".small-images img").removeClass('selected');
        $curr.addClass('selected');
        $("#project-des p").eq(index).show().siblings().hide();
    });
    
    $('#prev').click(function(){ 
        var $selected = $('.selected');
        var index = $selected.prev('img').index();
        var $curr = $(".small-images img").eq(index);
        $(".small-images img").removeClass('selected');
        $curr.addClass('selected');
        $("#project-des p").eq(index).show().siblings().hide();
    });
}); 
//for image gallery End

   
}); 