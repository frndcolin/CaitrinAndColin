'use strict';

(function () {

    //----------------------------------------------------------
    //              Init global vendor libs
    //----------------------------------------------------------
    if (AOS) {
        AOS.init({
            disable: window.innerWidth < 720,
            duration: 700,
            easing: 'ease-in-sine',
            once: true
        });
    }

    //----------------------------------------------------------
    //              capture elements
    //----------------------------------------------------------
    var buttons = document.querySelectorAll('.btn');

    //----------------------------------------------------------
    //              add event listeners
    //----------------------------------------------------------
    buttons.forEach(function (btn) {
        btn.addEventListener('mouseover', function () {
            this.classList.toggle('pulse');
        });
        btn.addEventListener('mouseleave', function () {
            this.classList.toggle('pulse');
        });
    });
})();