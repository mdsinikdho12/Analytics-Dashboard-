import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { ArrowUpRight } from "lucide-react";

// ইমেজের ডামি ডেটা
const data = [
  { day: "S", work: 40, extra: 45 },
  { day: "M", work: 35, extra: 30 },
  { day: "T", work: 55, extra: 40 },
  { day: "W", work: 45, extra: 50 },
  { day: "T", work: 48, extra: 42 }, // আজকের দিন (Active)
  { day: "F", work: 60, extra: 65 },
  { day: "S", work: 55, extra: 58 },
  { day: "M", work: 50, extra: 52 },
  { day: "T", work: 52, extra: 55 },
];

const ProgressChart = () => {
  return (
    <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100 w-full h-full min-h-[350px] relative">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Progress</h2>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-4xl font-extrabold text-slate-900">8.2h</span>
            <span className="text-xs text-slate-400 font-medium leading-tight">
              Work Time <br /> This Week
            </span>
          </div>
        </div>
        <button className="p-2 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
          <ArrowUpRight size={20} className="text-slate-600" />
        </button>
      </div>

      {/* Chart Section */}
      <div className="h-[200px] w-full mt-8 relative">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 10, left: 10, bottom: 0 }}>
            {/* Background Grid Lines (Vertical Only) */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={true}
              horizontal={false}
              stroke="#E2E8F0"
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748B", fontSize: 12, fontWeight: 500 }}
              dy={15}
            />

            <YAxis hide domain={[0, 80]} />

            {/* Custom Tooltip (The Green Box in Image) */}
            <Tooltip
              cursor={false}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-[#0B4D53] text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg mb-20">
                      4h 30m
                    </div>
                  );
                }
                return null;
              }}
            />

            {/* Today's Highlight Indicator (The T circle with gradient) */}
            <ReferenceLine x="T" stroke="#0B4D53" strokeWidth={0} />

            {/* The Two Lines (Smooth Curves) */}
            <Line
              type="monotone"
              dataKey="work"
              stroke="#0B4D53" // গাঢ় টিল রঙ
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 4, fill: "#0B4D53", strokeWidth: 0 }}
            />
            <Line
              type="monotone"
              dataKey="extra"
              stroke="#D4E34B" // লেবু সবুজ রঙ
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 4, fill: "#D4E34B", strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Custom Highlight for 'T' (Bottom Circle) */}
        <div className="absolute bottom-[2px] left-[44.5%] -translate-x-1/2 flex flex-col items-center pointer-events-none">
          <div className="w-8 h-[160px] bg-gradient-to-t from-[#0B4D53]/20 to-transparent rounded-full mb-[-12px]"></div>
          <div className="w-7 h-7 bg-[#0B4D53] rounded-full flex items-center justify-center text-white text-[10px] font-bold ring-4 ring-white">
            T
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;
