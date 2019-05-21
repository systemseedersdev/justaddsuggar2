import lozad from 'lozad';

export default ({ app }, inject) => {
	inject( 'toggleClass', ( className, el ) => {
		el.classList.toggle( className );
	})

	inject( 'srcbkg', ( className, el ) => {

	});

	inject( 'lazyloader', ( args ) => {
		var imgObserver = lozad( '.lazy-load', {
    		loaded: function(el) {
        		el.classList.add('lozad-img-loaded');
    		}
		});
		imgObserver.observe();

		var videoObserver = lozad('.lozad-video', {
    		threshold: 0.1,
    		loaded: function(el) {
        		el.classList.add('lozad-video-loaded');
    		}
		});
		videoObserver.observe();
	});

	inject( 'gradientcss', ( selector, bkg = false ) => {
		console.log( selector );
		let colors1 = [ '#000000', '#e55d81', '#18195b', '#ff8fc0', '#1A3342', '#64442f', '#3a352f', '#14191F', '#ffd2d2', '#9F2C1C' ];
        let colors2 = [ '#ffffff', '#fffffd', '#603379', '#ffe665', '#030303', '#231801', '#705c44', '#383D50', '#656768', '#5B0E07' ];
        
        if( $( selector ).length ) {
	        $( selector ).each(function() {   
	        	var random = Math.floor((Math.random() * 9) + 0);
	        	if( bkg ) {
	        		$( this ).not('.lozad-img-loaded').css(
		            	"background", "linear-gradient(141deg, "+colors1[random]+" 0%, "+colors2[random] + " 100% )"
		        	);
	        	} else {
	        		$( this ).css(
		            	"background", "linear-gradient(141deg, "+colors1[random]+" 0%, "+colors2[random] + " 100% )"
		        	);
	        	}
		    });
		}
	});

	inject( 'bgVideoPlay', ( element ) => {
		window.addEventListener('load', async () => {
			let video = document.querySelector('.bkg_video_play video[muted][autoplay]');
			try {
			    await video.play();
			} catch (err) {
				//console.log( err );	
			}
		});
	});

	inject( 'mob_video_play', ( event ) => {
		$( '.mob_play_video' ).unbind().click( function() {
			console.log('mobile clicked');
			if( $(this).parent().find('video')[0].paused ) {
				console.log('mobile vid play');
				$(this).parent().find('video')[0].play();
			} else {
				console.log('mobile vid pause');
				$(this).parent().find('video')[0].pause();
			}
		});
	});

	inject( 'fullbg_video_play', ( event ) => {
		$( '.fullbg_play_video' ).unbind().click( function() {
			console.log('fullbg clicked');
			if( $(this).closest('section.playvideo_banner').find('video')[0].paused ) {
				console.log('fullbg vid play');
				$(this).closest('section.playvideo_banner').find('video')[0].play();
			} else {
				console.log('fullbg vid pause');
				$(this).closest('section.playvideo_banner').find('video')[0].pause();
			}
		});
	});

	inject( 'desk_video_play', ( event ) => {
		$( '.desk_play_video' ).unbind().click( function() {
			console.log('desk clicked');
			if( $(this).parent().parent().find('video')[0].paused ) {
				console.log('desk vid play');
				$(this).parent().parent().find('video')[0].play();
			} else {
				console.log('desk vid pause');
				$(this).parent().parent().find('video')[0].pause();
			}
		});
	});

	inject( 'play_video_hover', ( args ) => {
		$(".postvideo").hover(function () {
			$(this).removeClass('jsugar-hidden').addClass('jsugar-visible');
	        $(this)[0].play();
	    }, function () {
	    	$(this).removeClass('jsugar-visible').addClass('jsugar-hidden');
	        $(this)[0].pause();
	        $(this)[0].currentTime = 0;
	    });

	    $(".postvideo_slides .postslide-cap").hover(function () {
	    	$(this).parent().find('video').removeClass('jsugar-hidden').addClass('jsugar-visible');
	    	if(  $(this).parent().find('video').length ) {
	    		$(this).parent().find('video')[0].play();
	    	}
	    }, function () {
	    	$(this).parent().find('video').removeClass('jsugar-visible').addClass('jsugar-hidden');
	    	if(  $(this).parent().find('video').length ) {
	    		$(this).parent().find('video')[0].pause();
	        	$(this).parent().find('video')[0].currentTime = 0;
	        }
	    });
	});

	inject( 'mob_slide', ( args ) => {
		$('.mob-slide').not('.slick-initialized').slick({
	        dots: true,
	        arrows: false,
	        infinite: true,
	        speed: 500,
	        slidesToShow: 1,
	        adaptiveHeight: true
	    });
	});

	inject( 'aboutcont_slide', ( args ) => {
		$('.aboutcont_slide').not('.slick-initialized').slick({
	        dots: false,
	        infinite: true,
	        autoplay: true,
	        speed: 300,
	        slidesToShow: 1,
	        adaptiveHeight: true
	    });
	});

	inject( 'testimonial_slide', ( args ) => {
		$('.testimonial-slide').not('.slick-initialized').slick({
	        dots: false,
	        arrows: false,
	        infinite: true,
	        speed: 300,
	        slidesToShow: 1,
	        adaptiveHeight: true
	    });
	});

	inject( 'reallyproud_slide', ( args ) => {
		var $slider = $('.reallyproud-slide');
	    var $progressBar = $('.progress');
	    var $progressBarLabel = $('.slider__label');

	    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

	        $progressBar
	            .css('background-size', calc + '% 100%')
	            .attr('aria-valuenow', calc);

	        $progressBarLabel.text(calc + '% completed');
	    });

	    var $status = $('.pagingInfo');
	    var $slickElement = $('.slideshow');

	    $slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
	        var i = (currentSlide ? currentSlide : 0) + 1;
	        $status.text(i + '/' + slick.slideCount);
	    });

	    $slider.not('.slick-initialized').slick({
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        dots:true,
	        speed: 400
	    });
	});

	inject( 'oneslide_slide', ( args ) => {
		var $slider = $('.oneslide-slide');
	    var $progressBar = $('.progress');
	    var $progressBarLabel = $('.slider__label');

	    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

	        $progressBar
	            .css('background-size', calc + '% 100%')
	            .attr('aria-valuenow', calc);

	        $progressBarLabel.text(calc + '% completed');
	    });

	    var $status = $('.pagingInfo');
	    var $slickElement = $('.slideshow');

	    $slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
	        var i = (currentSlide ? currentSlide : 0) + 1;
	        $status.text(i + '/' + slick.slideCount);
	    });

	    $slider.not('.slick-initialized').slick({
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        speed: 400
	    });
	});

	/* SOME MORE */
	inject( 'somemore_slide', ( args ) => {
		$( '.somemore_slide' ).not('.slick-initialized').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1            
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }        
            ]
        });
	})


	/* INSTAGRAM SLIDER */
	inject( 'departments_slide', ( args ) => {
	    $('.departments_slide').not('.slick-initialized').slick({
	        dots: true,
	        infinite: false,
	        arrows: false,
	        speed: 300,
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        responsive: [
	            {
	                breakpoint: 1024,
	                settings: {
	                    slidesToShow: 3,
	                    slidesToScroll: 1
	                }
	        	},
	            {
	                breakpoint: 600,
	                settings: {
	                    slidesToShow: 1,
	                    slidesToScroll: 1
	                }
	        	},
	            {
	                breakpoint: 480,
	                settings: {
	                    slidesToShow: 1,
	                    slidesToScroll: 1
	                }
	        	}
	      	]
	    });
	})

	/* PARTNERS SLIDER */
	inject( 'partners_slide', ( args ) => {
	    $('.partners-slide').not('.slick-initialized').slick({
	        dots: false,
	        infinite: false,
	        autoplay: true,
	        arrows: false,
	        speed: 300,
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        responsive: [
	            {
	                breakpoint: 1024,
	                settings: {
	                    slidesToShow: 4,
	                    slidesToScroll: 1
	                }
	        	},
	            {
	                breakpoint: 600,
	                settings: {
	                    slidesToShow: 3,
	                    slidesToScroll: 1
	                }
	        	},
	            {
	                breakpoint: 480,
	                settings: {
	                    slidesToShow: 2,
	                    slidesToScroll: 1
	                }
	        	}
	      	]
	    });
	});


	/* POST SLIDER */
	inject( 'post_slide', ( args ) => {
	    var $slider = $('.post_slide');
	    var $progressBar = $('.progress');
	    var $progressBarLabel = $('.slider__label');

	    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

	        $progressBar
	            .css('background-size', calc + '% 100%')
	            .attr('aria-valuenow', calc);

	        $progressBarLabel.text(calc + '% completed');
	    });

	    var $status = $('.pagingInfo');
	    var $slickElement = $('.slideshow');

	    $slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
	        var i = (currentSlide ? currentSlide : 0) + 1;
	        $status.text(i + '/' + slick.slideCount);
	    });

	    $slider.not('.slick-initialized').slick({
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        speed: 400,
	        responsive: [
	            {
	                breakpoint: 1024,
	                settings: {
	                    slidesToShow: 3,
	                    slidesToScroll: 1,
	                    infinite: true
	                }
	        	},
	            {
	                breakpoint: 767,
	                settings: {
	                    slidesToShow: 2,
	                    slidesToScroll: 1
	                }
	        	},
	            {
	                breakpoint: 480,
	                settings: {
	                    slidesToShow: 1,
	                    slidesToScroll: 1
	                }
	        	}
	      	]
	    });
	});

	inject( 'slidecap_slide', ( args ) => {

		
	 	$('.slidecap-slider').each(function(index, element) {
	 		
	 		var $slider = $(this);
	 		var $progressBar = $(this).next().find('div.progress');
	 		var $progressBarLabel = $(this).next().find('span.slider__label');

	 		$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

	        $progressBar
		            .css('background-size', calc + '% 100%')
		            .attr('aria-valuenow', calc);

		        $progressBarLabel.text(calc + '% completed');
		    });

		    var $status = $(this).next().find('span.pagingInfo');

		    $slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		        var i = (currentSlide ? currentSlide : 0) + 1;
		        $status.text(i + '/' + slick.slideCount);
		    });

		    $slider.not('.slick-initialized').slick({
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        dots:true,
		        speed: 400
		    });
	 	});
	});


	inject( 'phone_slide', ( args ) => {

	    $('.phone-slider').each(function(index, element) {
	    	var $slider = $(this);
	 		var $progressBar = $(this).next().find('div.progress');
	 		var $progressBarLabel = $(this).next().find('span.slider__label');

	 		$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

	        $progressBar
		            .css('background-size', calc + '% 100%')
		            .attr('aria-valuenow', calc);

		        $progressBarLabel.text(calc + '% completed');
		    });

		    var $status = $(this).next().find('span.pagingInfo');

		    $slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		        var i = (currentSlide ? currentSlide : 0) + 1;
		        $status.text(i + '/' + slick.slideCount);
		    });

		    $slider.not('.slick-initialized').slick({
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        speed: 400
		    });
	    });
	});
}