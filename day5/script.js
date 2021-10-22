const button = document.getElementById("btn");


function getF1(e) {
    e.preventDefault()
    let year = document.getElementById("year").value;
    let round = document.getElementById("round").value;
    fetch(`http://ergast.com/api/f1/${year}/${round}/results.json?`)
        .then(response => response.json())
        .then(data => parseData(data.MRData.RaceTable.Races[0]))
    document.getElementById("year").value = '';
    document.getElementById("round").value = '';
}
function parseData(data) {
    const drivers = [];
    let date, raceName, cId, season, round;
    const body = document.getElementById('body');
    let numOfDrivers = document.getElementById("drivers").value;

    for(i = 0; i < numOfDrivers; i++){
        drivers.push(data.Results[i]);
        date = data.date;
        raceName = data.raceName;
        round = data.round;
        season = data.season;
        cId = data.Circuit.circuitId;
    }
    for(let driver of drivers) {
        console.log(driver)
        body.innerHTML += `
    <tr>
        <td>${season}</td>
        <td>${round}</td>
        <td>${raceName}</td>
        <td>${date}</td>
        <td>C${cId}</td>
        <td>${driver.Driver.givenName} ${driver.Driver.familyName}</td>
        <td>C${driver.Constructor.name}</td>
    </tr>
    `
    }    
    document.getElementById("drivers").value = '';
}

button.addEventListener("click", getF1);
document.getElementById("btnClear").addEventListener("click", () => body.innerHTML = '');