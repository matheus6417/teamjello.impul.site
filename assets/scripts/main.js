(function () {

    var menu = {};
    var navbar = {};
    var stars = {};
    var smileface = {};
    navbar.init = function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 150) {
                $(".navigation").addClass("is-sticky");

            } else {
                $(".navigation").removeClass("is-sticky");

            }
        });
    };
    stars.init = function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 500) {
                $("#hero-stars").css("position", "fixed");
                $("#hero-stars").css("top", "auto");
                $("#hero-stars").css("bottom", "0");

            } else {
                $("#hero-stars").css("position", "absolute");

                $("#hero-stars").css("top", "0");
                $("#hero-stars").css("bottom", "auto");
            }
        });
    };
    smileface.init = function () {
        "use strict";

        var node = document.getElementsByClassName("js-lookAtMouse");
        var box = node[0];
        var scale = 1;
        var w = window.innerWidth;
        var h = window.innerHeight;

        var xRatio = void 0,
            yRatio = void 0,
            xNormalize = void 0,
            yNormalize = void 0;

        document.addEventListener("mousemove", function (e) {
            xRatio = e.clientX / w - .5;
            yRatio = e.clientY / h - .5;
            xNormalize = 45 * xRatio;
            yNormalize = -45 * yRatio;
            box.style.transform = "perspective(900px) rotateX(" + yNormalize + "deg) rotateY(" + xNormalize + "deg) translateZ(64px)";
        });
    };
    menu.init = function () {

        var $menu = $('.menu');
        var $navbar = $('.navigation');
        var $btn = $('.js-btn');
        var $lines = $btn.find('.line');
        // var $line1 = $btn.find('.burger-menu-line-1');
        // var $line2 = $btn.find('.burger-menu-line-2');
        // var $line3 = $btn.find('.burger-menu-line-3');






        // Toggle the menu
        $btn.click(function (e) {
            e.preventDefault();

            var self = $(this);
            var isOpen = self.hasClass('is-open') ? true : false;

            if (!isOpen) {
                menu.btnOpen($btn);
                menu.open($menu, $navbar);

            } else {
                menu.btnClose($btn);
                menu.close($menu, $navbar);
            }
        });

        menu.open = function ($menu, $navbar) {

            $menu.addClass('is-open');
            $navbar.addClass('is-open');
        };

        menu.close = function ($menu, $navbar) {

            $navbar.removeClass('is-open');
            $menu.removeClass('is-open');
        };

        menu.btnOpen = function ($btn) {
            var $lines = $btn.find('.line');

            $lines.each(function (i) {
                var self = $(this);

                self
                    .velocity({
                        marginTop: "0"
                    }, {
                        duration: 225,
                        easing: "easeOutExpo",
                        queue: false
                    })
                    .velocity({
                        rotateZ: i == 0 ? "45deg" : "-45deg"
                    }, {
                        duration: 225,
                        delay: 100,
                        easing: "easeInOutExpo",
                        queue: false
                    });
            });

            $btn.addClass('is-open');
        };

        menu.btnClose = function ($btn) {
            var $lines = $btn.find('.line');

            $lines.each(function (i) {
                var self = $(this);

                self
                    .velocity({
                        rotateZ: "0deg"
                    }, {
                        duration: 175,
                        easing: "easeInOutExpo",
                        queue: false
                    })
                    .velocity({
                        marginTop: self.data('marginTop')
                    }, {
                        duration: 150,
                        delay: 225,
                        easing: "easeInOutSine",
                        queue: false
                    });
            });

            $btn.removeClass('is-open');
        };

    };




    $(document).ready(function () {
        navbar.init();
        menu.init();
        stars.init();
        smileface.init();

    });

})();