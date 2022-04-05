import React from 'react';
import { Tooltip } from 'react-bootstrap';
import { Area, XAxis, YAxis } from 'recharts';

<h1> Area chart</h1>
const AreaChart = () => {
    <h1> Area chart</h1>
        const data = [
            {
              name: "2000",
              Investe: 400,
              Revenue: 400,
              amt: 2400
            },
            {
              name: "2001",
              Investe: 300,
              Revenue: 398,
              amt: 2210
            },
            {
              name: "2002",
              Investe: 200,
              Revenue: 900,
              amt: 2290
            },
            {
              name: "2003",
              Investe: 780,
              Revenue: 908,
              amt: 2000
            },
            {
              name: "2004",
              Investe: 890,
              Revenue: 800,
              amt: 2181
            },
            {
              name: "2005",
              Investe: 390,
              Revenue: 300,
              amt: 2500
            },
            {
              name: "2006",
              Investe: 490,
              Revenue: 300,
              amt: 2100
            }
          ];
    return (
        <div>
            <h5> Investe Vs Revenue</h5>
            <AreaChart width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
              <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Investe" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};

export default AreaChart;