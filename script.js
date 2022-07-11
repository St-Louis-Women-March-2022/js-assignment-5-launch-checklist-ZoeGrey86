// Write your JavaScript code here!

const scriptHelper = require("./scriptHelper");

window.addEventListener("load", function() {
    let launchForm = document.getElementById("launchForm");
    launchForm.addEventListener("submit", function(event) {
        let list = document.getElementById("faultyItems");
        let pilot =  document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel =  document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel =  document.querySelector("input[name=cargoMass]").value;
        scriptHelper.formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

        let listedPlanets;
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()
        let listedPlanetsResponse = scriptHelper.myFetch();
        listedPlanetsResponse.then(function (result) {
            listedPlanets = result;
            console.log(listedPlanets);
        }).then(function () {
            console.log(listedPlanets);
            // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
            let planet = scriptHelper.pickPlanet(listedPlanets);
            let document = document.getElementById("missionTarget")
            let name = planet.name;
            let diameter = planet.diameter;
            let star = planet.star;
            let distance = planet.distance;
            let moons = planet.moons;
            let imageUrl = planet.image;
            scriptHelper.addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
        })
        event.preventDefault();
    });
});