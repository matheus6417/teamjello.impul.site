(function () {



    $(document).ready(function () {
        (function () {

            // Configuration
            const NB_STARS = 333;
            const MAX_RADIUS = 1.6;
            const GLOBAL_SPEED = 0.0061;

            const canvas = document.getElementById('stars');
            const context = canvas.getContext('2d');
            const stars = [];
            let frame = null;

            function init() {
                canvas.style.backgroundColor = 'transparent';
                canvas.style.display = 'block';
                canvas.style.position = 'fixed';
                canvas.style.top = 0;
                canvas.style.right = 0;
                canvas.style.bottom = 0;
                canvas.style.left = 0;

                setCanvasSize();

                // window.addEventListener('resize', debounce(function () {
                //     setCanvasSize();
                //     resetStarsPositions();
                // }, 30));

                // Initialisation du script (génération des étoiles)
                for (let i = 0; i < NB_STARS; i++) {
                    stars.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        radius: Math.random() * MAX_RADIUS,
                        radiusSpeed: Math.random() > 0.5 ? -1 : 1,
                        alpha: Math.random()
                    });
                }

                // Démarrage de l'animation
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
                    context.arc(stars[i].x, stars[i].y, stars[i].radius, 0, 6.283185307179586);
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
                canvas.height = window.innerHeight;
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

})();