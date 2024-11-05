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
      fill: '#E7C590'
    },
    {
      "name": "Papel",
      "Quantidade": papel,
      fill: '#505C69'
    }
  ];
  return (
    <ResponsiveContainer width="85%" height="50%">
      <BarChart
        width={200}
        height={2000}
        data={materiais}
        margin={{
          left: 100,
          bottom: 25,
          top: 70
        }}
      >
        <XAxis tick={{fontSize: 30, fontFamily:'dosis', fontWeight:'bold', opacity:'1000', fill:'#071F19'}}dataKey="name" axisLine={false} tickLine={false} dy={20}/>
        <Tooltip cursor={{fill:'transparent'}}/>
        <Bar dataKey="Quantidade" fill="#394130" radius={[25, 25, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
