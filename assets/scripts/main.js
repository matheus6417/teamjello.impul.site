(function () {

    var menu = {};
    var navbar = {};
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
    statusbar.init = function () {
        (function (canvas) {
            window.requestAnimFrame = (function (callback) {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame || function (callback) {
                        window.setTimeout(callback, 1000 / 30);
                    };
            })();

            var context = canvas.getContext('2d'),
                sizes = ['micro', 'mini', 'medium', 'big', 'max'],
                elements = [],
                max_bright = 1,
                min_bright = .2;

            /* LOGICS */
            generate(1111, 1);
            spark(399);

            /* FUNCTIONS */
            function generate(starsCount, opacity) {
                for (var i = 0; i < starsCount; i++) {
                    var x = randomInt(2, canvas.offsetWidth - 2),
                        y = randomInt(2, canvas.offsetHeight - 2),
                        size = sizes[randomInt(0, sizes.length - 1)];

                    elements.push(star(x, y, size, opacity));
                }
            }

            function spark(numberOfStarsToAnimate) {
                for (var i = 0; i < numberOfStarsToAnimate; i++) {
                    var id = randomInt(0, elements.length - 1),
                        obj = elements[id],
                        newAlpha = obj.alpha;
                    do {
                        newAlpha = randomFloatAround(obj.alpha);
                    } while (newAlpha < min_bright || newAlpha > max_bright)

                    elements[id] = star(obj.x, obj.y, obj.size, newAlpha);
                }

                requestAnimFrame(function () {
                    spark(numberOfStarsToAnimate);
                });
            }

            function star(x, y, size, alpha) {
                var radius = 0;
                switch (size) {
                    case 'micro':
                        radius = 0.2;
                        break;
                    case 'mini':
                        radius = 0.4;
                        break;
                    case 'medium':
                        radius = 0.6;
                        break;
                    case 'big':
                        radius = 0.8;
                        break;
                    case 'max':
                        radius = 1.0;
                        break;
                }

                gradient = context.createRadialGradient(x, y, 0, x + radius, y + radius, radius * 2);
                gradient.addColorStop(0, 'rgba(255, 255, 255, ' + alpha + ')');
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

                /* clear background pixels */
                context.beginPath();
                context.clearRect(x - radius - 1, y - radius - 1, radius * 2 + 2, radius * 2 + 2);
                context.closePath();

                /* draw star */
                context.beginPath();
                context.arc(x, y, radius, 0, 2 * Math.PI);
                context.fillStyle = gradient;
                context.fill();

                return {
                    'x': x,
                    'y': y,
                    'size': size,
                    'alpha': alpha
                };
            }

            function randomInt(a, b) {
                return Math.floor(Math.random() * (b - a + 1) + a);
            }

            function randomFloatAround(num) {
                var plusminus = randomInt(0, 1000) % 2,
                    val = num;
                if (plusminus)
                    val += 0.1;
                else
                    val -= 0.1;
                return parseFloat(val.toFixed(1));
            }
        })(document.getElementById("star_field"));
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
        statusbar.init();

    });

})();