import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import Styleadmin from './admin.module.css'

const chartSetting = {
  yAxis: [
    {
      label: 'No. of Patients',
    },
  ],
  width: 990,
  height: 350,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};
const dataset = [
  {
    2023: 159 , 2024: 257 , month: 'Jan',
  },
  {
    2023: 550 , 2024: 352 , month: 'Fev',
  },
  {
    2023: 447 , 2024: 553 , month: 'Mar',
  },
  {
    2023: 354 , 2024: 156 , month: 'Apr',
  },
  {
    2023: 257 , 2024: 469 , month: 'May',
  },
  {
    2023: 260 , 2024: 363 , month: 'June',
  },
  {
    2023: 159 , 2024: 200 , month: 'July',
  },
  {
    2023: 365 , 2024: 260 , month: 'Aug',
  },
  {
    2023: 451 , 2024: 459 , month: 'Sept',
  },
  {
    2023: 560 , 2024: 365 , month: 'Oct',
  },
  {
    2023: 267 , 2024: 164 , month: 'Nov',
  },
  {
    2023: 161 , 2024: 370 , month: 'Dec',
  },
];

const valueFormatter = (value) => `${value} patients`;

export default function BarsDataset() {
  return (
    <div className={Styleadmin.barcontainer}>
        <h2>Hospital Survey</h2>
        <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: '2023', label: '2023', valueFormatter , color:'lightgreen'},
        { dataKey: '2024', label: '2024', valueFormatter , color: 'lightblue'},
      ]}
      {...chartSetting}
    />
    </div>
    
  );
}