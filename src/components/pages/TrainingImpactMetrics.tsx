import { ArrowUpRight } from "lucide-react";

export default function TrainingImpactMetrics() {
  return (
    <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] w-full h-100">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Training Impact Metrics
          </h3>

          <div className="flex items-center gap-4 mt-2 text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-700"></span>
              Hard Skill
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-lime-400"></span>
              Soft Skill
            </div>
          </div>
        </div>

        <button className="p-2 rounded-lg bg-white/40 hover:bg-white/60 border border-white/30">
          <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="mb-5">
        <div className="flex justify-between text-sm text-gray-700 mb-1">
          <span>Creativity</span>
          <span>66.8%</span>
        </div>

        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full w-[66.8%] bg-teal-700 rounded-full"></div>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-sm text-gray-700 mb-1">
          <span>Problem Solving</span>
          <span>74.5%</span>
        </div>

        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full w-[74.5%] bg-lime-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
