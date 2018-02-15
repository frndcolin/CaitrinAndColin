function initMap() {
    var mapLocals = {
        hotel1620: {
            lat: 41.9619713,
            lng: -70.6703921
        },
        pineHills: {
            lat: 41.8813911,
            lng: -70.5988808
        }
    };

    var mapOptions = {
        center: mapLocals.pineHills,
        fullscreenControl: false,
        gestureHandling: 'cooperative',
        mapTypeControl: false,
        streetViewControl: false,
        zoom: 10,
        styles: [
            {
                featureType: 'landscape',
                elementType: 'geometry.fill',
                stylers: [
                    {
                        color: '#cccccc'
                    }
                        ]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#fafafa'
                    }
                        ]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#bababa'
                    },
                    {
                        saturation: -50
                    }
                        ]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#fafafa'
                    },
                    {
                        saturation: -50
                    }
                        ]
            }
                ]
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var markers = [
        {
            mark1: new google.maps.Marker({
                label: 'A',
                position: mapLocals.pineHills,
                map: map
            })
                },
        {
            mark2: new google.maps.Marker({
                label: 'B',
                position: mapLocals.hotel1620,
                map: map
            })
                }];
}
