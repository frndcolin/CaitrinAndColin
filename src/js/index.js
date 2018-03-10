function initMap() {
    //-------------------------------------------------------------------
    //                      MAP ELEMENTS
    //-------------------------------------------------------------------
    var hotel1620MapInfo = document.querySelector('#hotel-1620');
    var pineHillsMapInfo = document.querySelector('#pine-hills');
    var mapClose = document.querySelectorAll(".map-info-close");
    var siteMap = document.querySelector('#map');





    //-------------------------------------------------------------------
    //              CUSTOM MAP COLORS AND OPTIONS
    //-------------------------------------------------------------------
    var mapOptions = {
        center: {
            lat: 41.9192124,
            lng: -70.6893377
        },
        fullscreenControl: false,
        gestureHandling: 'cooperative',
        mapTypeControl: false,
        streetViewControl: false,
        zoom: 10,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#523735"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#c9b2a6"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#dcd2be"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ae9e90"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#93817c"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#a5b076"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#447530"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#fdfcf8"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f8c967"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#e9bc62"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e98d58"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#db8555"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#806b63"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8f7d77"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#b9d3c2"
                    },
                    {
                        "saturation": -20
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#92998d"
                    }
                ]
            }
        ]
    };





    //-------------------------------------------------------------------
    //              INIT MAP AND MARKERS
    //-------------------------------------------------------------------
    var map = new google.maps.Map(siteMap, mapOptions);

    var pineHillsMarker = new google.maps.Marker({
        icon: 'http://res.cloudinary.com/frndcolin/image/upload/f_auto,q_40/v1520130197/wedding-site/pinehillsmarker.png',
        position: {
            lat: 41.8813911,
            lng: -70.5988808
        },
        map: map,
        title: 'Pine Hills',
        animation: google.maps.Animation.DROP
    });
    var hotel1620Marker = new google.maps.Marker({
        icon: 'http://res.cloudinary.com/frndcolin/image/upload/f_auto,q_40/v1520094237/wedding-site/hotel1620marker.png',
        position: {
            lat: 41.9619713,
            lng: -70.6703921
        },
        map: map,
        title: 'Hotel 1620',
        animation: google.maps.Animation.DROP
    });





    //-------------------------------------------------------------------
    //                   ADD LISTENERS
    //-------------------------------------------------------------------
    pineHillsMarker.addListener('click', function () {
        pineHillsMapInfo.classList.replace('map-hide', 'map-show')
    });
    hotel1620Marker.addListener('click', function () {
        hotel1620MapInfo.classList.replace('map-hide', 'map-show')
    });

    mapClose.forEach(function (mapBtn) {
        mapBtn.addEventListener('click', function () {
            mapBtn.parentNode.classList.replace('map-show', 'map-hide');
        });
    });
}


(function () {
    //-------------------------------------------------------------------------------------///
    //                      INIT VENDOR LIBS                                               ///
    //-------------------------------------------------------------------------------------///
    if (AOS) {
        AOS.init({
            disable: window.innerWidth < 720,
            duration: 1000,
            easing: 'ease-in-sine',
            once: true
        });
    }





    //-------------------------------------------------------------------------------------///
    //                      EMAIL FORM HANDLER                                             ///
    //-------------------------------------------------------------------------------------///    
    var emailForm = document.querySelector('form#emailForm');
    var frmBtn = document.querySelector('button.frm-btn');
    var formMsg = document.querySelector('.formMsg');

    // CAPTURE FORM SUBMISSION AND UPDATE DB
    frmBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var email = document.querySelector('input#email');
        axios.post('/addEmail', {
                email: email.value
            })
            .then(function (resp) {
                if (resp.status === 200 && resp.data === "success") {
                    emailForm.style.display = 'none';
                    formMsg.style.display = 'block';
                    formMsg.innerHTML = "Thanks! We'll keep you up to date!";
                }
                console.log(resp.data);
            })
            .catch(function (err) {
                alert(err);
            });
    });






    //-------------------------------------------------------------------------------------///
    //                      COUNTDOWN HANDLER                                              ///
    //-------------------------------------------------------------------------------------/// 
    var clock = new Worker('./js/time.js'),
        Display = function (arr) {
            var self = this;
            self.selections = arr;

            arr.forEach(choice => {
                self[choice] = document.querySelector('.date--' + choice);
            });
            return self;
        };

    Display.prototype.showTime = function (data) {
        var self = this,
            time = data;
        self.selections.forEach(title => {
            var date = self[title];
            if (date.innerHTML != time[title]) {
                date.innerHTML = time[title];
            }
        });
    }

    // INIT COUNTDOWN
    var countdown = new Display(['months', 'days', 'hours', 'minutes', 'seconds']);
    //HANDLE MESSAGES FROM WEB WORKER
    clock.onmessage = function (resp) {
        countdown.showTime(resp.data);
    };





    //-------------------------------------------------------------------------------------///
    //                      BUTTON ANIMATIONS                                              ///
    //-------------------------------------------------------------------------------------/// 
    var buttons = document.querySelectorAll('.btn');

    buttons.forEach(function (btn) {
        btn.addEventListener('mouseenter', function () {
            btn.classList.toggle('pulse');
        });
        btn.addEventListener('mouseleave', function () {
            btn.classList.toggle('pulse')
        });
    });





    //-------------------------------------------------------------------------------------///
    //                       MODAL HANDLERS                                                ///
    //-------------------------------------------------------------------------------------/// 
    var gallery = document.querySelector('.gallery'),
        modal = document.querySelector('.img-modal'),
        modalIMG = modal.querySelector('.modal-content img'),
        imgLeft = modal.querySelector('.control-left'),
        imgRight = modal.querySelector('.control-right'),
        close = modal.querySelector('.modal-close'),
        imgArr = [];

    function changeImg(val) {
        var current = imgArr.indexOf(modalIMG.getAttribute('src'));
        if (current === 0 && val != 1) {
            modalIMG.setAttribute('src', imgArr[imgArr.length - 1]);
        } else {
            modalIMG.setAttribute('src', imgArr[(current + val) % (imgArr.length)]);
        }
    }

    gallery.addEventListener('click', function (e) {
        var targetIMG = e.target;
        if (targetIMG.tagName === 'IMG') {
            var selected = imgArr.indexOf(targetIMG.getAttribute('src'));

            modalIMG.setAttribute('src', imgArr[selected]);
            modal.classList.add('opened');
        }
    });

    imgLeft.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        changeImg(-1);
    });

    imgRight.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        changeImg(1);
    });

    modal.addEventListener('click', function (e) {
        var clicked = e.target;
        if (clicked.tagName != 'IMG') {
            modal.classList.remove('opened');
        }
        return false;
    });

    close.addEventListener('click', function (e) {
        e.stopPropagation();
        modal.classList.remove('opened');
    });

    window.onload = function () {
        var images = gallery.querySelectorAll('.gallery-item img');
        var i = 0;
        var max = images.length;
        for (i; i < max; i++) {
            if (images[i].getAttribute('data-src')) {
                imgArr.push(images[i].getAttribute('data-src'));
                images[i].setAttribute('src', images[i].getAttribute('data-src'));
            }
        }
    };





    //-------------------------------------------------------------------------------------///
    //                       NAVIGATION HANDLERS                                           ///
    //-------------------------------------------------------------------------------------/// 
    var navbar = document.querySelector('.menu'),
        navLinks = navbar.querySelectorAll('.main-nav .nav-item'),
        navBtn = document.querySelector('.nav-btn');

    navBtn.addEventListener('click', function () {
        navbar.classList.toggle('open');
        navBtn.classList.toggle('pressed');
    });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navbar.classList.contains('open')) {
                navbar.classList.toggle('open');
                navBtn.classList.toggle('pressed');
            }
        });
    });





    //-------------------------------------------------------------------------------------///
    //                      PLAYLIST WINDOW HANDLERS                                       ///
    //-------------------------------------------------------------------------------------/// 
    var playlist = document.querySelector('.playlist'),
        playbtn = playlist.querySelector('.playlist-btn'),
        playlistClose = playlist.querySelector('.playlist-close'),
        banner = document.querySelector('header'),
        beenViewed = false;

    function closeOpenedWindow() {
        if (playlist.classList.contains('opened')) {
            playlist.classList.toggle('opened');
        }
    }

    function isInView(elementToCheck) {
        var bnrHt = banner.clientHeight;
        var target = elementToCheck.getBoundingClientRect().top + bnrHt;
        var screenHt = screen.height;

        if (target > screenHt) {
            return false;
        } else if (target < screenHt - (screenHt - 50)) {
            return true;
        }
    }

    playbtn.addEventListener('click', function () { playlist.classList.toggle('opened');});
    playbtn.addEventListener('mouseenter', function () { playbtn.classList.toggle('swing');});
    playbtn.addEventListener('mouseleave', function () { playbtn.classList.toggle('swing');});
    playlistClose.addEventListener('click', function () { playlist.classList.toggle('opened');});

    window.onscroll = function () {
        if (isInView(banner) && !beenViewed) {
            playlist.classList.add('opened');
            setTimeout(function () {
                playlist.classList.remove('opened');
                beenViewed = true;
            }, 2500);
        } else {
            closeOpenedWindow();
        }
    };
}());