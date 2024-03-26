function calculateImpact() {
    var electricityUsage = parseFloat(document.getElementById('electricity-usage').value);
    var waterUsage = parseFloat(document.getElementById('water-usage').value);
    var electricityBaseline = 100; // example baseline value for electricity impact
    var waterBaseline = 500; // example baseline value for water impact

    var resultDiv = document.getElementById('result');
    var resultContainer = document.getElementById('result-container');

    if (electricityUsage > electricityBaseline || waterUsage > waterBaseline) {
        resultDiv.innerHTML = '<p>Your electricity or water usage is higher than recommended.It is not Eco-Efficient. Please reduce usage to minimize impact on the environment.</p>';
    } else {
        resultDiv.innerHTML = '<p>Your electricity and water usage are within recommended limits.It is Eco-Efficient. Keep up the good work!</p>';
    }

    // Display the result container
    resultContainer.style.display = 'block';
}

function resetForm() {
    document.getElementById('electricity-usage').value = '';
    document.getElementById('water-usage').value = '';
    document.getElementById('result-container').style.display = 'none';
}
