import React from 'react';
import { Bar } from 'react-chartjs-2';

function ChartLine(props) {
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  window.chartColors = {
    nett: 'rgba(55,176,76,0.5)',
    gross: 'rgba(40,158,69,0.5)',
    avg: 'rgba(122,226,140,0.5)',
    unit: 'rgba(112,112,112,0.5)',
    line: 'rgba(255,232,84,0.5)',
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Nett',
        backgroundColor: [window.chartColors.nett],
        yAxisID: 'y-axis-1',
        data: props.dataNett,
      },
      {
        label: 'Gross',
        backgroundColor: window.chartColors.gross,
        yAxisID: 'y-axis-1',
        data: props.dataGross,
      },
      {
        label: 'Average Purchase Value',
        backgroundColor: window.chartColors.avg,
        data: props.dataAPV,
      },
      {
        label: 'Unit per Transaction',
        backgroundColor: window.chartColors.unit,
        data: props.dataUPT,
      },
      {
        label: '-',
        yAxisID: 'y-axis-2',
        data: props.dataLine,
        type: 'line',
        borderColor: [window.chartColors.line],
      },
    ],
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      title: {
        display: false,
      },
      legend: {
        position: 'bottom',
      },
      tooltips: {
        mode: 'index',
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            stacked: true,
          },
        ],
        yAxes: [
          {
            type: 'linear',
            stacked: true,
            display: true,
            position: 'left',
            id: 'y-axis-1',
            ticks: {
              beginAtZero: true,
              suggestedMin: 0,
              suggestedMax: 10,
              min: 0,
            },
          },
          {
            type: 'linear',
            display: false,
            id: 'y-axis-2',
            ticks: {
              beginAtZero: true,
              suggestedMin: 0,
              suggestedMax: 10,
              min: 0,
            },
          },
        ],
      },
    },
  };

  return (
    <div className='chart-body'>
      <div className='chart-box'>
        <Bar data={config.data} options={config.options} />
      </div>
    </div>
  );
}

export default ChartLine;
