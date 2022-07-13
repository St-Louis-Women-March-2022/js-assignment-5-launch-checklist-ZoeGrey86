// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.

   const missionTarget = document.getElementById("missionTarget");

   missionTarget.innerHTML = 
`                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
   
}

function validateInput(testInput) {
    let answer;

   if (testInput === "") {
        answer = "Empty";
   } else if (isNaN(Number(testInput))) {
        answer = "Not a number";
   } else if (isNaN(testInput) === false) {
        answer = "Is a number";
   }; 

   return answer;
};


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const form = document.querySelector("form");
    const faultyItems = document.getElementById("faultyItems")

    form.addEventListener("submit", function(event) {
        event.preventDefault()

        const pilotInput = document.querySelector("input[name=pilotName]");
        const testpilot = validateInput(pilotInput.value);
        const pilotStatus = document.getElementById("pilotStatus");

        const copilotInput = document.querySelector("input[name=copilotName]");
        const testcopilot = validateInput(copilotInput.value);
        const copilotStatus = document.getElementById("copilotStatus");

        const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        const testfuel = validateInput(fuelLevelInput.value);
        const fuelStatus = document.getElementById("fuelStatus");

        const cargoLevelInput = document.querySelector("input[name=cargoMass]");
        const testcargo = validateInput(cargoLevelInput.value);
        const cargoStatus = document.getElementById("cargoStatus");

        const launchStatus = document.getElementById("launchStatus")

        if (testpilot === "Empty" || testpilot === "Is a number") {
            window.alert("Alert! Pilot name invalid!");
            pilotStatus.innerHTML = `Pilot not ready!`
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = `Shuttle not ready for launch.`;
            launchStatus.style.color ="rgb(199, 37, 78)";
        }
        if (testcopilot === "Empty" || testcopilot === "Is a number") {
            window.alert("Alert! Co-Pilot name invalid!");
            copilotStatus.innerHTML = `Co-Pilot not ready!`
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = `Shuttle not ready for launch.`;
            launchStatus.style.color ="rgb(199, 37, 78)";
        }
        if (testfuel === "Empty" || testfuel === "Not a number") {
            window.alert("Please enter a valid fuel level.");
            fuelStatus.innerHTML = `Invalid input.`
            fuelStatus.innerHTML = 'Fuel level too low for launch!';
            faultyItems.style.visibility = "visible";
            launchStatus.style.color ="rgb(199, 37, 78)";
            launchStatus.innerHTML = `Shuttle not ready for launch.`;
         } else if (testfuel === "Is a number" && Number(fuelLevelInput.value) < 10000) {
            fuelStatus.innerHTML = 'Fuel level too low for launch!';
            faultyItems.style.visibility = "visible";
            launchStatus.style.color ="rgb(199, 37, 78)";
            launchStatus.innerHTML = `Shuttle not ready for launch.`;
         } else if (testfuel === "Is a number" && Number(fuelLevelInput.value) >= 10000) {
            fuelStatus.innerHTML = `Fuel level high enough for launch`
        }
        if (testcargo === "Empty" || testcargo === "Not a number") {
            window.alert("Please enter a valid cargo level.");
            cargoStatus.innerHTML = `Invalid input.`
            faultyItems.style.visibility = "visible";
            launchStatus.style.color ="rgb(199, 37, 78)";
            launchStatus.innerHTML = `Shuttle not ready for launch.`;
        } else if (testcargo === "Is a number" && Number(cargoLevelInput.value) > 10000) {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = `Cargo mass too heavy for launch!`;
            launchStatus.innerHTML = `Shuttle not ready for launch.`;
            launchStatus.style.color ="rgb(199, 37, 78)";
        } else if (testcargo === "Is a number" && Number(cargoLevelInput.value) < 10000 && Number(fuelLevelInput.value) >= 10000) {
           cargoStatus.innerHTML = `Cargo mass low enough for launch`
        }
        if(launchStatus.innerHTML !== "Shuttle not ready for launch."){
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = `Shuttle ready for launch.`;
            launchStatus.style.color ="rgb(65, 159, 106)";
            pilotStatus.innerHTML = `Pilot ${pilotInput.value} ready for launch!`
            copilotStatus.innerHTML = `Co-Pilot ${copilotInput.value} ready for launch!`


        }
    });
}

faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = `Shuttle not ready for launch.`;
            launchStatus.style.color ="rgb(199, 37, 78)";





async function myFetch() {
    const planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });
    return planetsReturned;
};

function pickPlanet(planets) {
    //creating randomized num
    let index = 0;
    index += Math.floor(Math.random()*6);
    //returning planet at index randNum
    return planets[index];
}

module.exports = {
    addDestinationInfo: addDestinationInfo,
    validateInput: validateInput,
    formSubmission: formSubmission,
    pickPlanet: pickPlanet,
    myFetch: myFetch,
}