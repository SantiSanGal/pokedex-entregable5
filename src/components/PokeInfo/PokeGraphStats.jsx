import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

export const PokeGraphStats = ({ poke }) => {
    const data = {
        labels: poke?.stats.map(stat => stat.stat.name),
        datasets: [{
            label: 'Stats',
            backgroundColor: 'red',
            borderColor: 'black',
            data: poke?.stats.map(stat => stat.base_stat)
        }]
    }

    //configación de la gráfica
    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 1,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
                display: false
            },
            title: {
                display: true,
                text: 'Stats',
            },
        },
    };
    
    // console.log(data.labels);
    // console.log(poke?.stats.map(stat => stat.base_stat));

    return (
        <div>
            <div style={{ width: '100%', height: '100%' }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    )
}
