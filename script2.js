const back = document.getElementById('button');
const pageTwo = document.getElementById('div');

back.addEventListener('click', getBack);
function getBack() {
    location.replace('index.html');
};

pageTwo.addEventListener('mouseover', getCall);
function getCall() {
    console.log('Висота екрана', screen.height, 'Ширина екрана', screen.width);
};

function initMap() {
    const opt = {
        center: { lat: 50.0984963, lng: 36.1288546 },
        zoom: 12
    };
    const geocoder = new google.maps.Geocoder();

    navigator.geolocation.getCurrentPosition(function (position) {
        opt.center.lat = position.coords.latitude;
        opt.center.lng = position.coords.longitude;
        console.log('Широта', opt.center.lat);
        console.log('Довгота', opt.center.lng);
        geocodeLatLng(geocoder, opt.center);
    });


    const myMap = new google.maps.Map(document.getElementById("map"), opt);
    document.cookie = "SameSite=None; Secure";
};

function geocodeLatLng(geocoder, pos) {
    geocoder.geocode({ location: pos }, (results, status) => {
        if (status === "OK" && results[0]) {
            const address = results[0].formatted_address;
            console.log('Адреса:', address);
        } else {
            console.log('Не вдалося знайти адресу');
        };
    });
};
