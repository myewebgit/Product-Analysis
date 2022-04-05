import React from 'react';
import { Tooltip } from 'react-bootstrap';
import { Legend, Line, LineChart, PieChart,  XAxis, YAxis } from 'recharts';
import AreaChart from './AreaChart/AreaChart';

const Dashboard = () => {
    const data = [
        {
          name: "Jan",
          sale: 400,
          cost: 400,
          amt: 2400
        },
        {
          name: "Feb",
          sale: 300,
          cost: 398,
          amt: 2210
        },
        {
          name: "Mar",
          sale: 200,
          cost: 900,
          amt: 2290
        },
        {
          name: "Apr",
          sale: 780,
          cost: 908,
          amt: 2000
        },
        {
          name: "May",
          sale: 890,
          cost: 800,
          amt: 2181
        },
        {
          name: "Jun",
          sale: 390,
          cost: 300,
          amt: 2500
        },
        {
          name: "Jul",
          sale: 490,
          cost: 300,
          amt: 2100
        }
      ];
     
    return (
        <div>
            <h5>Month wise sale</h5>
            <LineChart width={500} height={300} data={data} margin={{
            top: 100,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
            
            
            <XAxis dataKey={'name'}></XAxis>
            <YAxis dataKey={'amt'}></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
            <Line type="monotone" dataKey="cost" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sale" stroke="#82ca9d" />
        </LineChart>
        

        <AreaChart></AreaChart> 
        {/* <PieChart></PieChart> */}
        </div>
        
    );
};

export default Dashboard;