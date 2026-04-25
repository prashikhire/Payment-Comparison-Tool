const data = {
    "UPI": { fee: 0, speed: 5, availability: 5 },
    "Credit Card": { fee: 3, speed: 4, availability: 5 },
    "Net Banking": { fee: 2, speed: 3, availability: 4 }
};

let feeChart, speedChart, availabilityChart;

function compare() {
    console.log("Compare clicked"); // Debug line

    const selected = document.querySelectorAll('input[type="checkbox"]:checked');

    if (selected.length === 0) {
        alert("Please select at least one payment method");
        return;
    }

    const labels = [];
    const fees = [];
    const speeds = [];
    const availability = [];

    selected.forEach(item => {
        const method = item.value;
        labels.push(method);
        fees.push(data[method].fee);
        speeds.push(data[method].speed);
        availability.push(data[method].availability);
    });

    // Destroy old charts
    if (feeChart) feeChart.destroy();
    if (speedChart) speedChart.destroy();
    if (availabilityChart) availabilityChart.destroy();

    // Create charts
    feeChart = new Chart(document.getElementById('feeChart'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Fees (%)',
                data: fees,
                backgroundColor: 'red'
            }]
        }
    });

    speedChart = new Chart(document.getElementById('speedChart'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Speed',
                data: speeds,
                backgroundColor: 'green'
            }]
        }
    });

    availabilityChart = new Chart(document.getElementById('availabilityChart'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Availability',
                data: availability,
                backgroundColor: 'blue'
            }]
        }
    });
}