// Write your JavaScript code here!

window.addEventListener("load", function() {
  
    formSubmission(document);
    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    console.log(listedPlanetsResponse)

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        console.log(listedPlanetsResponse)
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const destinationPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, destinationPlanet.name, destinationPlanet.diameter, destinationPlanet.star, destinationPlanet.distance, destinationPlanet.moons, destinationPlanet.image);
    })

})