/*global Chart*/
/*eslint no-undef: "error"*/

const data_json = JSON.parse(document.getElementById('data').textContent);

const data = {
    labels: Object.keys(data_json),
    datasets: [{
        label: 'My First Dataset',
        data: Object.keys(data_json).map(key => data_json[key]),
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
};

const config = {
    type: 'bar',
    data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Nombres de références par article',
                position: 'bottom',
                padding: {
                    top: 20
                },
                font: {
                    size: 27,
                }
            }
        }
    },
};

/*eslint-disable no-unused-vars*/
const graphe1 = new Chart(document.getElementById('myChart'), config);
/*eslint-disable no-unused-vars*/