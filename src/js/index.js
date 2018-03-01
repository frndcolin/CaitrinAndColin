(function () {
    //----------------------------------------------------------
    //              Init global vendor libs
    //----------------------------------------------------------
    if(AOS){
        AOS.init({
            disable: window.innerWidth < 720,
            duration: 1000,
            easing: 'ease-in-sine',
            once: true
        });    
    }
    
    
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