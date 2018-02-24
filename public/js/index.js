'use strict';

(function () {
    var a = this;

    //----------------------------------------------------------
    //              Init global vendor libs
    //----------------------------------------------------------

    var b = new Granim({
        element: '#canvas-image-blending',
        direction: 'top-bottom',
        opacity: [0.6, 0.75],
        isPausedWhenNotInView: true,
        states: {
            "default-state": {
                gradients: [['#28324A', '#485563'], ['#D6A319', '#28324A']],
                transitionSpeed: 7000
            }
        }
    });

    AOS.init({
        disable: window.innerWidth < 720,
        duration: 1000,
        easing: 'ease-in-sine',
        once: true
    });

    //----------------------------------------------------------
    //              capture elements
    //----------------------------------------------------------

    var c = document.querySelectorAll('.btn');

    //----------------------------------------------------------
    //              add event listeners
    //----------------------------------------------------------
    c.forEach(function (b) {
        b.addEventListener('mouseover', function () {
            a.classList.toggle('pulse');
        });
        b.addEventListener('mouseleave', function () {
            a.classList.toggle('pulse');
        });
    });
})();