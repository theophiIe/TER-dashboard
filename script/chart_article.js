/*global Chart*/
/*eslint no-undef: "error"*/

const data_creation_json = JSON.parse(document.getElementById('data_date_creation').textContent);
const data_modification_json = JSON.parse(document.getElementById('data_date_modification').textContent);

const data = {
    labels: Object.keys(data_creation_json),
    datasets: [
        {
            label: 'Date création',
            data: Object.keys(data_creation_json).map(function (key) { return data_creation_json[key]; }),
            borderColor: [
                'rgb(255, 99, 132)',
            ],
            backgroundColor: [
                'rgb(255, 99, 132)',
            ],
        }
    ]
};

const data2 = {
    labels: Object.keys(data_modification_json),
    datasets: [
        {
            label: 'Date modification',
            data: Object.keys(data_modification_json).map(function (key) { return data_modification_json[key]; }),
            borderColor: [
                'rgb(54, 162, 235)',
            ],
            backgroundColor: [
                'rgb(54, 162, 235)',
            ],
        }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Nombre d\'article créer en fonction de la date',
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

const config2 = {
    type: 'line',
    data: data2,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Nombre d\'article modifié en fonction de la date',
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

const graphe1 = new Chart(document.getElementById('myChart'), config);
const graphe2 = new Chart(document.getElementById('myChart2'), config2);