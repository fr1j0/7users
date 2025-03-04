"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Chart = ({ data }: { data: any[] }) => {
  return (
    <div className="w-full h-[450px] flex flex-col items-center">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
        >
          <XAxis
            dataKey="department"
            angle={-20}
            textAnchor="end"
            interval={0}
          />
          <YAxis />
          <Tooltip
            contentStyle={{ background: "white", color: "black" }}
            labelStyle={{ color: "black" }}
          />
          <Legend wrapperStyle={{ position: "relative", top: 10 }} />
          <Bar dataKey="male" fill="#3498db" />
          <Bar dataKey="female" fill="#e74c3c" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
