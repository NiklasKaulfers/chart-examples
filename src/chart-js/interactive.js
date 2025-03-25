const interactiveCanvas = document.getElementById("interactive-chart");
let numbers = [1,1,1];

document.getElementById("randomize").addEventListener("click", () => {
    for (let i = 0; i < numbers.length; i++) {
        const update = Math.round(Math.random() * 50)
        numbers[i] = update;
        chart.data.datasets[i].data[0] = update;
    }
    chart.update();
});

document.getElementById("reset").addEventListener("click", () => {
    for (let i = 0; i < numbers.length; i++) {
        chart.data.datasets[i].data[0] = 1;
        numbers[i] = 1;
    }
    chart.update();
});



const chart = new Chart(interactiveCanvas, {
    data : {
        labels: ["spanish numbers"],
        datasets: [
            {
                type: "bar",
                label: "uno",
                data: [numbers[0]],
                borderWidth: 1,
            }, {
                type: "bar",
                label: "dos",
                data: [numbers[1]],
                borderWidth: 1
            }, {
                type: "bar",
                label: "tres",
                data: [numbers[2]],
                borderWidth: 1
            }
        ]
    },
    options: {
        onClick: (e) => {
            const point = chart.getElementsAtEventForMode(e, "nearest", {intersect: true}, true);
            if (point.length !== 0){
                const index = point[0].datasetIndex;
                numbers[index] = numbers[index] + 1;
                chart.data.datasets[index].data[0] = numbers[index];
                chart.update();
            }
        },
        plugins: {
            title: {
                display: true,
                text: "ChartJS with interaction click to add 1"
            }
        }
    }
})