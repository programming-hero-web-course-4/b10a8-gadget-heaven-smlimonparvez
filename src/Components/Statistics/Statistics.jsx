import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "Macbook",
      price: 590,
    },
    {
      name: "Iphone",
      price: 868,
    },
    {
      name: "Ipad",
      price: 1397,
    },
    {
      name: "Smart Watch",
      price: 1480,
    },
    {
      name: "AirPods",
      price: 1520,
    },
    {
      name: "Dell",
      price: 1400,
    },
  ];
  return (
    <div>
      <div className="w-full bg-gradient-to-b from-transparent to-gray-100">
        <div className="bg-purple-500 flex flex-col justify-center items-center px-10 py-28 md:px-32 md:py-10  text-white space-y-7">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            Statistics
          </h1>
          <p className="text-center ">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
        </div>
      </div>
      <div style={{ width: "100%", height: 300 }} className="mt-10 bg-gradient-to-b from-transparent to-gray-100" >
        <h1 className="text-center text-3xl font-bold">Statistics</h1>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="price"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="price" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="price" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
