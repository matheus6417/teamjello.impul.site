$(document).ready(function () {
    var navigationController = new $.ScrollMagic.Controller();
    var scene = new $.ScrollMagic.Scene({
        offset: 120 // start this scene after scrolling for 50px
    });
    scene.setVelocity(".navigation", {
        // height: 60,
    }, {
        duration: 200,
        delay: 0,
        easing: "ease-in-out"
    });

    scene.setClassToggle(".navigation", "is-sticky");
    scene.addTo(navigationController);
})



// scene.addIndicators(); // "trigger" and "start" indicators


    // scene.setVelocity(".logo", {
    //     width: 120
    // }, {
    //     duration: 200,
    //     delay: 0,
    //     easing: "ease-in-out"
    // });