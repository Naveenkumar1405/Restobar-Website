
   // break
   var xValues = [];
   var yValues = [45, 37, 18];
   var barColors = [
       "#7FA9FB",
       "#266386",
       "#a78f0d",
   ];
   new Chart("myChart6", {
       type: "doughnut",
       data: {
           labels: xValues,
           datasets: [{
               backgroundColor: barColors,
               data: yValues,
               borderColor: 'transparent'
           }]
       },
       options: {
           cutoutPercentage: 80,
           title: {
               display: true,
               text: ""
           }
       }
   });

