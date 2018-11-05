var menu = {};
var navbar = {};

menu.init = function () {
    
    var menuAnimationController = new MotorCortex();
    menuAnimationController.loadMSS('assets/scripts/animations.mss', function () {
        // MotorCortex loaded and rendered the MSS files

        $(function() {
            //toggle the background of the navbar
            var header = $(".navigation");
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
        
                if (scroll >= 150) {
                    header.addClass("is-sticky");
                    menuAnimationController.trigger('onScrollFromTop',function ()  {
                        console.log('onScrollFromTop animation triggered!');
                    });
                } else {
                    header.removeClass("is-sticky");
                    menuAnimationController.trigger('onScrollToTop',function ()  {
                        console.log('onScrollToTop animation triggered!');
                    });
                }
            });
        });

       
    });
    





    


    var $menu = $('.menu');
    var $navbar = $('.navigation');
    var $btn = $('.js-btn');
    var $lines = $btn.find('.line');
    var $line1 = $btn.find('.burger-menu-line-1');
    var $line2 = $btn.find('.burger-menu-line-2');
    var $line3 = $btn.find('.burger-menu-line-3');






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
};

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

menu.init();

