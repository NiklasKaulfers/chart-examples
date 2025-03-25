const interactiveCanvas = document.getElementById("interactive-chart");
let num = [1,1,1];



const chart = new Chart(interactiveCanvas, {
    data : {
        labels: ["spanish numbers"],
        datasets: [
            {
                type: "bar",
                label: "uno",
                data: [num[0]],
                borderWidth: 1,
            }, {
                type: "bar",
                label: "dos",
                data: [num[1]],
                borderWidth: 1
            }, {
                type: "bar",
                label: "tres",
                data: [num[2]],
                borderWidth: 1
            }
        ]
    },
    options: {
        interaction: {
            mode: "index"
        },
        onClick: (e) => {
            const point = chart.getElementsAtEventForMode(e, "nearest", {intersect: true}, true);
            if (point.length !== 0){
                const index = point[0].datasetIndex;
                num[index] = num[index] + 1;
                chart.data.datasets[index].data[0] = num[index];
                chart.update();
            }
        }
    }
})