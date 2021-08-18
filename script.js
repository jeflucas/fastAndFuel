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
      getConsumption();
    });
});

function getConsumption() {
  axios.get("https://sheetdb.io/api/v1/mp3zax2x0z3b3").then((response) => {
    data = response.data;
    if (data.length <= 1) {
      alert("This is your first refueling!");
    } else {
      for (let i = 0; i < data.length; i++) {
        var consumoTela = document.getElementById("consumption");
        var consumo = kmPercorridos / data[i].liters;
        var kmPercorridos = data[data.length - 1].odometer - data[data.length - 2].odometer;
        consumoTela.innerHTML = consumo.toFixed(2);
      }
    }
  });
}

function deleteData() {
  axios
    .delete("https://sheetdb.io/api/v1/mp3zax2x0z3b3/all")
    .then((response) => {
      console.log(response.data);
    })
    .then((html) => {location.reload();});
}
