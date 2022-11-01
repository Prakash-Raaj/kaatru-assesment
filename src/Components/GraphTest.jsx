import React from 'react';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from 'recharts';
const GraphTest = () => {
  const data = [
    {
      name: '27%',
      rain: 27,
      amt: 2400,
    },
    {
      name: '29%',
      rain: 29,
      amt: 2210,
    },
    {
      name: '58%',
      rain: 58,
      amt: 2290,
    },
    {
      name: '75%',
      rain: 75,
      amt: 2000,
    },
    {
      name: '33%',
      rain: 33,
      amt: 2181,
    },
    {
      name: '20%',
      rain: 20,
      amt: 2500,
    },
    {
      name: '73%',
      rain: 73,
      amt: 2100,
    },
    {
      name: '49%',
      rain: 49,
      amt: 2100,
    },
  ];
  return (
    <>
      <ResponsiveContainer width={800} height={250}>
        <AreaChart
          // width={800}
          // height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="#5C9CE5"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="#5C9CE5"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis hide />
          <CartesianGrid strokeDasharray="3 1" />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="rain"
            stroke="#5C9CE5"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default GraphTest;
