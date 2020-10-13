(function($) {
	// 'use strict';
	$(document).ready(function(){

	    // slicknav js
		$('#menu').slicknav();

        // 01. Sticky menu
        var sticky_menu = $('#sticky-header');
        var pos = sticky_menu.position();
        if (sticky_menu.length) {
            var windowpos = sticky_menu.top;
            var win = $(window);
            win.on('scroll', function() {
                var windowpos = win.scrollTop();
                if (windowpos > pos.top) {
                    sticky_menu.addClass('sticky');
                } else {
                    sticky_menu.removeClass('sticky');
                }
            });
        } //End Sticky Menu



        // Mobile Sticky Menu
        // var sticky_menu = $('.slicknav_menu');
        // var pos = sticky_menu.position();
        // if (sticky_menu.length) {
        //     var windowpos = sticky_menu.top;
        //     var win = $(window);
        //     win.on('scroll', function() {
        //         var windowpos = win.scrollTop();
        //         if (windowpos > pos.top) {
        //             sticky_menu.addClass('sticky');
        //         } else {
        //             sticky_menu.removeClass('sticky');
        //         }
        //     });
        // } //End Sticky Menu

        //===== NiceSelect js
    
        $('select').niceSelect();


		//MAIN SLIDER (OWL CAROUSEL)

        var dragging = true;
        var owlElementID = "#owl-main";

        function fadeInReset() {
            if (!dragging) {
                $(owlElementID + " .caption .fadeIn-1, " + owlElementID + " .caption .fadeIn-2, " + owlElementID + " .caption .fadeIn-3").stop().delay(800).animate({ opacity: 0 }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(owlElementID + " .caption .fadeIn-1, " + owlElementID + " .caption .fadeIn-2, " + owlElementID + " .caption .fadeIn-3").css({ opacity: 0 });
            }
        }

        function fadeInDownReset() {
            if (!dragging) {
                $(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3").stop().delay(800).animate({ opacity: 0, top: "-15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3").css({ opacity: 0, top: "-15px" });
            }
        }

        function fadeInUpReset() {
            if (!dragging) {
                $(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3").stop().delay(800).animate({ opacity: 0, top: "15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3").css({ opacity: 0, top: "15px" });
            }
        }

        function fadeInLeftReset() {
            if (!dragging) {
                $(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3").stop().delay(800).animate({ opacity: 0, left: "15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3").css({ opacity: 0, left: "15px" });
            }
        }

        function fadeInRightReset() {
            if (!dragging) {
                $(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3").stop().delay(800).animate({ opacity: 0, left: "-15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3").css({ opacity: 0, left: "-15px" });
            }
        }

        function fadeIn() {
            $(owlElementID + " .active .caption .fadeIn-1").stop().delay(500).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeIn-2").stop().delay(700).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeIn-3").stop().delay(1000).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
        }

        function fadeInDown() {
            $(owlElementID + " .active .caption .fadeInDown-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInDown-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInDown-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        }

        function fadeInUp() {
            $(owlElementID + " .active .caption .fadeInUp-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInUp-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInUp-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        }

        function fadeInLeft() {
            $(owlElementID + " .active .caption .fadeInLeft-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInLeft-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInLeft-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        }

        function fadeInRight() {
            $(owlElementID + " .active .caption .fadeInRight-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInRight-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInRight-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        }

        $(owlElementID).owlCarousel({
            autoPlay: 5000,
            stopOnHover: true,
            navigation: true,
            pagination: true,
            singleItem: true,
            addClassActive: true,
            transitionStyle: "fade",
            navigationText: ["<i class='icon fa fa-angle-left'></i>", "<i class='icon fa fa-angle-right'></i>"],

            afterInit: function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },
            afterMove: function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },
            afterUpdate: function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },

            startDragging: function() {
                dragging = true;
            },
            afterAction: function() {
                fadeInReset();
                fadeInDownReset();
                fadeInUpReset();
                fadeInLeftReset();
                fadeInRightReset();
                dragging = false;
            }

        }); //End owlCarousel()



        // MagnificPopup video view
        $('.popup-video').magnificPopup({
            type: 'iframe',
            gallery: {
                enabled: true
            }
        });


        //===== client slide slick slider
        $('.client-slide').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
        });

         //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function(event) {
            if($(this).scrollTop() > 600){
                $('#backtotop').fadeIn(200)
            } else{
                $('#backtotop').fadeOut(200)
            }
        });
        
        
        //Animate the scroll to yop
        $('#backtotop').on('click', function(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });

        // counterup css
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        //MixiTup jQurey
        var containerEl = document.querySelector('.portfolio');
          var mixer = mixitup(containerEl, {
             controls: {
                toggleLogic: 'and'
             },
             animation: {
                effects: 'fade',
                duration: 200,
                nudge: false,
                reverseOut: false
             }
        });

        //Skill Bar
        $('#bar1').barfiller({
          barColor: "#92CB40",
          duration: 2000,
        });
        $('#bar2').barfiller({
          barColor: "#92CB40",
          duration: 2200,
        });
        $('#bar3').barfiller({
          barColor: "#92CB40",
          duration: 2400,
        });
        $('#bar4').barfiller({
          barColor: "#92CB40",
          duration: 2600,
        });











	}); //document.ready
})(jQuery);