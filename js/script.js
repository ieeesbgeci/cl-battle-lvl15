$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".navbar").css("background" , "#000");
	  }

	  else{
		  $(".navbar").css("background" , "transparent");  	
	  }
  })
})