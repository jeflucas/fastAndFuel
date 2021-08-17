// Get all data
var info = axios.get('https://sheetdb.io/api/v1/mp3zax2x0z3b3')
.then( response => {
    
    for (let i = 0; i < info.length; i++) {
    
        // Consumption calculation
        var kmPercorridos = (info[i].odometer - info[i-1].odometer);
        var consumo = (kmPercorridos / info[i].liters)
        
        if(info.length <= 1){
            alert('This is your first refueling!')
        } else {
            document.getElementById('consumption') = consumo;
            fuelChart.data.labels.push(i+1)
            fuelChart.data.datasets[0].data.push(consumo)
        }
    }
    
});





//POST data into Google Sheet

var form = document.getElementById("sheetdb-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
  fetch(form.action, {
      method: "POST",
      body: new FormData(document.getElementById("sheetdb-form")),
    })
    .then((response) => response.json())
    .then((html) => {
        alert("Nice!");
        window.location.href = "./index.html";
    });
});



// Create the chart
 /*   
    let chart = document.getElementById('fuel-chart').getContext('2d')
    
    let fuelChart = new Chart(chart, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Liters',
                data: []
            }]
        },
        options: {}
    })

    */