mapboxgl.accessToken = 'pk.eyJ1IjoiZGV5bm5pYWxtYXphbiIsImEiOiJjbGcxMG1uZGExZ2psM3FwNjlyaWU3MXJ1In0.JVtgXQW2KTo8JQBsPxl-IA';

//Display map

/*
const map = new mapboxgl.Map({
    container: 'map', // container ID
    //Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/deynnialmazan/clg5c2xij000101mow29527lh', // style URL
    center: [-97.151, 49.8517], // starting position [lng, lat]
    zoom: 10 // starting zoom 
});
*/


// Showing user's location:
const trackingBtn = document.querySelector('.tracking-btn');

function getLocation(position) {
    const { latitude, longitude } = position.coords;

    const newCenter = [longitude, latitude];

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/deynnialmazan/clg5c2xij000101mow29527lh', 
        center: newCenter, // Center in the user's location
        zoom: 14
    });
    
    const nav = new mapboxgl.NavigationControl({
        visualizePitch: true
    });
    
    map.addControl(nav, 'bottom-right');

    // Add market to user's location
    const marker = new mapboxgl.Marker({
    color: "#ff5c4d",
    draggable: true
    }).setLngLat(newCenter)
    .addTo(map);
    
};


function errorHandler() {
    console.log('Unable to retrieve location');
}

const options = {
    enableHighAccuracy: true
}

// Event listener
trackingBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition
        (getLocation, errorHandler), { enableHighAccuracy: true };
    } else {
        console.log('Geolocation is not supported by your browser');
    }
});