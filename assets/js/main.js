$(document).ready(function () {
	"use strict";
	$(".navicon-button").click(function () {
		$("body, nav").toggleClass("nav-full-screen");
		$("nav ul").toggleClass("site-nav-vertical");
		$(".main-wrapper").toggleClass("site-nav-main");
		$(this).toggleClass("open");
	});
	$('.take-me-to-the-top').on('click', function () {
		$('html,body').animate({ scrollTop: 0 }, 500);
			return false;
	});
	$('.show-me-more').on('click', function () {
		$('.read-more').slideToggle(500);
		$(this).text(function(i, v){
			return v === "Read More" ? "Read Less" : "Read More";
		});
		return false;
	});
});

// Function to the css rule
function checkSize() {
	"use strict";
	if ($(".site-nav").css("display") === "block" ) {
		$("body, nav").removeClass("nav-full-screen");
		$("nav ul").removeClass("site-nav-vertical");
		$(".main-wrapper").removeClass("site-nav-main");
		$("a.navicon-button").removeClass("open");
	}
}
// run test on resize of the window
$(window).resize(checkSize);

/* Begin prevent scroll test*/

function touchmove(e) {
	"use strict";
	if($("body").hasClass("nav-full-screen")) {
    e.preventDefault();
	}
}
document.addEventListener(touchmove, this.touchmove);
/* End prevent scroll test*/