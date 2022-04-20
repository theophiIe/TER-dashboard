const data_json = JSON.parse(document.getElementById('data').textContent);

const data = {
    labels: Object.keys(data_json),
    datasets: [{
        label: 'My First Dataset',
        data: Object.keys(data_json).map(function (key) { return data_json[key]; }),
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(54,235,57)',
            'rgb(255,119,0)',
            'rgb(123,94,225)'
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'doughnut',
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Nombre d\'article en fonction des auteurs',
                position: 'bottom',
                padding: {
                    top: 20
                },
                font: {
                    size: 27,
                }
            }
        }
    }
};

new Chart(document.getElementById('myChart'), config);