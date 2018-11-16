(function () {

    var menu = {};
    var navbar = {};
    var stars = {};
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

    // stars.init = function () {


    //     var amount = 200;
    //     var sky = $('.sky');

    //     for (var i = 0; i < amount; i++) {
    //         var s = $('<div class="star-blink"><div></div></div>');
    //         s.css({
    //             'top': Math.random() * 100 + '%',
    //             'left': Math.random() * 100 + '%',
    //             'animation': 'blinkAfter 20s infinite ' + Math.random() * 200 + 's ease-out',
    //             'width': Math.random() * 10 + 7 + 'px',
    //             'height': Math.random() * 10 + 7 + 'px',
    //             'opacity': Math.random() * 5 / 10 + 0.5
    //         });
    //         if (i % 8 === 0) {
    //             s.addClass('red');
    //         } else if (i % 10 === 6) {
    //             s.addClass('blue');
    //         }
    //         sky.append(s);
    //     }
    // };

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
    });

})();