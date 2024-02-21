document.getElementById("calculator-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    var bodyWeight = parseFloat(document.getElementById("body-weight").value);
    var dose = parseFloat(document.getElementById("dose").value);
    var concentration = parseFloat(document.getElementById("concentration").value);

    // Calculate total liquid dispensing volume
    var totalVolume = bodyWeight * (dose / concentration);

    // Display the result
    var resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = "<div class='result-box'>" + totalVolume.toFixed(2) + " mL</div>";
});