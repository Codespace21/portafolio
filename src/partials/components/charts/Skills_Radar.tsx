import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

//Data
import skill from "../../../data/skills.json"

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function Skills_Radar() {

  const data = {
    labels: ['Comunicación Asertiva', 'Interpretación de Datos', 'Resolución de Problemas', 'Autogestión', 'Innovación', 'Trabajo en Equipo', 'Adaptación del Cambio'],
    datasets: [
      {
        label: '',
        data: [72, 85, 91, 80, 68, 70, 88],
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      },
    ],    
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      r: {
        max: 100,
        min: 0,        
        grid: {
          color: '#1C2431'
        },
        pointLabels: {
          color: 'gray',
          font: {
            size: 12
        }
        },
        ticks: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        position: 'top' as const,
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },    
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex justify-center items-center w-full xs:px-6 lg:p-12">
        <Radar data={data} options={options} />
      </div>
    </div>
  )
}