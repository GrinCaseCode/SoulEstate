$(document).ready(function() {

	jQuery('.tabs-wrap').each(function() {
		const tabsWrap = this;
		const menu = tabsWrap.querySelector(".tabs");
		const liTab = tabsWrap.querySelector(".firstActive");
		menu.addEventListener("click", (event) => {
			liTab.classList.remove("firstActive")
		  if (event.target.classList.contains("tabs__item")) {
			menu.style.setProperty(
			  "--underline-width",
			  `${event.target.offsetWidth}px`
			);
			menu.style.setProperty(
			  "--underline-offset-x",
			  `${event.target.offsetLeft}px`
			);
		  }
		});

}); 

{
	if ($(window).width() < 992) { 
		$(".footer__menu__haschild > a").click(function(e) {
			e.preventDefault();
			$(this).toggleClass("active");
			$(this).next(".footer__menu__dropdown").slideToggle(200);
		}); 

	}
}

$("*[data-video-id]").modalVideo();

	/*animate*/
	new WOW().init();

	setTimeout(function () {
		$(".cookies").fadeIn(200);
	  }, 3000); 
	  $(".cookies .btn-main").click(function(e) {
		e.preventDefault();
		$(".cookies").fadeOut(200);
	});

	/*form validation*/
	$("form .btn-main").click(function(e) {
		e.preventDefault();
		$(this).parents("form").find(".item-form").addClass("error-input");
	});

	//thanks fancybox
	$(".modal-block form .btn-main").click(function(e) {
		e.preventDefault();
		$.fancybox.open('#modal-thanks');
	});

	$("#modal-thanks .btn-main").click(function(e) {
		e.preventDefault();
		$.fancybox.close();
	});

	$(".btn-like").click(function() {
		$(this).toggleClass("active");
	});

	$(".btn-more-about").click(function(e) {
		e.preventDefault();
		if ($(".about-catalog__hidden").is(":hidden")) {
			$(".about-catalog__hidden").slideDown(200);
			$(this).html("Скрыть");
		} else {
			$(".about-catalog__hidden").slideUp(200);
			$(this).html("Читать еще");
		}
	});


//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
  if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }
  
});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".sandwich").click(function() {
		$(this).toggleClass("active");
		if ($(".menu").is(":hidden")) {
			$(".menu").slideDown(200);
			$(".menu-overlay").fadeIn(200);
			$(".header").addClass("active");
		} else {
			$(".menu").slideUp(200);
			$(".menu-overlay").fadeOut(200);
			$(".header").removeClass("active");
		}
	});

	$(".menu-overlay").click(function() {
		$(".menu").slideUp(200);
		$(".sandwich").removeClass("active");
		$(".menu-overlay").fadeOut(200);
		$(".header").removeClass("active");
	});

	{
		if ($(window).width() < 992) { 
			$(".menu__haschild > a").click(function(e) {
				e.preventDefault();
				$(this).parent().siblings().removeClass("active");
				$(this).parent().siblings().find(".menu__dropdown").slideUp(0);
				
				if ($(this).siblings(".menu__dropdown").is(":hidden")) {
					$(this).parent().addClass("active");
					$(this).siblings(".menu__dropdown").slideDown(200);
				} else {
					$(this).parent().removeClass("active");
					$(this).siblings(".menu__dropdown").slideUp(200);
				}
				
			});
		}
	}

	$(".button-filter").click(function(e) {
		e.preventDefault();
		if ($(".hidden-filter").is(":hidden")) {
			$(".filter-main").addClass("active");
			$(".hidden-filter").slideDown(200);
			$(this).html("Скрыть");
			$(".billbord").addClass("active");
		} else {
			$(".filter-main").removeClass("active");
			$(".hidden-filter").slideUp(200);
			$(".billbord").removeClass("active");
			$(this).html("Все фильтры");
		}
	});


	//слайдер

	$('.slider-three').slick({
		arrows: true,
		dots: false,
		infinite: false,
		swipe: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="40" transform="matrix(-1 0 0 1 80 0)" fill="#F6F6F6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M29 37.1133L24 40L29 42.8868V40.5H56V39.5H29V37.1133Z" fill="#2A2A2A"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="40" fill="#F6F6F6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M51 37.1133L56 40L51 42.8868V40.5H24V39.5H51V37.1133Z" fill="#2A2A2A"/></svg><div/>',
		responsive: [
			{
				breakpoint: 1200,
				arrows: false,
				settings: 'unslick'
			}
			]
		});

	$('.slider-two').slick({
		arrows: true,
		dots: false,
		infinite: false,
		swipe: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="40" transform="matrix(-1 0 0 1 80 0)" fill="#F6F6F6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M29 37.1133L24 40L29 42.8868V40.5H56V39.5H29V37.1133Z" fill="#2A2A2A"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="40" fill="#F6F6F6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M51 37.1133L56 40L51 42.8868V40.5H24V39.5H51V37.1133Z" fill="#2A2A2A"/></svg><div/>',
		responsive: [
			{
				breakpoint: 1200,
				arrows: false,
				settings: 'unslick'
			}
			]
		});

	$('.item-catalog__slider').slick({
		arrows: false,
		dots: true,
		infinite: true,
		touchThreshold: 100,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
	});

	$('.slider-partners').slick({
		arrows: false,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        cssEase:'linear',
		variableWidth: true,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
	});

	$('.slider-for').slick({
		arrows: false,
		dots: false,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-nav',
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		responsive: [
			{
				breakpoint: 767,
				settings: {
					dots: true,
				}
			}
			]
		});

	$('.slider-nav').slick({
		arrows: false,
		dots: false,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		touchThreshold: 1000,
		focusOnSelect: true,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			}
			]
		});

		$('.slider-photos-card').slick({
			arrows: false,
			dots: true,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			touchThreshold: 1000,
			focusOnSelect: true,
			prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
			nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
		});

		$('.slider-news').slick({
			arrows: true,
			dots: false,
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: '<div class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="40" transform="matrix(-1 0 0 1 80 0)" fill="#F6F6F6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M29 37.1133L24 40L29 42.8868V40.5H56V39.5H29V37.1133Z" fill="#2A2A2A"/></svg><div/>',
			nextArrow: '<div class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="40" fill="#F6F6F6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M51 37.1133L56 40L51 42.8868V40.5H24V39.5H51V37.1133Z" fill="#2A2A2A"/></svg><div/>',
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
						arrows: false,
						dots: true,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						arrows: false,
						dots: true,
						adaptiveHeight: true
					}
				}
				]
			});

			$('.slider-images').slick({
				arrows: true,
				dots: false,
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				prevArrow: '<div class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="40" transform="matrix(-1 0 0 1 80 0)" fill="#F6F6F6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M29 37.1133L24 40L29 42.8868V40.5H56V39.5H29V37.1133Z" fill="#2A2A2A"/></svg><div/>',
				nextArrow: '<div class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="40" fill="#F6F6F6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M51 37.1133L56 40L51 42.8868V40.5H24V39.5H51V37.1133Z" fill="#2A2A2A"/></svg><div/>',
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							arrows: false,
							dots: true,
						}
					}
					]
				});

				$('.slider-gallery').slick({
					arrows: true,
					dots: false,
					infinite: false,
					slidesToShow: 2,
					slidesToScroll: 1,
					prevArrow: '<div class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="40" transform="matrix(-1 0 0 1 80 0)" fill="#F6F6F6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M29 37.1133L24 40L29 42.8868V40.5H56V39.5H29V37.1133Z" fill="#2A2A2A"/></svg><div/>',
					nextArrow: '<div class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="40" fill="#F6F6F6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M51 37.1133L56 40L51 42.8868V40.5H24V39.5H51V37.1133Z" fill="#2A2A2A"/></svg><div/>',
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 1,
								arrows: false,
								dots: true,
							}
						}
						]
					});

	


	jQuery('.tabs-wrap').each(function() {
		var currentTab = $(this);
		var initalTextTab = currentTab.find(".active a").html();
		currentTab.find(".btn-tab").html(initalTextTab);
}); 
$('.btn-tab').click(function() {
	$(this).toggleClass("active");
	$(this).siblings(".tabs").slideToggle(200);
	$('.tabs li a').click(function(event) {
		$(this).parent().parent().slideUp(200);
	}); 
}); 



{
	if ($(window).width() < 1200 && $(window).width() > 767) { 
		$(".slider-catalog").mCustomScrollbar({
			axis:"x" ,
			contentTouchScroll: false,
			mouseWheel:{ enable: 0 }
	  });
	}
}

	$('.tabs li a').click(function(event) {
		event.preventDefault();
		var textTab = $(this).html();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parents(".catalog").find(".tab-pane").removeClass("active");
		var selectTab = $(this).attr("href");
		$(selectTab).addClass("active");
		$(this).parents(".catalog").find('.slider-three').slick('setPosition');
		$(this).parents(".catalog").find('.slider-two').slick('setPosition');
		$(this).parents(".catalog").find(".item-catalog__slider").slick('setPosition');
		$(this).parents(".catalog").find(".slider-images").slick('setPosition');
		$(this).parent().parent().siblings(".btn-tab").html(textTab);
		$(this).parent().parent().siblings(".btn-tab").removeClass("active");

		
	}); 



	$('.unit-help').click(function(event) {
		event.preventDefault();
		$(this).parents().find(".unit-help").removeClass('active');
		$(this).addClass('active');
		$(".help .tab-pane").removeClass("active");
		var selectTab2 = $(this).attr("href");
		$(selectTab2).addClass("active");
	}); 

	

	$(".btn-main_more").click(function(e) {
		e.preventDefault();
		
		setTimeout(function () {
			$(".item-catalog__slider").slick('setPosition');
		  }, 300); 

		  $(this).parent().find(".slider-catalog > li:not(:visible):lt(3)").slideDown(0);
		  var hidden =  $(this).parent().find('.slider-catalog li:hidden').length;
		 
		  if (hidden == 0){
			$(this).remove();
		 }
	
	});


	$(".btn-main_collections").click(function(e) {
		e.preventDefault();

		$(this).parent().find(".row_main > div:not(:visible):lt(3)").slideDown(0);
		var hiddenCollection =  $(this).parent().find('.row_main > div:hidden').length - 1;
	   
		if (hiddenCollection == 0){
		  $(this).remove();
	   }
		

	});

	/*new*/
	$(".btn-main_news").click(function(e) {
		e.preventDefault();

		$(this).parent().find(".row_main > div:not(:visible):lt(1)").slideDown(0);
		var hiddenCollection =  $(this).parent().find('.row_main > div:hidden').length;
	   
		if (hiddenCollection == 0){
		  $(this).remove();
	   }
		
	});

	$(".input-phone").mask("+7 (999) 999-99-99");


	$('.item-form select').select2({
		closeOnSelect : true,
		allowClear: false,
		containerCssClass: "test",
		tags: true,
	});
	
	$('.item-form_multiple select').select2({
		closeOnSelect : false,
		allowClear: false,
		containerCssClass: "test",
		tags: true,
		theme: "custom-option-select"
	});

	$('.btn-catalog').click(function(e) {
		e.preventDefault();
		$(this).addClass("hide");
		$(this).siblings('.btn-catalog').removeClass("hide");
		$(".tab-pane-catalog").fadeOut(0);
		var selectTab2 = $(this).attr("href");
		$(selectTab2).fadeIn(200);
	}); 

	$('.tabs-card li a').click(function(e) {
		e.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane-card").fadeOut(0);
		var selectTab3 = $(this).attr("href");
		$(selectTab3).fadeIn(200);
		$('.slider-for').slick('setPosition');
		$('.slider-nav').slick('setPosition');
	});

	$('.tabs-links_tabs li a').click(function(e) {
		e.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parents(".tabs-links_tabs").siblings().find(".tab-pane-link").fadeOut(0);
		var selectTab4 = $(this).attr("href");
		$(selectTab4).fadeIn(200);
	});

	$('.name-infrastructure').click(function(e) {
		e.preventDefault();
		$(this).parent().siblings().find(".name-infrastructure").removeClass('active');
		$(this).parent().siblings().find("ul").slideUp(100);
		$(this).toggleClass('active');
		$(this).siblings("ul").slideToggle(200);
	});
	
	$('.btn-prices').click(function(e) {
		e.preventDefault();
		$(".modal-price").fadeToggle(200);
	});
	$('.modal-price__close').click(function(e) {
		e.preventDefault();
		$(".modal-price").fadeOut(200);
	});

	$(".btn-more-features").click(function(e) {
		e.preventDefault();
		$(this).parent().find(".list-features > li:not(:visible)").slideDown(0);
		$(this).remove();
		
	});


	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	$(".fancybox-image, .fancybox-main").fancybox({
		beforeShow : function(){
		  $(".fancybox-wrap").addClass("fancybox-main");
		  
		}
	  });


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
  /*! npm.im/object-fit-images 3.2.4 */
  var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();
