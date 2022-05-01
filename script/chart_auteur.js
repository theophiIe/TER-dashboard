const data_auteur_json = JSON.parse(document.getElementById('data_auteur').textContent);
const data_personnalite_json = JSON.parse(document.getElementById('data_personnalite').textContent);

const data = {
    labels: Object.keys(data_auteur_json),
    datasets: [{
        label: 'My First Dataset',
        data: Object.keys(data_auteur_json).map(function (key) { return data_auteur_json[key]; }),
        backgroundColor: [
            'rgb(75, 207, 250)',
            'rgb(87, 95, 207)',
            'rgb(239, 87, 119)',
            'rgb(11, 232, 129)',
            'rgb(72, 84, 96)',
            'rgb(255, 94, 87)',
            'rgb(255, 221, 89)',
            'rgb(30, 39, 46)',
            'rgb(255, 168, 1)',
            'rgb(0,113,255)',
            'rgb(101,67,34)',
            'rgb(210, 218, 226)',
        ],
        hoverOffset: 4
    }]
};

const data2 = {
    labels: Object.keys(data_personnalite_json),
    datasets: [{
        label: 'My First Dataset',
        data: Object.keys(data_personnalite_json).map(function (key) { return data_personnalite_json[key]; }),
        backgroundColor: [
            'rgb(75, 207, 250)',
            'rgb(87, 95, 207)',
            'rgb(239, 87, 119)',
            'rgb(11, 232, 129)',
            'rgb(72, 84, 96)',
            'rgb(255, 94, 87)',
            'rgb(255, 221, 89)',
            'rgb(30, 39, 46)',
            'rgb(255, 168, 1)',
            'rgb(0,113,255)',
            'rgb(101,67,34)',
            'rgb(210, 218, 226)',
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

const config2 = {
    type: 'doughnut',
    data: data2,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Nombre d\'article en fonction des personnalitées',
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

const graphe1 = new Chart(document.getElementById('myChart'), config);
const graphe2 = new Chart(document.getElementById('myChart2'), config2);