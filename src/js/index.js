(function () {
    //----------------------------------------------------------
    //              Init global vendor libs
    //----------------------------------------------------------

    const granimInstance = new Granim({
        element: '#canvas-image-blending',
        direction: 'top-bottom',
        opacity: [0.6, 0.75],
        isPausedWhenNotInView: true,
        states: {
            "default-state": {
                gradients: [
                    ['#28324A', '#485563'],
                    ['#D6A319', '#28324A']
                ],
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

    const buttons = document.querySelectorAll('.btn');
    
    
    
    
    
    //----------------------------------------------------------
    //              add event listeners
    //----------------------------------------------------------
    buttons.forEach(btn => {
        btn.addEventListener('mouseover', () => {
            this.classList.toggle('pulse');
        });
        btn.addEventListener('mouseleave', () => {
            this.classList.toggle('pulse');
        });
    });
    
    
}());