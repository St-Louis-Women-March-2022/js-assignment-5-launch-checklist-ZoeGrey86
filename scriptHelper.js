// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML +=`
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
    if (testInput.value === ""){
        testInput.value = "empty"
        alert("all fields are required")
     }else if(isNaN(testInput.value) === 'true'){
         testInput.value = "not a number"
     }else if(isNaN(testInput.value) === 'false'){
         testInput.value = 'is a number'
     }
     return testInput
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    list = this.list;
    let pilotStatus = this.document.getElementById('pilotStatus');
    let copilotStatus = this.document.getElementById('copilotStatus');
    let fuelStatus = this.document.getElementById('fuelStatus');
    let cargoStatus = this.document.getElementById('cargoStatus');
     let Fault = this.document.getElementById("faultyItems");
     let launchStatus =this.document.getElementById("launchStatus");
     let launchStatusCheck = this.document.getElementById("launchStatusCheck");
      if(validateInput(pilot)=== "empty"){
          pilotStatus.innerHTML = "not ready";
          Fault.style.visibility = visible;
          launchStatus.innerHTML = "Shuttle not ready for launch"
          launchStatusCheck.style.backgroundColor = 'red';
     }else if(validateInput(copilot)==="empty"){
          copilotStatus.innerHTML = "not ready";
          Fault.style.visibility = visible;
          launchStatus.innerHTML = "Shuttle not ready for launch"
          launchStatusCheck.style.backgroundColor = 'red';
     }else if(validateInput(fuelLevel)==="not a number" || fuelLevel < 10000){
          fuelStatus.innerHTML = "not ready";
          Fault.style.visibility = visible;
          launchStatus.innerHTML = "Shuttle not ready for launch"
          launchStatusCheck.color = "red";
     }else if(validateInput(cargoLevel)==="not a number" || cargoLevel > 10000){
          cargoStatus.innerHTML = "not ready";
          Fault.style.visibility = visible;
          launchStatus.innerHTML = "Shuttle not ready for launch";
          launchStatusCheck.color = "red";
     }else{launchStatus.innerHTML = "Shuttle ready for launch";
          launchStatusCheck.color = "green";} 
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
         response.json().then(function(){
                console.log(planetsReturned)
          }) 
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let num = Math.round(Math.random()*6);
    let pickedPlanet=planets[num];
    return pickedPlanet
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;