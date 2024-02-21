document.getElementById("calculator-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    var bodyWeight = parseFloat(document.getElementById("body-weight").value);
    var dose = parseFloat(document.getElementById("dose").value);
    var concentration = parseFloat(document.getElementById("concentration").value);
    var timePerDay = parseInt(document.getElementById("time-per-day").value);
    var days = parseInt(document.getElementById("days").value);

    // Calculate total liquid dispensing volume
    var totalVolume = bodyWeight * (dose / concentration) * timePerDay * days;

    // Display the result
    var resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = "<div class='result-box'><span class='result-value'>" + totalVolume.toFixed(2) + " mL</span></div>";
});