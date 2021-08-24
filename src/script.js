const locationdiv = document.querySelector("#location")
document.addEventListener('DOMContentLoaded', getLocation)

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        locationdiv.innerHTML = "Location permission is required";
    }
}

async function showPosition(position) {
    const data = await axios.get("https://apis.mapmyindia.com/advancedmaps/v1/3d55e2de5a3026eb364a88a598ff35d8/rev_geocode?lat="+ position.coords.latitude + "&lng=" + position.coords.longitude
    )
    console.log(data);
    locationdiv.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            locationdiv.innerHTML = "Location permission is necessary for the app to work."
            break;
        case error.POSITION_UNAVAILABLE:
            locationdiv.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            locationdiv.innerHTML = "Location request timed out, try again"
            break;
        case error.UNKNOWN_ERROR:
            locationdiv.innerHTML = "An unknown error occurred."
            break;
    }
}