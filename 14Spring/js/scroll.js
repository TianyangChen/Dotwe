$(document).ready(function() {


	$(window).scroll(function() {
		var top = $(window).scrollTop();
		if (top > 500) {

			$('#elevator_item').removeClass('off');

		} else {

			$('#elevator_item').addClass('off');

		}
	})
	//平滑滚动效果
	var nav_switch = 1;

	$('#about_dotwe').click(function() {
		if (nav_switch) {
			nav_switch = 0;
			$("html,body").animate({
				scrollTop: $("#about_dotwe2").offset().top
			}, 1000, function() {
				nav_switch = 1;
			});
		}
		return false;
	});
	$('#join_us').click(function() {
		if (nav_switch) {
			nav_switch = 0;
			$("html,body").animate({
				scrollTop: $("#join_us2").offset().top
			}, 1000, function() {
				nav_switch = 1;
			});
		}
		return false;
	});


	$('#elevator_item').click(function() {
		$("html,body").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});

});