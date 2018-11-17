(function () {



    $(document).ready(function () {
        var canvas = document.getElementById("stars"),
            ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var stars = [], // Array that contains the stars
            FPS = 60, // Frames per second
            x = (canvas.width) / 6; // Number of stars

        for (var i = 0; i < x; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2.2,
                vx: Math.floor(Math.random() * 10) - 5,
                vy: Math.floor(Math.random() * 10) - 5,

            });
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = "lighter";

            for (var i = 0, x = stars.length; i < x; i++) {
                var s = stars[i];

                ctx.fillStyle = "#fff";
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
                ctx.fill();
            }
        }

        function update() {
            for (var i = 0, x = stars.length; i < x; i++) {
                var s = stars[i];
                var opacity = "#fff";
                s.x += s.vx / 199;
                s.y += s.vy / 999;
                s.fill = opacity;
            }
        }

        function updateColor() {
            for (var i = 0, x = stars.length; i < x; i++) {
                var s = stars[i];


            }
        }

        function tick() {
            draw();
            update();
            updateColor();
            requestAnimationFrame(tick);
        }

        tick();

    });

})();