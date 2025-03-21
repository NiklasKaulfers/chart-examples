import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const filename = "./data/example.cnv";

const loadedData = await d3.csv(filename);
if (!loadedData){
    alert("Data file cant be found");
    throw new Error("Data file cant be found")
}


const myChartElement = document.getElementById("myChart");


const foxesBar = [];
const nonFoxesBar = [];
const years = []

for (let i = 0; i < loadedData.length; i++){
    const foxes = Number(loadedData[i].foxes);
    const nonFoxes = Number(loadedData[i].nonFoxes);
    foxesBar.push(foxes);
    nonFoxesBar.push(nonFoxes);
    years.push(2005 + i);
}
const options = {

    data: {
        labels: years,
        datasets: [{
            type: "line",
            label: 'Foxes',
            data: foxesBar,
            borderWidth: 1
        }, {
            type: "line",
            label: 'Non Foxes',
            data: nonFoxesBar,
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
}
new Chart(myChartElement, options);
