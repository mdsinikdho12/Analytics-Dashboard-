import { Plus, MoreVertical, ChevronLeft, ChevronRight, X } from "lucide-react";

export default function ScheduleCard() {
  return (
    <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] w-full">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-semibold text-gray-800">Schedule</h3>

        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded-md hover:bg-white/40">
            <Plus size={16} />
          </button>
          <button className="p-1.5 rounded-md hover:bg-white/40">
            <MoreVertical size={16} />
          </button>
        </div>
      </div>

      <div className="bg-white/30 rounded-xl p-4 mb-5">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-sm font-semibold text-gray-700">April 2026</h4>

          <div className="flex gap-2">
            <button className="p-1 rounded-md bg-white/40">
              <ChevronLeft size={14} />
            </button>
            <button className="p-1 rounded-md bg-white/40">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 text-center text-xs text-gray-500">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d, i) => (
            <div key={i} className="space-y-1">
              <p>{d}</p>
              <div
                className={`mx-auto w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium
                ${d === "TUE" ? "bg-[#1B4332] text-white" : ""}`}>
                {19 + i}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex gap-3 items-start">
          <div className="w-16 text-xs text-gray-500 pt-2">10:00 AM</div>

          <div className="flex-1 flex items-start gap-3">
            <span className="w-2.5 h-2.5 mt-2 rounded-full border-2 border-yellow-400"></span>

            <div className="flex-1 bg-yellow-100/60 rounded-xl p-3">
              <p className="text-sm font-semibold text-gray-800">
                Product Training Session
              </p>
              <p className="text-xs text-gray-500">Customer Support</p>
            </div>

            <X size={14} className="text-gray-400 mt-2 cursor-pointer" />
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <div className="w-16 text-xs text-gray-500 pt-2">11:00 AM</div>

          <div className="flex-1 flex items-start gap-3">
            <span className="w-2.5 h-2.5 mt-2 rounded-full border-2 border-blue-400"></span>

            <div className="flex-1 bg-blue-100/60 rounded-xl p-3">
              <p className="text-sm font-semibold text-gray-800">
                Budget Review Meeting
              </p>
              <p className="text-xs text-gray-500">Finance</p>
            </div>

            <X size={14} className="text-gray-400 mt-2 cursor-pointer" />
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <div className="w-16 text-xs text-gray-500 pt-2">2:00 PM</div>

          <div className="flex-1 flex items-start gap-3">
            <span className="w-2.5 h-2.5 mt-2 rounded-full border-2 border-yellow-400"></span>

            <div className="flex-1 bg-yellow-100/60 rounded-xl p-3">
              <p className="text-sm font-semibold text-gray-800">
                Website Redesign Update
              </p>
              <p className="text-xs text-gray-500">Marketing</p>
            </div>

            <X size={14} className="text-gray-400 mt-2 cursor-pointer" />
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <div className="w-16 text-xs text-gray-500 pt-2">3:30 PM</div>

          <div className="flex-1 flex items-start gap-3">
            <span className="w-2.5 h-2.5 mt-2 rounded-full border-2 border-blue-400"></span>

            <div className="flex-1 bg-blue-100/60 rounded-xl p-3">
              <p className="text-sm font-semibold text-gray-800">
                Compliance Training
              </p>
              <p className="text-xs text-gray-500">Human Resources</p>
            </div>

            <X size={14} className="text-gray-400 mt-2 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
