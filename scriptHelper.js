// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML =`
          <h2>Mission Destination</h2>
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
    if (testInput === "") {
        testInput = "empty"
        alert("all fields are required")
    } else if (isNaN(testInput) === 'true') {
        testInput = "not a number"
    } else if (isNaN(testInput) === 'false') {
        testInput= 'is a number'
    }
    return testInput
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
     
     let pilotStatus = document.getElementById('pilotStatus');
     let copilotStatus = document.getElementById('copilotStatus');
     let fuelStatus = document.getElementById('fuelStatus');
     let cargoStatus = document.getElementById('cargoStatus');
     let launchStatus = document.getElementById("launchStatus");
     let launchStatusCheck = document.getElementById("launchStatusCheck");

     let testpilot = validateInput(pilot);
     let testcopilot = validateInput(copilot);
     let testfuel = validateInput(fuelLevel);
     let testcargo = validateInput(cargoLevel);

      if(testpilot === "empty"){
          pilotStatus.innerHTML = "not ready";
          list.style.visibility = visible;
          list.innerHTML += "Shuttle not ready for launch";
          launchStatusCheck.style.backgroundColor = "rgb(199, 37, 78)";
     }else if(testcopilot==="empty"){
          copilotStatus.innerHTML = "not ready";
          list.style.visibility = visible;
          launchStatus.innerHTML = "Shuttle not ready for launch";
          launchStatusCheck.style.color = "rgb(199, 37, 78)";
     }else if(testfuel === "not a number" || fuelLevel < 10000){
          fuelStatus.innerHTML = "not ready";
          list.style.visibility = visible;
          launchStatus.innerHTML = "Shuttle not ready for launch";
          launchStatusCheck.color = "rgb(199, 37, 78)";
     }else if(testcargo === "not a number" || cargoLevel > 10000){
          cargoStatus.innerHTML = "not ready";
          list.style.visibility = visible;
          launchStatus.innerHTML = "Shuttle not ready for launch";
          launchStatusCheck.style.color = "rgb(199, 37, 78)";
     }else{launchStatus.innerHTML = "Shuttle ready for launch";
          launchStatusCheck.style.color ="rgb(65, 159, 106)";
          pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
          copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`;
          fuelStatus.innerHTML = `Fuel level is enough for launch`;
          cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        };
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
         response.json().then(function(){
          }) 
        });
    return planetsReturned;
};

function pickPlanet(planets) {
    let num = Math.round(Math.random()*5);
    let pickedPlanet=planets[num];
    return pickedPlanet
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;