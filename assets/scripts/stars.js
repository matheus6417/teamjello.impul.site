$(document).ready(function () {
    // requestAnimationFrame() shim by Paul Irish
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function ( /* function */ callback, /* DOMElement */ element) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();
    /**
     * Behaves the same as setInterval except uses requestAnimationFrame() where possible for better performance
     * @param {function} fn The callback function
     * @param {int} delay The delay in milliseconds
     */
    window.requestInterval = function (fn, delay) {
        if (!window.requestAnimationFrame &&
            !window.webkitRequestAnimationFrame &&
            !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
            !window.oRequestAnimationFrame &&
            !window.msRequestAnimationFrame)
            return window.setInterval(fn, delay);

        var start = new Date().getTime(),
            handle = new Object();

        function loop() {
            var current = new Date().getTime(),
                delta = current - start;

            if (delta >= delay) {
                fn.call();
                start = new Date().getTime();
            }

            handle.value = requestAnimFrame(loop);
        };

        handle.value = requestAnimFrame(loop);
        return handle;
    }

    /**
     * Behaves the same as clearInterval except uses cancelRequestAnimationFrame() where possible for better performance
     * @param {int|object} fn The callback function
     */
    window.clearRequestInterval = function (handle) {
        window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) :
            window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(handle.value) :
            window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value) : /* Support for legacy API */
            window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) :
            window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(handle.value) :
            window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(handle.value) :
            clearInterval(handle);
    };
    /**
     * Behaves the same as setTimeout except uses requestAnimationFrame() where possible for better performance
     * @param {function} fn The callback function
     * @param {int} delay The delay in milliseconds
     */

    window.requestTimeout = function (fn, delay) {
        if (!window.requestAnimationFrame &&
            !window.webkitRequestAnimationFrame &&
            !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
            !window.oRequestAnimationFrame &&
            !window.msRequestAnimationFrame)
            return window.setTimeout(fn, delay);

        var start = new Date().getTime(),
            handle = new Object();

        function loop() {
            var current = new Date().getTime(),
                delta = current - start;

            delta >= delay ? fn.call() : handle.value = requestAnimFrame(loop);
        };

        handle.value = requestAnimFrame(loop);
        return handle;
    };

    /**
     * Behaves the same as clearTimeout except uses cancelRequestAnimationFrame() where possible for better performance
     * @param {int|object} fn The callback function
     */
    window.clearRequestTimeout = function (handle) {
        window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) :
            window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(handle.value) :
            window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value) : /* Support for legacy API */
            window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) :
            window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(handle.value) :
            window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(handle.value) :
            clearTimeout(handle);
    };
    (function () {

        // Configuration
        const NB_STARS = 70;
        const MAX_RADIUS = 2;
        const GLOBAL_SPEED = 0.006;
        const canvas = document.getElementById('hero-stars');
        const context = canvas.getContext('2d');
        console.log(context); // HTMLCanvasElement
        const stars = [];
        let frame = null;

        function init() {


            setCanvasSize();

            window.addEventListener('resize', debounce(function () {
                setCanvasSize();
                resetStarsPositions();
            }, 30));

            for (let i = 0; i < NB_STARS; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * MAX_RADIUS,
                    radiusSpeed: Math.random() > 0.5 ? -1 : 1,
                    alpha: Math.random()
                });
            }

            run();
        }

        function animate() {
            for (let i = 0; i < NB_STARS; i++) {
                stars[i].radius += GLOBAL_SPEED * stars[i].radiusSpeed;
                stars[i].alpha = stars[i].radius / MAX_RADIUS;

                if (stars[i].radius < 0) {
                    stars[i].radius = 0;
                    stars[i].radiusSpeed *= -1;
                } else if (stars[i].radius > MAX_RADIUS) {
                    stars[i].radius = MAX_RADIUS;
                    stars[i].radiusSpeed *= -1;
                }
            }
        }

        function render() {
            context.clearRect(0, 0, canvas.width, canvas.height);


            for (let i = 0; i < NB_STARS; i++) {
                context.fillStyle = 'rgba(255,255,255,' + stars[i].alpha + ')';
                context.beginPath();
                context.arc(stars[i].x, stars[i].y, stars[i].radius, 0, 6);
                context.fill();
                context.closePath();
            }
        }

        function run() {
            animate();
            render();

            frame = requestAnimationFrame(run);
        }

        function setCanvasSize() {
            context.save();
            canvas.width = window.innerWidth;
            canvas.height = 600;
            context.restore();
        }

        function resetStarsPositions() {
            for (let i = 0; i < NB_STARS; i++) {
                stars[i].x = Math.random() * canvas.width;
                stars[i].y = Math.random() * canvas.height;
            }
        }

        // https://davidwalsh.name/javascript-debounce-function
        function debounce(func, wait, immediate) {
            var timeout;
            return function () {
                var context = this,
                    args = arguments;
                var later = function () {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        };

        init();

    })();

});