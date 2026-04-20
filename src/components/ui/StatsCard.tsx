import React from "react";
import { Users, ArrowUp } from "lucide-react";
interface StatsProps {
  title: string;
  disc: string;
  count: string;
  growth: string;
}

const StatsCard: React.FC<StatsProps> = ({ title, disc, count, growth }) => {
  return (
    <div
      className=" bg-white/20 backdrop-blur-xl border border-white/30 
        shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500 p-6 rounded-[32px]   flex flex-col gap-6 w-full max-w-sm">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-[#BAE5DE] rounded-xl text-slate-600">
          <Users className="text-[#045558]" size={24} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
      </div>

      <div className="space-y-1">
        <p className="text-sm text-slate-400 font-medium">{disc}</p>
        <div className="flex items-center gap-3">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            {count}
          </h2>

          <div className="flex items-center gap-0.5 bg-slate-50 px-2 py-1 rounded-full text-[10px] font-bold text-slate-500">
            <ArrowUp size={12} strokeWidth={3} className="text-slate-400" />
            <span>{growth}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
