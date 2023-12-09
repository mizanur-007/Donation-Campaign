import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useLoaderData } from "react-router-dom";
import { render } from "react-dom";

const Statistics = () => {
  const getLocalData = JSON.parse(localStorage.getItem("donations"))||[];
  const localPrice = [];
  getLocalData.map((item) => localPrice.push(item.price));
  const sumOfDonated = localPrice.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  const sumOfDonatedInt = parseInt(sumOfDonated);

  const allDonationData = useLoaderData();
  const totalPrice = [];
  allDonationData.map((items) => totalPrice.push(items.price));
  const sumOfTotalDonation = totalPrice.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  const sumOfTotalDonationInt = parseInt(sumOfTotalDonation, 10);

  const remaining = sumOfTotalDonationInt - sumOfDonatedInt;

  const data = [
    { name: "Category A", value: remaining },
    { name: "Category B", value: sumOfDonatedInt || 0 }
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.35;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        className="font-bold text-white text-3xl"
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieStyle = {
    width: 600,
    height: 600,
  };

  return (
<>
<div className="flex items-center justify-center mt-10">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>

<div className="flex flex-col md:flex-row items-center justify-center gap-9 mb-11">
    <div className="flex items-center gap-3">
        <p className="text-[#0B0B0B] text-lg">Your Donation</p>
        <div className="bg-[#00C49F] w-[100px] h-3"></div>
    </div>
    <div className="flex items-center gap-3">
        <p className="text-[#0B0B0B] text-lg">Total Donation</p>
        <div className="bg-[#FF444A] w-[100px] h-3"></div>
    </div>
</div>
</>
  );
};

export default Statistics;


