(function($){

	$(document).ready(function(){
	  $('.slider-wrapper').slick({
		  dots: true,
		  arrows: false,
		  customPaging : function(slider, i) {
			var thumb = $(slider.$slides[i]).data();

			if(i<9) {
				return '0'+(i+1);
			} else {
				return i+1;
			}
		},
		  // speed: 500,
		  // autoplay: true,
    // 	  autoplaySpeed: 3000
		});

	});

})(jQuery);