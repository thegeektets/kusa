var DA = {};
DA.avaliablePaths  = [];
DA.degree = null;
DA.current = null;
DA.slideFunction = function() {};
DA.fadeFunction = function() {};
DA.animating = false;

DA.init = function() {
    $(window).load(function(){
		$('.work').delay(0).fadeIn(300);
        $('#qLbar').delay(800).fadeOut(500, 'easeInOutExpo');
		$('.loader').delay(1000).fadeOut(500, 'easeInOutExpo', function(){$('nav').topZIndex();});
        
	    setTimeout(function(){
            window.scrollTo(0, 1);
        }, 0);
    });
    $('section').each(function(){
        DA.avaliablePaths.push($(this).attr("class").replace('project ', ''));
    });
    $('.work ul li').hover(function() {
        $(this).find('img.pic').fadeIn(200);
    }, function(){
        $(this).find('img.pic').fadeOut(200);
    });

    $('.tip').hover(function(){
        $('.tooltip', this).fadeIn($.browser.msie ? 0 : 200);
    },function(){
        $('.tooltip', this).fadeOut($.browser.msie ? 0 : 200);
    });

    $.address.change(DA.handleAddress);

    $('.contact .sub a').hover( function(){
        $('.contact .sub a .over').fadeIn(150);
    },  function(){
        $('.contact .sub a .over').fadeOut(150);
    });


    // fix js animations init
    $.address.init(function(){
        $('section').css('visibility', 'hidden');
    });
    
    DA.slideFunction = Modernizr.csstransitions ? DA.slideTo : DA.slideToJs;
    DA.fadeFunction = Modernizr.cssanimations && !$.browser.msie && !$.browser.opera ? DA.fadeTo : DA.fadeToJs;

    $("label").inFieldLabels({fadeOpacity:0, fadeDuration:250});
    
    $(window).resize(DA.updateBG);
    
    DA.clearErrors();
    
    $('.register-btn').click(function(){
        DA.sendMessage();
        return false;
    });

    $('a.ok').click(function(){
        DA.clearErrors(true);        
        return false;
    });
};

DA.validAddress = function(address) {
    return $.inArray(address, DA.avaliablePaths) !== -1;
};

DA.handleAddress = function(event) {
    if (DA.animating) return false;
    var address = event.pathNames.join('-');
    if (!DA.validAddress(address)) {
        $.address.value('/work');
        return;
    }
    DA.updateNav(event.pathNames[0]);
    DA.slideFunction(address, event.pathNames[1]);
    DA.toggleNavArrows(address, event.pathNames[1]);
    if (event.pathNames[0] === 'project'){
        DA.loadProject(event.pathNames[1]);
    }
    DA.updateBG();
    DA.fadeFunction(address);    
};

DA.updateNav = function(page) {
    page = page === 'project' ? 'work' : page;
    $('.nav li span').hide();
    $('a.' + page + '-btn').siblings('span').show();
};

DA.removeClass = function(elem, cls) {
    elem.removeClass('animate-left')
        .removeClass('animate-right')
        .removeClass('animate-center')
        .addClass(cls);
};

DA.slideTo = function(page) {
    $('section').css('visibility', 'visible');
    DA.animating = true;
    $('.' + page).show();
    $('.bar-' + page).show();
    
    setTimeout(function(){
        DA.removeClass($('.' + page), 'animate-center');
        setTimeout(function(){
            DA.removeClass($('.bar-' + page), 'animate-center');
        }, 60);
    }, 10);   
    
    DA.removeClass($('.' + page).prevAll('section'), 'animate-left');    
    DA.removeClass($('.' + page).nextAll('section'), 'animate-right');
    
    DA.removeClass($('.bar-' + page).prevAll('.bar-text'), 'animate-left');    
    DA.removeClass($('.bar-' + page).nextAll('.bar-text'), 'animate-right');
    
    setTimeout(function(){
        $('.' + page).prevAll('section').hide();
        $('.' + page).nextAll('section').hide();
        
        setTimeout(function(){
            $('.bar-' + page).prevAll('.bar-text').hide();
            $('.bar-' + page).nextAll('.bar-text').hide();
        }, 60);
        DA.animating = false;
    }, 940);    
};

DA.slideToJs = function(page) {
    DA.animating = true;
    $('.' + page).css('visibility', 'visible').show().animate({'left':'0%'}, 1000, 'easeInOutQuart');
    $('.' + page).prevAll('section').animate({'left':'-100%'}, 1000, 'easeInOutQuart', function(){$(this).css('visibility', 'visible').hide();DA.animating = false;});
    $('.' + page).nextAll('section').animate({'left':'100%'}, 1000, 'easeInOutQuart', function(){$(this).css('visibility', 'visible').hide();DA.animating = false;});
    
    $('.bar-' + page).delay(60).show().animate({'left':'0%'}, 1000, 'easeInOutQuart');
    $('.bar-' + page).delay(60).prevAll('.bar-text').animate({'left':'-120%'}, 1000, 'easeInOutQuart', function(){$(this).hide();DA.animating = false;});
    $('.bar-' + page).delay(60).nextAll('.bar-text').animate({'left':'120%'}, 1000, 'easeInOutQuart', function(){$(this).hide();DA.animating = false;});

};

DA.toggleNavArrows = function(page, project) {
    if (project) {
        $('.prev').show().animate({'margin-left':'65px'}, 800, 'easeInOutQuart');
        $('.next').show().animate({'margin-left':'-65px'}, 800, 'easeInOutQuart');
        $('.back-btn').show().animate({'margin-left':'-65px'}, 800, 'easeInOutQuart');
        var prev = $('.' + page).prev().attr("data-project-name");
        var next = $('.' + page).next().attr("data-project-name");
        if (prev) {
            $(".prev-btn").removeClass('last-btn').attr("href", "#/project/" + prev);
        } else {
            $(".prev-btn").addClass('last-btn').attr("href", "javascript:;");
        }
        if (next) {
            $(".next-btn").removeClass('last-btn').attr("href", "#/project/" + next);
        } else {
            $(".next-btn").addClass('last-btn').attr("href", "javascript:;");
        }
    } else {        
        $('.prev').animate({'margin-left':'0px'}, 800, 'easeInOutQuart', function() {$(this).hide();});
        $('.next').animate({'margin-left':'0px'}, 800, 'easeInOutQuart', function() {$(this).hide();});
        $('.back-btn').animate({'margin-left':'0px'}, 800, 'easeInOutQuart', function() {$(this).hide();});
    }
};

DA.updateBG = function() {
    var max = -1;
    $('section').each(function(){
        var h = $(this).height();
        if (h > max) max = h;
    });
    var winh = $(window).height() - 370;
//    console.log(max + ' ' + winh);
    var page = $.address.pathNames();
    page = page[0];
    if (max < winh) {
        max = winh;
    }
    if(page !== 'project') {
        if (max < 400) {
            max = 400;
        }
    }
    $('.blur-bg').css('height', max + 30 + 'px');
};

DA.loadProject = function(project) {
    $.get('project_details.php', {project: project}, function(response){
        try {
            var imgs = '';
            $.each(response.images, function(k, v){
                imgs += '<div class="image"><img src="' + v + '" /></div>\n';
            });        
            imgs += '<p class="back-top"><a href="#"></a> </p>';
            $('.project-' + project + ' .images').html(imgs);
            $('.back-top').click(function(){
                $('html, body').animate({scrollTop: 0}, 1000, "easeInOutExpo");
                return false;
            });
            setTimeout(DA.updateBG, 100);
        } catch (e) { };
    }, 'json');
    
};

DA.fadeToJs = function(page) {
    var $img = $('img.fade');
    var $new_img = $('<img>').attr("src", $('.' + page).attr("data-flipper")).addClass('fade').css('z-index', '1').hide();
    $img.after($new_img);
    $img.delay(200).fadeOut(400, function(){
        $new_img.css('z-index', '');
        $img.remove();
    });
    $new_img.fadeIn(600);
};

DA.fadeTo = function (page) {
    if (DA.degree === null) {
        $('img.fade').remove();
        DA.degree = 0;
        DA.current = $('.' + page).index();
        $('.flipper .front').css("background-image", "url(" + $('.' + page).attr("data-flipper") + ")").addClass('current');
    } else {        
        var direction = DA.current - $('.' + page).index() > 0 ? 180 : -180;
        DA.degree += direction;
        DA.current = $('.' + page).index();
        $('.flipper').css({transform:'rotateY(' + DA.degree + 'deg)'});
        var $back = $('.sides').not('.current');
        $('.current').removeClass('current');
        $back.css("background-image", "url(" + $('.' + page).attr("data-flipper") + ")").addClass('current');
    }
};

DA.clearErrors = function(form) {
    $('.note').hide();
    if (form) {
        if (Modernizr.cssanimations && !$.browser.msie && !$.browser.opera) {
            $('.form-flipper').css({transform:'rotateY(0deg)'});
        } else {
            $('.form-front').fadeIn(500);
        }
        $('#register-form input, #register-form textarea').each(function(){
            $(this).val('').blur();
        });
    }
};

DA.sendMessage = function() {
    if ($('.sending').length) {
        return false;
    }
    DA.clearErrors();
    var data = {};
    $.each($('form').serializeArray(), function(key, value){
        data[value.name] = value.value;
    });
    $('.register-btn').addClass('sending');
    $.post('contact_us.php', {data: data}, function(response){
        console.log(response);
        if(response.success) {
            if (Modernizr.cssanimations && !$.browser.msie && !$.browser.opera) {
                $('.form-flipper').css({transform:'rotateY(180deg)'});
            } else {
                $('.form-front').fadeOut(500);
                $('.form-fade').fadeIn(300);
            }
            setTimeout(function(){
                $('.register-btn').removeClass('sending');
            }, 500);
            return;
        }
        $('.register-btn').removeClass('sending');
        if (response.errors) {
            $.each(response.errors, function(key, value) {
                $("span[for=" + key + "]").show();
                $("span[for=" + key + "] .err-msg").html(value);
            });
            return;
        }
        alert('Unknown error has occurred. Please try again.');
    }, 'json');
};

$(DA.init);
