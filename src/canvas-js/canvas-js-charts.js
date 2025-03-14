window.onload = function () {
    const barChartContainer = document.getElementById("bar-container");
    var chart = new CanvasJS.Chart(barChartContainer, {

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

    const columnChartContainer = document.getElementById("chartContainer")
    var chart2 = new CanvasJS.Chart(columnChartContainer, {

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

    const companyRevContainer = document.getElementById("company-rev-container");
    var companyRevChart = new CanvasJS.Chart(companyRevContainer, {
        animationEnabled: true,
        title:{
            text: "Company Revenue by Year"
        },
        axisY: {
            title: "Revenue in USD",
            valueFormatString: "#0,,.",
            suffix: "mn",
            prefix: "$"
        },
        data: [{
            type: "splineArea",
            color: "rgba(54,158,173,.7)",
            markerSize: 5,
            xValueFormatString: "YYYY",
            yValueFormatString: "$#,##0.##",
            dataPoints: [
                { x: new Date(2000, 0), y: 3289000 },
                { x: new Date(2001, 0), y: 3830000 },
                { x: new Date(2002, 0), y: 2009000 },
                { x: new Date(2003, 0), y: 2840000 },
                { x: new Date(2004, 0), y: 2396000 },
                { x: new Date(2005, 0), y: 1613000 },
                { x: new Date(2006, 0), y: 2821000 },
                { x: new Date(2007, 0), y: 2000000 },
                { x: new Date(2008, 0), y: 1397000 },
                { x: new Date(2009, 0), y: 2506000 },
                { x: new Date(2010, 0), y: 2798000 },
                { x: new Date(2011, 0), y: 3386000 },
                { x: new Date(2012, 0), y: 6704000},
                { x: new Date(2013, 0), y: 6026000 },
                { x: new Date(2014, 0), y: 2394000 },
                { x: new Date(2015, 0), y: 1872000 },
                { x: new Date(2016, 0), y: 2140000 }
            ]
        }]
    });



    chart2.render();
    chart.render();
    companyRevChart.render();
}