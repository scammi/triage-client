//Adds charts to canvas in patient.html
$(document).ready(function(){
    var heartRateChart = $("#hr");
    var arterialPressure = $("#bloodPressure");
    var heartRateChart = new Chart(heartRateChart, {
    type: 'line',
    data: {
        labels: ['14:00', '18:00', '22:00', '02:00', '6:00', '10:00'],
        datasets: [{
            fill: false,
            data: [70, 75, 100, 90, 80, 95],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 4
        }]
    },
    options:{
      legend: false,
      title:{
        display:true,
        text:'BPM',
        fontsize: 29,
        position: 'left'
      },
      layout: {
          padding: {
              left: 0,
              right: 0,
              top: 10,
              bottom: 0
          }
      },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});

    var arterialPressureChart = new Chart(arterialPressure, {
    type: 'line',
    data: {
        labels: ['14:00', '18:00', '22:00', '02:00', '6:00', '10:00'],
        datasets: [{
          	label: 'Sistolic',
          	fill: false,
            data: [120, 115, 125, 130, 120, 125],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 4
        }, {
          label: 'Diastolic',
          data: [80, 75, 85, 90, 84, 91 ],
          borderColor: [
              'rgba(52, 73, 94, 1)',
          ],
          fill: false,
        }

      ]
    },
    options:{
      title:{
        display:true,
        text:'mmHg',
        position: 'left'
      },
      layout: {
          padding: {
              left: 0,
              right: 0,
              top: 10,
              bottom: 0
          }
      },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
    });


  })
