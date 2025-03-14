window.onload = function () {
    const ctx = document.getElementById("bar-container");
    var chart = new CanvasJS.Chart(ctx, {

        title:{
            text: "Fruits sold in 2025"
        },
        data: [//array of dataSeries
            { //dataSeries object

                /*** Change type "column" to "bar", "area", "line" or "pie"***/
                name: "1Q2025",
                type: "bar",
                showInLegend: true,
                dataPoints: [
                    { label: "banana", y: 18 },
                    { label: "orange", y: 29 },
                    { label: "apple", y: 40 },
                    { label: "mango", y: 34 },
                    { label: "grape", y: 24 }
                ]
            },{
                name: "2Q2025",
                type: "bar",
                showInLegend: true,
                dataPoints: [
                    { label: "apple", y: 30},
                    { label: "orange", y: 19 },
                    { label: "apple", y: 35 },
                    { label: "mango", y: 16 },
                    { label: "grape", y: 50 }
                ]
            }
        ]
    });

    const otherChartCtx = document.getElementById("chartContainer")
    var chart2 = new CanvasJS.Chart(otherChartCtx, {

        title:{
            text: "Fruits sold in 2025"
        },
        data: [//array of dataSeries
            { //dataSeries object

                /*** Change type "column" to "bar", "area", "line" or "pie"***/
                name: "1Q2025",
                type: "column",
                showInLegend: true,
                dataPoints: [
                    { label: "banana", y: 18 },
                    { label: "orange", y: 29 },
                    { label: "apple", y: 40 },
                    { label: "mango", y: 34 },
                    { label: "grape", y: 24 }
                ]
            },{
                name: "2Q2025",
                type: "column",
                showInLegend: true,
                dataPoints: [
                    { label: "apple", y: 30},
                    { label: "orange", y: 19 },
                    { label: "apple", y: 35 },
                    { label: "mango", y: 16 },
                    { label: "grape", y: 50 }
                ]
            }
        ]
    });

    chart2.render();
    chart.render();
}