$(document).ready(function() {
	$(window).scroll(function() {
		var top = $(window).scrollTop();
		if (top < 249) {
			$('.item').removeClass('hover');
		} else {
			if (top >= 249 && top < 1541) {
				$('.item').removeClass('hover');
				$('.item1').addClass('hover');
			} else {
				if (top >= 1541 && top < 2425) {
					$('.item').removeClass('hover');
					$('.item2').addClass('hover');
				} else {
					if (top >= 2425 && top < 3168) {
						$('.item').removeClass('hover');
						$('.item3').addClass('hover');
					} else {
						if (top >= 3168 && top < 4671) {
							$('.item').removeClass('hover');
							$('.item4').addClass('hover');
						} else {
							$('.item').removeClass('hover');
						}
					}
				}
			}
		}
	})
})