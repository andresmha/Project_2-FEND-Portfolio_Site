$(window).scroll(function() {
	if ($(window).scrollTop() > 110) {
		$(".navbar").fadeIn(500);
	} else {
		$(".navbar").fadeOut(0);
	}
});
