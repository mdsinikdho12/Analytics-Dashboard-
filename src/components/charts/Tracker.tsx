import React from "react";
import { ResponsivePie } from "@nivo/pie";

const Tracker: React.FC = () => {
  const data = [
    { id: "completed", value: 65, color: "#D4E34B" },
    { id: "remaining", value: 35, color: "#E2E8F0" },
  ];

  return (
    <div
      className=" bg-white/20 backdrop-blur-xl border border-white/30 
        shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500 p-6 rounded-[32px] w-full max-w-xs">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold text-slate-800">Tracker</h2>
        <select className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 outline-none text-slate-500">
          <option>History</option>
        </select>
      </div>

      <div className="h-64 w-full relative">
        <ResponsivePie
          data={data}
          innerRadius={0.8}
          padAngle={0}
          cornerRadius={45}
          activeOuterRadiusOffset={8}
          colors={{ datum: "data.color" }}
          enableArcLabels={false}
          enableArcLinkLabels={false}
          isInteractive={true}
          defs={[
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#CBD5E1",
              rotation: -45,
              lineWidth: 1,
              spacing: 4,
            },
          ]}
          fill={[
            {
              match: { id: "remaining" },
              id: "lines",
            },
          ]}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-extrabold text-slate-800">11:19</span>
          <span className="text-[11px] text-slate-400 font-medium">
            4h: 3m Left
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
