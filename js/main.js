$(function () {
	$(".js-works").each(function () {
		var jWorks = $(this);

		$("img", jWorks).each(function () {
			var img = $(this);

			img.imagesLoaded(function () {
				var imgClone = img.clone();
				img.after(imgClone);
				imgClone = imgClone.addClass("gs").desaturate({
					iefix: false
				});
				imgClone.hover(function () {
					imgClone.animate({
						opacity: 0
					}, 200);
				}, function () {
					imgClone.animate({
						opacity: 1
					}, 200);
				});
			});
		});

		jWorks.imagesLoaded(function () {
			$("#loader").fadeOut(2300);

			$("ul", jWorks).masonry({
				itemSelector: ".js-works li",
				columnWidth: 250
			});

			$("li", jWorks).each(function () {
				var li = $(this);
				var link = $("> a", li);
				var txt = $(".txt", li);

				link.on("click", function (event) {

					event.preventDefault();

					txt.fadeIn(200);
				});

				li.on("mouseleave", function () {
					txt.fadeOut(200);
				});
			});





		});
	});


	$(".js-slogan").each(function () {
		var jSlogan = $(this);
		var pSet = $("p", jSlogan);

		pSet.filter(":gt(0)").addClass("right").show();

		var activeIndex = 0;

		var transitionDuration = parseInt(parseFloat(pSet.eq(0).find("strong").css("transition-duration")) * 1000, 10);
		var delay = 5000; // changing slides' delay

		var changeSlide = function () {
			var pCurrent = pSet.eq(activeIndex);
			if (activeIndex === pSet.length - 1) {
				activeIndex = 0;
			} else {
				activeIndex++;
			}
			var pNext = pSet.eq(activeIndex);

			pCurrent.addClass("left");
			pNext.removeClass("right");

			setTimeout(function () {
				pCurrent.removeClass("left").addClass("right");
			}, transitionDuration);

			changeSlideTimeout = setTimeout(changeSlide, delay);
		};

		var changeSlideTimeout = setTimeout(changeSlide, delay);
	});

	$(".js-gray_section").append($("#slogan_section"), $("#about_section"), $("#contacts_section"));
	$("#about_section, #contacts_section").hide();

	$(".js-header_links").each(function () {
		var links = $(this);
		var aSet = $("a", links);

		var blockActive = $("#slogan_section");

		var shadow = $("#gray_section_sh");

		aSet.on("click", function (event) {
			event.preventDefault();

			var link = $(this);

			if (link.hasClass("active")) {
				return;
			}

			var blockNext;

			aSet.removeClass("active");

			$("#gray_section").height(blockActive.outerHeight());

			if (link.data("friend") === "works_section") {
				blockNext = $("#slogan_section");

				setTimeout(function () {
					$("html, body").animate({
						scrollTop: $("#" + link.data("friend")).offset().top
					}, 500);
				}, 300);

				shadow.fadeOut(150);
			} else {
				link.addClass("active");
				blockNext = $("#" + link.data("friend"));
				shadow.fadeIn(150);
			}

			blockActive.add(blockNext).css({
				position: "absolute",
				left: 0,
				width: "100%"
			});

			if (blockNext.index() < blockActive.index()) {
				blockActive.css({
					top: "0%"
				}).animate({
					top: "100%"
				});
				blockNext.css({
					top: -blockNext.outerHeight()
				}).show().animate({
					top: 0
				});
			} else {
				blockActive.css({
					top: 0
				}).animate({
					top: -blockActive.outerHeight()
				});
				blockNext.css({
					top: "100%"
				}).show().animate({
					top: "0%"
				});
			}
			$("#gray_section").animate({
				height: blockNext.outerHeight()
			});
			blockActive = blockNext;
		});
	});
});
