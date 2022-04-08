import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

import {date,unique,sc_time,fetchData,schedule} from './config';

const valAry = [{},{},{}]

const dataFunction = () =>{
    const val = fetchData().map((e)=>{
     const data =  
        {
          name:e.item_date,
          time:e.schedule_time,
        }
      
      return data;
    })
return val;
}

const d = dataFunction();

const data = d;
console.log(data);


// [
//   {
//     name:unique[0],
//     schedule: 1
//   },
//   {
//     name:unique[1],
//     schedule: 9
//   },
//   {
//     name:unique[2],
//     schedule: 7
//   },
//   {
//     name:unique[3],
//     schedule: 5
//   },
//   {
//     name:unique[4],
//     schedule: 7
//   },
//   {
//     name:unique[5],
//     schedule: 7
//   },
//   {
//     name:unique[6],
//     schedule: 13
//   },
//   {
//     name:unique[7],
//     schedule: 12
//   },
//   {
//     name:unique[8],
//     schedule: 14
//   },
//   {
//     name:unique[9],
//     schedule: 13
//   },
//   {
//     name:unique[10],
//     schedule: 4
//   },
//   {
//     name:unique[11],
//     schedule: 17
//   },
//   {
//     name:unique[12],
//     schedule: 6
//   },
//   {
//     name:unique[13],
//     schedule: 4
//   },
//   {
//     name:unique[14],
//     schedule: 7
//   },
//   {
//     name:unique[15],
//     schedule: 2
//   },
//   {
//     name:unique[16],
//     schedule: 19
//   },
//   {
//     name:unique[17],
//     schedule: 15
//   },
//   {
//     name:unique[18],
//     schedule: 8
//   },
//   {
//     name:unique[19],
//     schedule: 7
//   },
//   {
//     name:unique[20],
//     schedule: 13
//   }
// ]


export default function App() {
  fetchData();
  return (
    <LineChart
      width={1500}
      height={700}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis dataKey ="time"/>
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="schedules"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="time"  stroke="#82ca9d" />
    </LineChart>
  );
}
