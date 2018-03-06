'use strict';

(function () {
    var _this = this;

    //----------------------------------------------------------
    //              Init global vendor libs
    //----------------------------------------------------------
    if (AOS) {
        AOS.init({
            disable: window.innerWidth < 720,
            duration: 1000,
            easing: 'ease-in-sine',
            once: true
        });
    }

    var emailForm = document.querySelector('form#emailForm');
    var frmBtn = document.querySelector('button.frm-btn');
    var formMsg = document.querySelector('.formMsg');
    frmBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var email = document.querySelector('input#email');
        axios.post('/addEmail', {
            email: email.value
        }).then(function (resp) {
            if (resp.status === 200 && resp.data === "success") {
                emailForm.style.display = 'none';
                formMsg.innerHTML = "Thanks! We'll keep you up to date!";
            }
            console.log(resp.data);
        }).catch(function (err) {
            alert(err);
        });
    });

    //----------------------------------------------------------
    //              capture elements
    //----------------------------------------------------------

    var buttons = document.querySelectorAll('.btn');

    //----------------------------------------------------------
    //              add event listeners
    //----------------------------------------------------------
    buttons.forEach(function (btn) {
        btn.addEventListener('mouseover', function () {
            _this.classList.toggle('pulse');
        });
        btn.addEventListener('mouseleave', function () {
            _this.classList.toggle('pulse');
        });
    });

    //===================================================================
    var galleryImg = document.querySelectorAll('.gallery-item img');
    var modal = document.querySelector('.img-box');
    var modalImg = document.querySelector('.img-box-content img');
    var modalClose = document.querySelector('.img-box-close');

    galleryImg.forEach(function (img) {
        img.addEventListener('click', function (e) {
            e.stopPropagation();
            var source = this.getAttribute('src');
            modalImg.setAttribute('src', source);
            modal.classList.toggle('zoomIn');
            modal.classList.remove('zoomOut');
        });
    });
    modal.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        modal.classList.replace('zoomIn', 'zoomOut');
    });
    modalClose.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        modal.classList.replace('zoomIn', 'zoomOut');
    });

    var navbar = document.querySelector('.menu');
    var navLinks = document.querySelectorAll('.main-nav .nav-item');
    var navBtn = document.querySelector('.nav-btn');

    navBtn.addEventListener('click', function () {
        navbar.classList.toggle('open');
        this.classList.toggle('pressed');
    });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navbar.classList.contains('open')) {
                navbar.classList.toggle('open');
                navBtn.classList.toggle('pressed');
            }
        });
    });

    var playlist = document.querySelector('.playlist');
    var playbtn = document.querySelector('.playlist-btn');
    var playlistClose = document.querySelector('.playlist-close');

    playbtn.addEventListener('click', function () {
        playlist.classList.toggle('opened');
    });
    playbtn.addEventListener('mouseenter', function () {
        this.classList.toggle('swing');
    });
    playbtn.addEventListener('mouseleave', function () {
        this.classList.toggle('swing');
    });
    playlistClose.addEventListener('click', function () {
        playlist.classList.toggle('opened');
    });
    var page = document.querySelector('#page');

    function closeOpenedWindows() {
        if (playlist.classList.contains('opened')) {
            playlist.classList.toggle('opened');
        }
    }

    window.onscroll = function () {
        closeOpenedWindows();
    };
})();