import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MoreVertical, X, Plus } from "lucide-react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const COLORS: { bg: string; dot: string }[] = [
  { bg: "bg-[#F9FCE5]", dot: "border-[#D4E34B]" },
  { bg: "bg-[#E9F1F2]", dot: "border-[#4B93A3]" },
];

interface Event {
  time: string;
  title: string;
  dept: string;
  colorIdx: number;
}

type EventMap = Record<string, Event[]>;

function fmt(d: Date): string {
  return d.toISOString().split("T")[0];
}

function formatTime(t: string): string {
  const [h, m] = t.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return `${hour}:${String(m).padStart(2, "0")} ${ampm}`;
}

const today = new Date();

const initialEvents: EventMap = {
  [fmt(today)]: [
    {
      time: "10:00",
      title: "Product Training Session",
      dept: "Customer Support",
      colorIdx: 0,
    },
    {
      time: "11:00",
      title: "Budget Review Meeting",
      dept: "Finance",
      colorIdx: 1,
    },
    {
      time: "14:00",
      title: "Website Redesign Update",
      dept: "Marketing",
      colorIdx: 0,
    },
    {
      time: "15:30",
      title: "Compliance Training",
      dept: "Human Resources",
      colorIdx: 1,
    },
  ],
};

const ScheduleCard: React.FC = () => {
  const [weekOffset, setWeekOffset] = useState(0);
  const [activeDate, setActiveDate] = useState(new Date(today));
  const [events, setEvents] = useState<EventMap>(initialEvents);
  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDept, setNewDept] = useState("");
  const [newTime, setNewTime] = useState("");

  function getWeekStart(offset: number): Date {
    const d = new Date(today);
    d.setDate(d.getDate() - d.getDay() + offset * 7);
    return d;
  }

  const weekStart = getWeekStart(weekOffset);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);

  const monthLabel =
    weekStart.getMonth() === weekEnd.getMonth()
      ? `${MONTHS[weekStart.getMonth()]} ${weekStart.getFullYear()}`
      : `${MONTHS[weekStart.getMonth()].slice(0, 3)} – ${MONTHS[weekEnd.getMonth()].slice(0, 3)} ${weekStart.getFullYear()}`;

  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    return d;
  });

  const activeKey = fmt(activeDate);
  const dayEvents = [...(events[activeKey] || [])].sort((a, b) =>
    a.time.localeCompare(b.time),
  );

  function handleAddEvent() {
    if (!newTitle.trim() || !newTime) return;
    const key = activeKey;
    const existing = events[key] || [];
    const colorIdx = existing.length % 2;
    setEvents({
      ...events,
      [key]: [
        ...existing,
        {
          time: newTime,
          title: newTitle.trim(),
          dept: newDept.trim() || "General",
          colorIdx,
        },
      ],
    });
    setNewTitle("");
    setNewDept("");
    setNewTime("");
    setShowModal(false);
  }

  function handleDeleteEvent(idx: number) {
    const updated = [...(events[activeKey] || [])];
    updated.splice(idx, 1);
    setEvents({ ...events, [activeKey]: updated });
  }

  return (
    <div
      className=" bg-white/20 backdrop-blur-xl border border-white/30 
        shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500 p-6 rounded-[32px] w-full  relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Schedule</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowModal(true)}
            className="p-1.5 text-slate-500 hover:bg-slate-50 rounded-full"
            title="Add event">
            <Plus size={18} />
          </button>
          <button className="p-1 text-slate-400 hover:bg-slate-50 rounded-full">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Calendar Box */}
      <div className="bg-[#F8FAFC] p-4 rounded-3xl mb-8">
        <div className="flex justify-between items-center mb-4 px-2">
          <span className="font-bold text-lg text-slate-800">{monthLabel}</span>
          <div className="flex gap-2">
            <button
              onClick={() => setWeekOffset((o) => o - 1)}
              className="p-1 bg-white rounded-lg border border-slate-100 text-slate-400 hover:bg-slate-50">
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setWeekOffset((o) => o + 1)}
              className="p-1 bg-white rounded-lg border border-slate-100 text-slate-400 hover:bg-slate-50">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          {weekDays.map((d, idx) => {
            const isActive = fmt(d) === activeKey;
            const isToday = fmt(d) === fmt(today);
            return (
              <button
                key={idx}
                onClick={() => setActiveDate(new Date(d))}
                className={`flex flex-col items-center p-2 rounded-xl transition-all border-none cursor-pointer ${
                  isActive
                    ? "bg-[#0B4D53] text-white scale-110"
                    : "bg-transparent text-slate-400 hover:bg-slate-200"
                }`}>
                <span
                  className={`text-[10px] uppercase font-medium mb-1 ${
                    isActive
                      ? "text-white/70"
                      : isToday
                        ? "text-[#0B4D53]"
                        : "text-slate-400"
                  }`}>
                  {DAYS[d.getDay()]}
                </span>
                <span
                  className={`text-sm font-bold ${
                    isActive
                      ? "text-white"
                      : isToday
                        ? "text-[#0B4D53]"
                        : "text-slate-500"
                  }`}>
                  {d.getDate()}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Timeline Events */}
      <div className="relative space-y-4">
        <div className="absolute left-[72px] top-0 bottom-0 w-[1px] border-l border-dashed border-slate-200" />

        {dayEvents.length === 0 && (
          <p className="text-center text-sm text-slate-400 py-6">
            No events — click + to add one
          </p>
        )}

        {dayEvents.map((event, idx) => {
          const c = COLORS[event.colorIdx % COLORS.length];
          return (
            <div key={idx} className="flex items-center gap-4 relative z-10">
              <span className="text-[12px] font-bold text-slate-900 w-[60px]">
                {formatTime(event.time)}
              </span>
              <div
                className={`w-3 h-3 rounded-full bg-white border-2 ${c.dot}`}
              />
              <div
                className={`${c.bg} flex-1 p-3 rounded-xl border border-white/50`}>
                <h4 className="text-sm font-bold text-slate-800 leading-tight">
                  {event.title}
                </h4>
                <p className="text-[11px] text-slate-400 font-medium">
                  {event.dept}
                </p>
              </div>
              <button
                onClick={() => handleDeleteEvent(idx)}
                className="text-slate-300 hover:text-slate-500 transition-colors p-1">
                <X size={14} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Add Event Modal */}
      {showModal && (
        <div className="absolute inset-0 bg-black/20 rounded-[32px] z-20 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl p-5 w-full shadow-lg">
            <h3 className="text-base font-bold text-slate-800 mb-4">
              New event
            </h3>

            <input
              type="text"
              placeholder="Event title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-800 mb-3 outline-none focus:border-[#0B4D53]"
            />
            <input
              type="text"
              placeholder="Department"
              value={newDept}
              onChange={(e) => setNewDept(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-800 mb-3 outline-none focus:border-[#0B4D53]"
            />
            <input
              type="time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-800 mb-4 outline-none focus:border-[#0B4D53]"
            />

            <div className="flex gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2 text-sm text-slate-500 border border-slate-200 rounded-xl hover:bg-slate-50">
                Cancel
              </button>
              <button
                onClick={handleAddEvent}
                className="flex-1 py-2 text-sm font-semibold text-white bg-[#0B4D53] rounded-xl hover:bg-[#0a4148]">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleCard;
