(() => {
    let map; // The Google Map object
    let directionsService; // The Google Maps Directions Service for route planning
    let startLocation; // The start location for the route
    let endLocation; // The end location for the route
    let waypoints = []; // An array of waypoints for the route
    let travelMode = 'BICYCLING'; // The travel mode for the route

    chrome.runtime.onMessage.addListener((obj, sender, res) => {
        const {type, routeId} = obj;

        if (type === "NEW_ROUTE") {
            currentRoute = routeId;
            console.log("Cycling route option is active!");
            findBestRoute();
        };
    });

    findBestRoute = () => {
        console.log("Finding the best route for cycling...");
    };

})();
