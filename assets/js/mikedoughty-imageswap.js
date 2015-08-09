$(function() {
	"use strict";
	if (navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)){
		
		$('.test_mouse_test').bind('touchstart',function(e) {
			e.preventDefault();
			
			var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
      			elm = $(this).offset(),
      			x = touch.pageX - elm.left,
      			y = touch.pageY - elm.top,
				imageWidth = $(this).outerWidth(),
				percentagePosition  = Math.round(((x / imageWidth) * 100 ));
			
      		
			if(x < $(this).width() && x > 0){
          	if(y < $(this).height() && y > 0){
                  //CODE GOES HERE
              
			
			if (percentagePosition <= 25 && percentagePosition >= 0) {
					$('.mousetest_image li').css('display','none');
					$('.mousetest_image li:nth-child(1)').css('display', 'inline');
					$('.owl_colors').html('&nbsp;- First Color');
				}
				
				else if (percentagePosition <= 50 && percentagePosition > 25) {
					$('.mousetest_image li').css('display','none');
					$('.mousetest_image li:nth-child(2)').css('display', 'inline');
					$('.owl_colors').html('&nbsp;- Second Color');
				}
				
				else if (percentagePosition <= 75 && percentagePosition > 50) {
					$('.mousetest_image li').css('display','none');
					$('.mousetest_image li:nth-child(3)').css('display', 'inline');
					$('.owl_colors').html('&nbsp;- Third Color');
				}
				
				else if (percentagePosition <= 100 && percentagePosition > 75) {
					$('.mousetest_image li').css('display','none');
					$('.mousetest_image li:nth-child(4)').css('display', 'inline');
					$('.owl_colors').html('&nbsp;- Fourth Color');
				}
				
				else {
					$('.mousetest_image li').css('display','none');
					$('.mousetest_image li:nth-child(4)').css('display', 'inline');
				}
				
				
          }
      }
		 });
	
	$('.test_mouse_test').bind('touchmove',function(e) {
			e.preventDefault();
			
			var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
      			elm = $(this).offset(),
      			x = touch.pageX - elm.left,
      			y = touch.pageY - elm.top,
				imageWidth = $(this).outerWidth(),
				percentagePosition  = Math.round(((x / imageWidth) * 100 ));
			
      		
			if(x < $(this).width() && x > 0){
          	if(y < $(this).height() && y > 0){
                  //CODE GOES HERE
				  
			
			if (percentagePosition <= 25 && percentagePosition >= 0) {
					$('.mousetest_image li').css('display','none');
					$('.mousetest_image li:nth-child(1)').css('display', 'inline');
					$('.owl_colors').html('&nbsp;- First Color');
				}
				
				else if (percentagePosition <= 50 && percentagePosition > 25) {
					$('.mousetest_image li').css('display','none');
					$('.mousetest_image li:nth-child(2)').css('display', 'inline');
					$('.owl_colors').html('&nbsp;- Second Color');
				}
				
				else if (percentagePosition <= 75 && percentagePosition > 50) {
					$('.mousetest_image li').css('display','none');
					$('.mousetest_image li:nth-child(3)').css('display', 'inline');
					$('.owl_colors').html('&nbsp;- Third Color');
				}
				
				else if (percentagePosition <= 100 && percentagePosition > 75) {
					$('.mousetest_image li').css('display','none');
					$('.mousetest_image li:nth-child(4)').css('display', 'inline');
					$('.owl_colors').html('&nbsp;- Fourth Color');
				}
				
				else {
					$('.mousetest_image li').css('display','none');
					$('.mousetest_image li:nth-child(4)').css('display', 'inline');
				}
				
				
          }
      }
		 });
		 
		 $('.test_mouse_test').bind('touchend', function() {
		  $('.mousetest_image li').css('display','none');
					$('.mousetest_image li:nth-child(4)').css('display', 'inline');
		 $('.owl_colors').html('');
		 
		 
	  });
	  
	  
				
	} 
	
	else {
      $('.mousetest').mousemove(function(e) {
            var offset = $(this).offset(),
				imageWidth = $(this).outerWidth(),
				leftPosition = (e.pageX - offset.left),
				percentagePosition  = Math.round(((leftPosition / imageWidth) * 100 ));
           
			
			if (percentagePosition <= 25 && percentagePosition >= 0) {
					$('.mousetest_image li').css('display','none');
					$('.mousetest_image li:nth-child(1)').css('display', 'inline');
					$('.owl_colors').html('&nbsp;- First Color');
				}
				
				else if (percentagePosition <= 50 && percentagePosition > 25) {
					$('.mousetest_image li').css('display','none');
					$('.mousetest_image li:nth-child(2)').css('display', 'inline');
					$('.owl_colors').html('&nbsp;- Second Color');
				}
				
				else if (percentagePosition <= 75 && percentagePosition > 50) {
					$('.mousetest_image li').css('display','none');
					$('.mousetest_image li:nth-child(3)').css('display', 'inline');
					$('.owl_colors').html('&nbsp;- Third Color');
				}
				
				else if (percentagePosition <= 100 && percentagePosition > 75) {
					$('.mousetest_image li').css('display','none');
					$('.mousetest_image li:nth-child(4)').css('display', 'inline');
					$('.owl_colors').html('&nbsp;- Fourth Color');
				}
				
				else {
					$('.mousetest_image li').css('display','none');
					$('.mousetest_image li:nth-child(4)').css('display', 'inline');
				}
      });
	  
	  $('.mousetest').mouseleave(function() {
		 $('.mousetest_image li').css('display','none');
					$('.mousetest_image li:nth-child(4)').css('display', 'inline');
		 $('.owl_colors').html('');
	  });
	}
	
});
