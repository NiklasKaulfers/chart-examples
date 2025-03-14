const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['banana', 'orange', 'apple', 'mango', 'grape'],
        datasets: [{
            label: 'Fruits sold in First Quarter',
            data: [18, 29, 40, 34, 24],
            borderWidth: 1
        }]
    },
    options: {
    }
});

const otherCtx = document.getElementById("bar-chart")
new Chart(otherCtx, {

    data: {
        labels: ['banana', 'orange', 'apple', 'mango', 'grape'],
        datasets: [{
            type: "bar",
            label: '1Q2025',
            data: [18, 29, 40, 34, 24],
            borderWidth: 1
        }, {
            type: "bar",
            label: '2Q2025',
            data: [30, 19, 35, 16, 50],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})