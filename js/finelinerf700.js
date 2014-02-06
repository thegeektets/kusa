/*
 * Fineliner - Responsive Portfolio HTML Template
 * By UXbarn
 * Themeforest Profile: http://themeforest.net/user/UXbarn?ref=UXbarn
 * Demo URL: http://themes.uxbarn.com/redirect.php?theme=fineliner_html
 * Created: September 19, 2013
 */

jQuery(document).ready(function($) {
	
	
	/* #DEMO
     ================================================== */
    $.getScript('demo/demo.js');
    /* END: DEMO */
	
	
	// --------------------------------------------------------- //
    // Configuration Options
    // --------------------------------------------------------- //
    var homeSliderAutoAnimated = false;
    var homeSliderAutoAnimatedDelay = 2000;
    var homeSliderAnimation = 'fade'; // only "fade" or "slide"
    var homeSliderAnimationSpeed = 700;
    var homeSliderCaptionAnimated = true;
    
    var portfolioImageSliderAutoAnimated = false;
    var portfolioImageSliderAutoAnimatedDelay = 5000;
    var portfolioImageSliderAnimation = 'fade'; // only "fade" or "slide"
    var portfolioImageSliderAnimationSpeed = 600;
    
    var imageSliderAutoAnimated = true;
    var imageSliderAutoAnimatedDelay = 3000;
    var imageSliderAnimation = 'fade'; // only "fade" or "slide"
    var imageSliderAnimationSpeed = 600;
    
    var testimonialSliderAutoAnimated = false;
    var testimonialSliderAutoAnimatedDelay = 10000;
    // ---------------------------------------------- //
    
    
    
	// ---------------------------------------------- //
    // Global Read-Only Variables (DO NOT CHANGE!)
    // ---------------------------------------------- //
    var isSearchDisplayed = false;
    
    var isHomeSliderLoaded = false;
    var isHomeSliderFirstTimeHovered = false;
    
    var isPortfolioSliderLoaded = false;
    var isPortfolioSliderFirstTimeHovered = false;
    
	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1;
	var androidversion = parseFloat(ua.slice(ua.indexOf("android")+8)); 
	
	var width = parseInt($('.content-width').css('width').replace('px', ''), 10);
    // ---------------------------------------------- //
    
    
    
    
    // ---------------------------------------------- //
    // Core Scripts
    // ---------------------------------------------- //
    
    // Initialize custom functions
    renderGoogleMaps();
    initMobileMenu();
    
    
    // Initialize Foundation framework
    $(document).foundation();
    
    // Force displaying tabs element after JS has been loaded
    $('#content-container .section-container').addClass('display-block');
    
    
   
    /***** Home Slider *****/
    if($('#home-slider-container').length > 0) {
    	
    	if( ! homeSliderCaptionAnimated) {
    		$('.slider-caption h2, .slider-caption p').css('opacity', 1);
    	}
    	
    	$('#home-slider-container').flexslider({
    		animation: homeSliderAnimation,
		    directionNav: false,
		    contolNav: false,
		    pauseOnAction: true,
			pauseOnHover: true,
		    slideshow: homeSliderAutoAnimated,
		    slideshowSpeed: homeSliderAutoAnimatedDelay,
		    animationSpeed: homeSliderAnimationSpeed,
		    selector: '.home-slider-slides > li',
		    initDelay: 2000,
		    smoothHeight: true,
    		start: function(slider) {
    			
    			var initFadingSpeed = 500;
    			var initDelay = 0;
    			// "slide" effect has some different transition to re-define
    			if(homeSliderAnimation == 'slide') {
    				initFadingSpeed = 1;
    				initDelay = 800;
    			}
    			
    			$('#home-slider-container .home-slider-slides, #home-slider-container .flex-viewport').stop().animate({ // "fade" and "slide" effect container
                    opacity: 1
                }, initFadingSpeed, function() {
                	
                	if(homeSliderCaptionAnimated) {
	                    $(slider.slides[slider.currentSlide]).find('.slider-caption h2').delay(initDelay).stop().animate({
	                        opacity: 1
	                    }, 500, function() {
	                    	$(slider.slides[slider.currentSlide]).find('.slider-caption p').stop().animate({
		                        opacity: 1
		                    }, 800);
		                    
	                    });
                    }
                });
                
    			isHomeSliderLoaded = true;
                
                // Hide loading gif
	            $(slider).closest('#home-slider-container').css({
	       			background: 'none',
	       			// reset init height fix for Safari (also working on other browsers). this will also set the inline height based on the first slide's image
	       			height: $(slider).closest('#home-slider-container').find('.home-slider-slides li.flex-active-slide img').height() + 'px', 
	   			}).addClass('auto-height');
	   			
               	/*$('#home-slider-container').css({
           			background: 'none',
           			height: 'auto',
       			});*/
    		},
    		before: function(slider) {
    			if(homeSliderCaptionAnimated) {
    				$('.slider-caption h2, .slider-caption p').stop().animate({ 'opacity' : 0 }, 1);
    			}
    		},
    		after: function(slider) {
    			
    			$(slider).closest('#home-slider-container').css('height','inherit');
    			
    			if(homeSliderCaptionAnimated) {
    				
	            	$(slider.slides[slider.currentSlide]).find('.slider-caption h2').stop().animate({
	                    opacity: 1
	                }, 500, function() {
	                	$(slider.slides[slider.currentSlide]).find('.slider-caption p').stop().animate({
	                        opacity: 1
	                    }, 800);
	                    
	                });
                }
    		}
    	});
    	$('#home-slider-container .slider-prev').on('click', function(){
		    $(this).closest('.slider-set').flexslider('prev');
		    return false;
		});
		$('#home-slider-container .slider-next').on('click', function(){
		    $(this).closest('.slider-set').flexslider('next');
		    return false;
		});
		
	 	// Set the position of home slider's border
	    //alert($('.home-slider-item:first-child').height());
	    var $homeSliderBorder = $('.home-slider-item-border');
	    $homeSliderBorder.css({
	    	height: '89%',
	    	top: '5.5%',
	    	width: '94.35897435897436%',
	    	left: '2.820512820512821%',
	    });
	    
	    // Display slider controller on hovered 
	    $('#home-slider-container').hover(function() {
	    	if($(this).find('.home-slider-item').length > 1) {
		    	if(isHomeSliderLoaded) { // works only when the slider is loaded
		    		isHomeSliderFirstTimeHovered = true; // this is used to prevent the "mousemove" event below continuously firing the handler
			    	$(this).find('.slider-controller').css('display', 'block').stop().animate({ 'opacity' : 1 });
		    	}
	    	}
	    }, function() {
	    	$(this).find('.slider-controller').stop().animate({ 'opacity' : 0 });
	    });
	    // If the mouse cursor is moving on the slider when it is just loaded, display the controller
	    $('#home-slider-container').mousemove(function() {
	    	if($(this).find('.home-slider-item').length > 1) {
				if( ! isHomeSliderFirstTimeHovered && isHomeSliderLoaded) {
			    	$(this).find('.slider-controller').css('display', 'block').stop().animate({ 'opacity' : 1 });
				}
			}
		});
	    
    }
    
    
    
    
	/***** Menu *****/
	$('.sf-menu').superfish({
		animation: { 
			height: 'show' 	// slide-down effect without fade-in 
		},	
		speed: 'normal',
		speedOut: 'normal', 
		delay: 400	// 0.4 second delay on mouseout
	});
	
	// Set marker for active menu
	var menuParent = $('.main-menu .active').closest('li');
	menuParent.append('<span class="menu-marker"></span>');
	$('.menu-marker').stop().animate({ 'opacity' : 1 });
	
	// Menu on hovered
	$('.main-menu > li').mouseover(function() {
		$('.main-menu > li > a, .menu-marker').not($(this).children('a')).stop().animate({ 'opacity' : 0.2 });
	}).mouseout(function() {
		$('.main-menu > li > a, .menu-marker').not($(this).children('a')).stop().animate({ 'opacity' : 1 }, 600);
	});
	
	// Header Search Button
    $('#header-search-button').click(function() {
        if(!isSearchDisplayed) {
        	
        	// Hide menu
        	$('.menu-column').stop().animate({
        		opacity : 0
        	}, 300, function() {
        		$(this).css('display', 'none');
        	});
        	
    		//$('#mobile-menu > ul').css('visibility', 'hidden');
    		$('#mobile-menu > ul').stop().animate({'opacity': 0});
        	
            // Display search input
            $('#header-search-input-wrapper').css('display', 'block').stop().animate({
                opacity : 1
            }, 300);
            
            $('#header-search-button').addClass('cancel').find('i').removeClass().addClass('icon-remove');
            $('#header-search-input').focus();
            
            isSearchDisplayed = true;
        } else {
        	// Show menu
        	$('.menu-column').css('display', '').stop().animate({
        		opacity : 1
        	}, 300);
    		//$('#mobile-menu > ul').css('visibility', 'visible');
    		$('#mobile-menu > ul').stop().animate({'opacity': 1}, 400);
        	
            // Hide search input
            $('#header-search-input-wrapper').stop().animate({
                opacity : 0
            }, 200, function() {
                $(this).css('display', 'none');
            });
            
            $('#header-search-button').removeClass('cancel').find('i').removeClass().addClass('icon-search');
            
            isSearchDisplayed = false;
        }
        
	});
    
    
    
    /***** Portfolio *****/ 
    
    // Run Isotope for portfolio list
    var container = $('.portfolio-wrapper');
    
    $(container).each(function() {
	   	var container = $(this);
	    var rootContainer = $(this).closest(".portfolio-root-wrapper");
	    
	    $(container).imagesLoaded(function() {
	        $(container).isotope({
	            itemSelector : '.portfolio-item',
	        });
	        
	        $(rootContainer).find(".loading-text").css('display', 'none');
	        
	        // Display loaded wrapper
	        $(container).closest(".portfolio-loaded-wrapper").css({
	        	'opacity': 1,
	        	'height': 'auto',
	        	'visibility': 'visible',
	    	});
	        
	        // Display the items one after another
	        $(container).find('.portfolio-item').each(function(index) {
				$(this).css('visibility', 'visible').delay(110*index).animate({
					"opacity" : 1,
				}, 1);
			});
	    });
	    var filters = $(container).closest(".portfolio-loaded-wrapper").find('.portfolio-filters a');
	    $(filters).click(function(){
			var selector = $(this).attr('data-filter');
			$(container).isotope({ filter: selector });
			
			$(filters).removeClass('active');
			$(this).addClass('active');
			
			return false;
		});
		
		$(window).smartresize(function(){
			$(container).isotope();
		});
		
    });
    
    
    $('.portfolio-item-hover-info').each(function() {
    	var infoHeight = $(this).height();
    	var parentHeight = $(this).parent('.portfolio-item').height();
    	$(this).css({
    		height : infoHeight,
    		top : '50%',
    		marginTop : ((infoHeight/2) * -1) + 'px', // add negative margin to centering the element
    	});
    });
    
    // Portfolio slider on single page
    if($('#single-portfolio-images-container').length > 0) {
	
		$('#single-portfolio-images-container').imagesLoaded(function() {
	
			$('#single-portfolio-images-container').flexslider({
				animation: portfolioImageSliderAnimation,
				directionNav: false,
				contolNav: false,
				pauseOnAction: false,
				pauseOnHover: true,
				slideshow: portfolioImageSliderAutoAnimated,
				slideshowSpeed: portfolioImageSliderAutoAnimatedDelay,
				animationSpeed: portfolioImageSliderAnimationSpeed,
				selector: '.single-portfolio-slides > li',
				initDelay: 2000,
				smoothHeight: true,
				start: function(slider) {
					
					var initFadingSpeed = 800;
					var initDelay = 0;
					// "slide" effect has some different transition to re-define
					if(portfolioImageSliderAnimation == 'slide') {
						initFadingSpeed = 1;
						initDelay = 800;
					}
					
					$('#single-portfolio-images-container .single-portfolio-slides, #single-portfolio-images-container .flex-viewport')
						.css('visibility', 'visible').stop().animate({
						opacity: 1,
					}, initFadingSpeed);
					
					isPortfolioSliderLoaded = true;
					
					// Hide loading gif
					$('#single-portfolio-images-container').css({
						background: 'none',
						// reset init height fix for Safari (also working on other browsers). this will also set the inline height based on the first slide's image
						height: $('#single-portfolio-images-container .single-portfolio-slides li.flex-active-slide img').height() + 16 + 'px', 
					}).addClass('auto-height');
						
					
				},
				before: function(slider) {
				},
				after: function(slider) {
					// set a new height based on the next slide
					$('#single-portfolio-images-container, #single-portfolio-images-container.portrait-view').css('height','inherit');
				},
			});
			
		});
		
    	$('#single-portfolio-images-container .slider-prev').on('click', function(){
		    $(this).closest('.slider-set').flexslider('prev');
		    return false;
		});
		$('#single-portfolio-images-container .slider-next').on('click', function(){
		    $(this).closest('.slider-set').flexslider('next');
		    return false;
		});
	    	
	    // Display slider controller on hovered 
	    $('#single-portfolio-images-container').hover(function() {
	    	if($(this).find('.single-portfolio-image').length > 1) {
		    	if(isPortfolioSliderLoaded) { // works only when the slider is loaded
		    		isPortfolioSliderFirstTimeHovered = true; // this is used to prevent the "mousemove" event below continuously firing the handler
			    	$(this).find('.slider-controller').css('display', 'block').stop().animate({ 'opacity' : 1 });
		    	}
	    	}
	    }, function() {
	    	$(this).find('.slider-controller').stop().animate({ 'opacity' : 0 });
	    });
	    // If the mouse cursor is moving on the slider when it is just loaded, display the controller
	    $('#single-portfolio-images-container').mousemove(function() {
	    	if($(this).find('.single-portfolio-image').length > 1) {
				if( ! isPortfolioSliderFirstTimeHovered && isPortfolioSliderLoaded) {
			    	$(this).find('.slider-controller').css('display', 'block').stop().animate({ 'opacity' : 1 });
				}
			}
		});
		
    }
    
	
	
	
	
	/***** Image Slider *****/
	if($('.image-slider-wrapper').length > 0) {
		
		var imageSlider = $('.image-slider-wrapper');
		imageSlider.each(function() {
	
			$(this).imagesLoaded(function() {
			
				$('.image-slider-wrapper').flexslider({
					animation: imageSliderAnimation,
					directionNav: false,
					contolNav: false,
					pauseOnAction: true,
					pauseOnHover: true,
					slideshow: imageSliderAutoAnimated,
					slideshowSpeed: imageSliderAutoAnimatedDelay,
					animationSpeed: imageSliderAnimationSpeed,
					selector: '.image-slider > li',
					initDelay: 2000,
					smoothHeight: true,
					start: function(slider) {
						
						var initFadingSpeed = 800;
						var initDelay = 0;
						// "slide" effect has some different transition to re-define
						if(imageSliderAnimation == 'slide') {
							initFadingSpeed = 1;
							initDelay = 800;
						}
						
						$(slider).find('.image-slider, .flex-viewport')
							.css('visibility', 'visible').stop().animate({
							opacity: 1,
						}, initFadingSpeed);
						
						
						// Hide loading gif
						$(slider).closest('.image-slider-wrapper').css({
							background: 'none',
							// reset init height fix for Safari (also working on other browsers). this will also set the inline height based on the first slide's image
							height: $(slider).closest('.image-slider-wrapper').find('.image-slider li.flex-active-slide img').height() + 16 + 'px', 
						}).addClass('auto-height');
						
						$(slider).closest('.image-slider-root-container').attr('data-loaded', 'true');
						
					},
					before: function(slider) {
					},
					after: function(slider) {
						// set a new height based on the next slide
						$(slider).closest('.image-slider-wrapper').css('height','inherit');
					},
				});
				
			});
			
		});
		
	}
		
	$('.image-slider-root-container .slider-prev').on('click', function(){
	    $(this).closest('.image-slider-root-container').find('.slider-set').flexslider('prev');
	    return false;
	});
	$('.image-slider-root-container .slider-next').on('click', function(){
	    $(this).closest('.image-slider-root-container').find('.slider-set').flexslider('next');
	    return false;
	});
	
	// Display slider controller on hovered 
    $('.image-slider, .slider-controller').hover(function() {
    	var root = $(this).closest('.image-slider-root-container');
    	if($(root).find('.image-slider-item').length > 1) {
	    	if($(root).attr('data-loaded') == 'true') { // works only when the slider is loaded
	    		$(root).attr('data-first-hover', 'true'); // this is used to prevent the "mousemove" event below continuously firing the handler
		    	$(root).find('.slider-controller').css('display', 'block').stop().animate({ 'opacity' : 1 });
	    	}
    	}
    }, function() {
    	var root = $(this).closest('.image-slider-root-container');
    	$(root).find('.slider-controller').stop().animate({ 'opacity' : 0 });
    });
    // If the mouse cursor is moving on the slider when it is just loaded, display the controller
    $('.image-slider, .slider-controller').mousemove(function() {
    	var root = $(this).closest('.image-slider-root-container');
    	if($(root).find('.image-slider-item').length > 1) {
			if($(root).attr('data-first-hover') != 'true'  && $(root).attr('data-loaded') == 'true') {
		    	$(root).find('.slider-controller').css('display', 'block').stop().animate({ 'opacity' : 1 });
			}
		}
	});
    
    
    
    /***** Testimonial Slider *****/
    if($('.testimonial-list').length > 0) {
    	
    	var testimonialAnimation = 'crossfade';
    	var testimonialAnimationDuration = 500;
    	if($('html').hasClass('touch')) {
    		testimonialAnimation = 'fade';
    		testimonialAnimationDuration = 300; 
    	}
    	
        var testimonialList = $('.testimonial-list');
        testimonialList.each(function() {
        	
        	var parent = $(this).closest('.testimonial-wrapper');
                
            $(this).carouFredSel({
                responsive: true,
                swipe: true,
                onCreate: function(data) {
                	// Display the element
            		$(parent).css({
        				overflow : 'inherit',
        				height : 'auto',
    				}).stop().animate({ 'opacity' : 1 });
    				
    				// Apply custom z-index to make the first item's image on top
					var zIndex = 50;
    				$(this).find('.testimonial-item .testimonial-thumbnail').each(function() {
						$(this).css('z-index', zIndex);
						zIndex -= 1;
    				});
    				
                },
                pagination: {
                    container: $(parent).find('.testimonial-bullets'),
                    anchorBuilder: function(nr, item) {
                        return '<a href="#'+nr+'"></a>';
                    }
                },
                scroll: {
                    fx: testimonialAnimation,
                    duration: testimonialAnimationDuration,
                    onBefore: function(data) {
                    	// Reset custom z-index
                    	$(this).find('.testimonial-item .testimonial-thumbnail').each(function() {
                    		
                    		if($('html').hasClass('touch')) {
                    			$(this).stop().animate({ 'opacity': 0 });
                    		} else {
								$(this).css({
									zIndex: '',
									display: 'none',
								});
							}
							
	    				});
	    				
	    				// Apply a new custom z-index to the next item's image that will be displayed
                    	var nextItem = data.items.visible;
                    	
                    	if($('html').hasClass('touch')) {
                    		$(nextItem).find('.testimonial-thumbnail').stop().animate({ 'opacity': 1 });
                    	} else {
	                    	$(nextItem).find('.testimonial-thumbnail').css({
	                    		zIndex: 50,
	                    		display: 'block',
	                		});
                		}
                    	
                    	//console.debug($(data.items.visible).find('p').html());
                    },
                    onAfter: function(data) {
                    	
                    },
                },
                auto: {
                    play: testimonialSliderAutoAnimated,
                    pauseOnHover: 'resume',
                    timeoutDuration: testimonialSliderAutoAnimatedDelay,
                },
            },
	        {
	            transition: !(isAndroid), // if running on Android, set it to "false" for this CSS3 transition, otherwise "true"
	        });
            
        });
    }
    
    
    // Validation Engine
    if ($('form.validate').length > 0) {
        $('form.validate').validationEngine('attach', {
            autoHidePrompt : 'false',
            autoHideDelay : '7000',
            fixed : true,
            scroll : false,
            binded : false,
            promptPosition : 'centerRight'
        });
    }
    // Always initialize contact form "after" Validation Engine plugin
    initContactForm();
    
    /***** Contact Form *****/
    function initContactForm() {
        
        // Submitting contact form
        if ($('form#contact-form').length > 0) {
    
            var contactForm = $('form#contact-form');
            contactForm.submit(function() {
                
                $('#success').css('display', 'none');
                $('#error').css('display', 'none');
                
                if (contactForm.validationEngine('validate')) {
                    
                    $submitButton = $(this).find('input[type="submit"]');
                    $submitButton.removeClass().addClass('gray button disabled');
                    $submitButton.attr('value', 'Submitting...');
                    $submitButton.attr('disabled', 'disabled');
                    
                    $.ajax({
                        type : 'POST',
                        url : 'php/sendmail.php',
                        data : contactForm.serialize(),
                        success : function(result) {
    
                            if (result == 'true') {
                                contactForm.stop().animate({
                                    opacity : '0'
                                }, 400, function() {
                                    contactForm.css('display', 'none');
                                    $('#success').css('display', 'block');
                                    $('#success').stop().animate({
                                        opacity : '1'
                                    }, 900);
                                });
    
                            } else {
                                $('#error').css('display', 'block');
                                $('#error').stop().animate({
                                    opacity : '1'
                                }, 1000);
    
                                alert('Error Message: ' + result);
                            }
    
                        },
                        error : function(xmlHttpRequest, textStatus, errorThrown) {
                            $('#error').css('display', 'block');
                            $('#error').stop().animate({
                                opacity : '1'
                            }, 1000);
    
                            alert(errorThrown);
                        }
                    });
                    return false;
                }
            });
    
        }
    }
	
	// ---------------------------------------------- //
    // Elements / Misc.
    // ---------------------------------------------- //
    
    /***** Google Maps *****/
    function renderGoogleMaps() {
    	
    	if(typeof google !== 'undefined' && typeof google.maps.MapTypeId !== 'undefined') {
    		
	        var elements = $('.google-map');
	        
	        elements.each(function() {
	            
	            var rawlatlng = $(this).attr('data-latlng').split(',');
	            var lat = jQuery.trim(rawlatlng[0]);
	            var lng = jQuery.trim(rawlatlng[1]);
	            var address = $(this).attr('data-address');
	            var displayType = $(this).attr('data-display-type');
	            var zoomLevel = parseInt($(this).attr('data-zoom-level'), 10);
	            $(this).css('height', $(this).attr('data-height'));
	            
	            switch(displayType.toUpperCase()) {
	                case 'ROADMAP' : displayType = google.maps.MapTypeId.ROADMAP; break;
	                case 'SATELLITE' : displayType = google.maps.MapTypeId.SATELLITE; break;
	                case 'HYBRID' : displayType = google.maps.MapTypeId.HYBRID; break;
	                case 'TERRAIN' : displayType = google.maps.MapTypeId.TERRAIN; break;
	                default : displayType = google.maps.MapTypeId.ROADMAP; break;
	            }
	            
	            var geocoder = new google.maps.Geocoder();
	            var latlng = new google.maps.LatLng(lat, lng);
	            var myOptions = {
	                scrollwheel : false,
	                zoom : zoomLevel,
	                center : latlng,
	                mapTypeId : displayType
	            };
	            
	            var map = new google.maps.Map($(this)[0], myOptions);
	            
	            geocoder.geocode({
	                'address' : address,
	                'latLng' : latlng,
	            }, function(results, status) {
	                if (status === google.maps.GeocoderStatus.OK) {
	                    var marker;
	                    if(jQuery.trim(address).length > 0) {
	                        marker = new google.maps.Marker({
	                            map : map,
	                            position : results[0].geometry.location
	                        });
	        
	                        map.setCenter(results[0].geometry.location);
	                    
	                    } else {
	                        marker = new google.maps.Marker({
	                            map : map,
	                            position : latlng
	                        });
	        
	                        marker.setPosition(latlng); map.setCenter(latlng);
	                        
	                    }
	    
	                } else {
	                    window.alert("Geocode was not successful for the following reason: " + status);
	                }
	            });
	            
	        });
	    }
	    
    }
    
    
    
    /***** Fancybox *****/
   
   	if(isAndroid && androidversion <= 4.0) {
   		$('.image-box').fancybox(); // Fancybox's thumbnail helper is not working on older Android, so disable it.
   	} else {
	   	$('.image-box').fancybox({
		    helpers:  {
		        thumbs : {
		            width: 50,
		            height: 50
		        }
		    }
		});
   	}
    
    
    /***** Accordion/Toggle *****/
    var icons = {
        header: 'ui-accordion-header-icon',
        activeHeader: 'ui-accordion-header-icon-active'
    };
    var animateObj = {
        animate: 'easeOutQuint',
        duration: 600,
    };
    
    if ($('.accordion').length > 0) {
        
        $('.accordion').each(function() {
           $(this).accordion({
                autoHeight: false,
                heightStyle: 'content', // jQuery UI 1.10.x
                collapsible: false,
                //icons: icons,
                animate: animateObj,
                active: parseInt($(this).attr('data-active-index')),
	            create: function( event, ui ) {
	            	$(this).css({
	            		height: 'auto',
	            		visibility: 'visible',
            		}).animate({ 'opacity' : 1 });
	            },
           });
        });
        
    }
    
    if ($('.toggle').length > 0) {
        
        $('.toggle').accordion({
            autoHeight: false,
            heightStyle: 'content', // jQuery UI 1.10.x
            //icons: icons,
            collapsible: true,
            animate: animateObj,
            active: false,
            create: function( event, ui ) {
	            	$(this).css({
	            		height: 'auto',
	            		visibility: 'visible',
            		}).animate({ 'opacity' : 1 });
            },
        });
        
        if($('.toggle').hasClass('active')) {
            $('.toggle.active').accordion({
                heightStyle: 'content',
                autoHeight: false,
                //icons: icons,
                collapsible: true,
                animate: animateObj,
                active: 0,
	            create: function( event, ui ) {
	            	$(this).css({
	            		height: 'auto',
	            		visibility: 'visible',
            		}).animate({ 'opacity' : 1 });
	            },
            });
            
            $('body').scrollTop(0);
        }
        
    }
    
    /***** Tabs *****/
    if($('html').hasClass('lt-ie9')) {
        $('.auto').addClass('tabs').removeClass('auto').attr('data-section', 'tabs');
    }
    var tabs = $('.vertical-tabs p.title > a, .tabs p.title > a, .auto p.title > a');
    tabs.click(function() {
        
        // Force hiding any content that contains Google Map
        $(this).parents('.section-container').find('.content').each(function() {
            if($(this).find('.google-map').length > 0) {
                $(this).css('display', 'none');
            }
        });
        
        var map = $(this).parents('section').find('.content').find('.google-map');
        if(map.length > 0) {
            // Re-render Google Map for tab content and display the content
            $(this).parents('section').find('.content').css({'display': 'block', 'width': '100%'});
            renderGoogleMaps();
        }
	});
	
	
	/***** Progress Bar *****/
	if(isAndroid) {
		if (androidversion >= 4.0) {
			animateProgressBar();
		} else {
			
			$('.progress-bar .bar-meter').each(function() {
				$(this).css('width', $(this).attr('data-meter') + '%');
			});
			
		}
	} else {
		animateProgressBar();
	}
	function animateProgressBar() {
		$('.progress-bar').waypoint(function() {
			
			var meter = $(this).find('.bar-meter');
			$(meter).css('width', 0);
	   		$(meter).delay(250).animate({
	   			width: $(meter).attr('data-meter') + '%',
	   		}, 1400, 'easeOutQuint');
	   		
		}, { offset: '85%', triggerOnce: true });
	}
	
    
	// "placeholder" attribute fix for all browsers
    $('[placeholder]').focus(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
        input.removeClass('placeholder');
      }
    }).blur(function() {
      var input = $(this);
      if (input.val() == '' || input.val() == input.attr('placeholder')) {
        input.addClass('placeholder');
        input.val(input.attr('placeholder'));
      }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
      $(this).find('[placeholder]').each(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
        }
      });
    });
    
    
    /***** Mobile Menu *****/
    function initMobileMenu() {
        //var defaultMenuList = $('#root-menu');
        var mobileMenuList = $('<ul />').appendTo($('#mobile-menu .top-bar-section'));
        
        var clonedList = $('#menu-wrapper .main-menu > li').clone();
        clonedList = getGeneratedSubmenu(clonedList);
        clonedList.appendTo(mobileMenuList);
        
    }
    
    // Recursive function for generating submenus
    function getGeneratedSubmenu(list) {
    	//console.debug($('#menu-wrapper .main-menu > li'));
        $(list).each(function() {
            //$(this).append('<li class="divider"></li>');
            
            if($(this).find('ul').length > 0) {
                var submenu = $(this).find('ul');
                
                $(this).addClass('has-dropdown');
                submenu.addClass('dropdown'); 
                
                getGeneratedSubmenu(submenu.find('li'));
            }
        });
        
        return list;
    }
    
    
});