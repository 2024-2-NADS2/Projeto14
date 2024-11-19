'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';


const BarChartComponent = ({ plastico, vidro, metal, papel }) => {

  console.log(plastico)
  const materiais = [
    {
      "name": "Plastico",
      "Quantidade": plastico,
      fill: '#542929'
    },
    {
      "name": "Vidro",
      "Quantidade": vidro,
      fill: '#3F4735'
    },
    {
      "name": "Metal",
      "Quantidade": metal,
      fill: '#C2A12B'
    },
    {
      "name": "Papel",
      "Quantidade": papel,
      fill: '#505C69'
    }
  ];
  return (
      <BarChart
        width={600}
        height={500}
        data={materiais}
        margin={{
          left: 100,
          bottom: 40,
          top: 0
        }}
      >
        <XAxis tick={{fontSize: 30, fontFamily:'dosis', fontWeight:'bold', opacity:'1000', fill:'#071F19'}}dataKey="name" axisLine={false} tickLine={false} dy={20}/>
        <Tooltip cursor={{fill:'transparent'}}/>
        <Bar dataKey="Quantidade" fill="#394130" radius={[25, 25, 0, 0]}/>
      </BarChart>
  );
};

export default BarChartComponent;
